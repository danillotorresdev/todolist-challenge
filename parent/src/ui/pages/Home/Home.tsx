import {
  Box,
  Button,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Home: React.FC = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={8}>
      <Heading as="h1" mb={8} textAlign="center">
        Welcome to the Parent Application
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={8}>
        This is a testing environment to demonstrate the integration of the
        TodoList microfrontend.
      </Text>
      <Box textAlign="center">
        <Button as={RouterLink} to="/todoApp" colorScheme="teal" mr={4}>
          Go to To-do App
        </Button>
        <Button
          colorScheme={colorMode === "light" ? "teal" : "blue"}
          onClick={onOpen}
        >
          About
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This is a simple parent application built using React and Chakra
              UI. It serves as a testing environment to demonstrate the
              integration of microfrontends, specifically the TodoList
              microfrontend.
            </Text>
            <Text mt={4}>
              Clicking the "Go to TodoList" button will take you to the TodoList
              microfrontend, where you can manage your todo items.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
