import { FunctionComponent } from "react";
import { Box, Text, Code } from "@chakra-ui/react";
import App from "./App";

export const PlaygroundContainer = () => {
  return (
    <Box textAlign={"center"}>
      <Box
        my={5}
        p={4}
        shadow={"lg"}
        display={"inline-block"}
        bg={"gray.200"}
        rounded={"lg"}
      >
        <Text>
          This is the isolated development playground for{" "}
          <Code>microfrontend1</Code>, serving as the host app.
        </Text>
        <Text>
          The JavaScript bundle is available for consumption at{" "}
          <Code>/remoteEntry.js</Code>.
        </Text>
      </Box>

      <App />
    </Box>
  );
};
