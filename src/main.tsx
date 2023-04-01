import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './ui/Router';
import './styles/main.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
