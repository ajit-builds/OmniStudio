import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';
import { ActionLink } from '../ui/ActionLink.js';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[Studio Omni ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.boundaryContainer} role="alert">
          <div className={styles.boundaryCard}>
            <div className={styles.vermilionIndicator} />
            <h1 className={styles.headline}>System Disruption</h1>
            <p className={styles.message}>
              An unexpected error interrupted the presentation layer. The system is designed to
              isolate runtime exceptions safely.
            </p>
            {this.state.error && (
              <pre className={styles.detailsBox}>{this.state.error.message}</pre>
            )}
            <div className={styles.actions}>
              <ActionLink variant="solid" onClick={this.handleReset}>
                Reload Application
              </ActionLink>
              <ActionLink to="/" variant="outline">
                Return to Overview
              </ActionLink>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
