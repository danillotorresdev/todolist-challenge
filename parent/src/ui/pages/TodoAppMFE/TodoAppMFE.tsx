import { lazy, Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import "../../../assets/styles.css";
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";

const TodoAppMFELazy = lazy(() => import("microfrontend1/app")); // TODO: mudar para todoApp/app

export const TodoApp = () => (
  <Suspense fallback={<Spinner />}>
    <ErrorBoundary>
      <TodoAppMFELazy />
    </ErrorBoundary>
  </Suspense>
);
