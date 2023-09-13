/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScoreBoardCreateFormInputValues = {
    username?: string;
    score?: number;
};
export declare type ScoreBoardCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreBoardCreateFormOverridesProps = {
    ScoreBoardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreBoardCreateFormProps = React.PropsWithChildren<{
    overrides?: ScoreBoardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScoreBoardCreateFormInputValues) => ScoreBoardCreateFormInputValues;
    onSuccess?: (fields: ScoreBoardCreateFormInputValues) => void;
    onError?: (fields: ScoreBoardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreBoardCreateFormInputValues) => ScoreBoardCreateFormInputValues;
    onValidate?: ScoreBoardCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreBoardCreateForm(props: ScoreBoardCreateFormProps): React.ReactElement;
