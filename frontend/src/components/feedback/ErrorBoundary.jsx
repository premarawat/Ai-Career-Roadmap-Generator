import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-secondary-50 dark:bg-secondary-950">
          <div className="text-center">
            <svg
              className="h-16 w-16 text-danger-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4v2m0 4v2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
              Something went wrong
            </h1>
            <p className="text-secondary-600 dark:text-secondary-400 mt-2">
              Please refresh the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left bg-danger-100 dark:bg-danger-950 p-4 rounded-lg">
                <summary className="cursor-pointer font-semibold text-danger-900 dark:text-danger-100">
                  Error details
                </summary>
                <pre className="mt-2 text-xs overflow-auto text-danger-800 dark:text-danger-200">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
