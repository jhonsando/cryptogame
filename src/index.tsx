import React from 'react';
import ReactDOM from 'react-dom/client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from './aws-exports';

import App from 'routes';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './index.css';

Amplify.configure(config);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
       <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);
