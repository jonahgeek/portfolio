/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import { Notifications } from "components/Notifications/Notifications";
import { AuthProvider } from "lib/auth";
import { queryClient } from "lib/react-query";
import * as React from "react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";

const ErrorFallback = () => {
  useEffect(() => {
    queryClient.clear();
    // clear localstorage on error
    localStorage.clear();
  });

  return (
    <>
      {queryClient.isFetching() ? (
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      ) : (
        <div
          className="text-gray-800 w-screen h-screen flex flex-col justify-center items-center"
          role="alert"
        >
          <div className="border border-gray-200 rounded-md p-10">
            <h2 className="text-lg text-green-800 font-bold mb-2 flex flex-row space-x-2">
              <span>Unable to refresh previous content.</span>
            </h2>
            <h2 className="text-xs font-semibold text-gray-400">
              It's probably a minor error which has been reported. Contact
              support if issue persists.
            </h2>
            <button
              className="mt-4"
              onClick={() => {
                localStorage.clear();
                window.location.assign(window.location.origin);
              }}
            >
              Go back home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
              <Notifications />
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
