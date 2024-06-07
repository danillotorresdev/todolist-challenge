import { Box, Heading } from "@chakra-ui/react";
import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" mt={8}>
          <Heading size="lg" >
            Oops! Something went wrong.
          </Heading>
          <p>Please try refreshing the page or come back later.</p>
        </Box>
      );
    }

    return this.props.children;
  }
}
