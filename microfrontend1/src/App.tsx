import { Box, ChakraProvider } from "@chakra-ui/react";
import { ToDo } from "./ui/pages/ToDo/ToDo";

const App = () => (
  <ChakraProvider>
    <Box p={5}>
      <ToDo />
    </Box>
  </ChakraProvider>
);

export default App;
