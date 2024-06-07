import { BrowserRouter } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { NavBar } from "./ui/components/NavBar/NavBar";

import { RootRoute } from "./routes/RootRoute";

export const AppRoot = () => (
  <BrowserRouter>
    <Flex flexDir={"column"} minHeight={"100vh"}>
      <NavBar />

      <RootRoute />
    </Flex>
  </BrowserRouter>
);
