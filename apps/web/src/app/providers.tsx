import type { FC, ReactNode } from 'react';
import { ErrorBoundary } from '../components/feedback/ErrorBoundary.js';

interface ProvidersProps {
  children: ReactNode;
}

export const AppProviders: FC<ProvidersProps> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
