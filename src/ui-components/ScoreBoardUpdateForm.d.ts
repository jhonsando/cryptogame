/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ScoreBoard } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScoreBoardUpdateFormInputValues = {
    username?: string;
    score?: number;
};
export declare type ScoreBoardUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreBoardUpdateFormOverridesProps = {
    ScoreBoardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreBoardUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScoreBoardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scoreBoard?: ScoreBoard;
    onSubmit?: (fields: ScoreBoardUpdateFormInputValues) => ScoreBoardUpdateFormInputValues;
    onSuccess?: (fields: ScoreBoardUpdateFormInputValues) => void;
    onError?: (fields: ScoreBoardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreBoardUpdateFormInputValues) => ScoreBoardUpdateFormInputValues;
    onValidate?: ScoreBoardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreBoardUpdateForm(props: ScoreBoardUpdateFormProps): React.ReactElement;
