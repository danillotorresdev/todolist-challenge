import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";

export const NavBar = () => (
  <Flex
    alignItems={"center"}
    justifyContent={"space-between"}
    bg={"gray.200"}
    shadow={"sm"}
    px={10}
    py={1}
    fontSize={"sm"}
  >
    <Box>
      <Link as={ReactRouterLink} to="/" mr={10}>
        Home
      </Link>
      <Link as={ReactRouterLink} to="/todoApp" mr={10}>
        To-do app
      </Link>
    </Box>
  </Flex>
);
