import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { PlaygroundContainer } from "./Playground";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <PlaygroundContainer />
    </ChakraProvider>
  </StrictMode>
);
