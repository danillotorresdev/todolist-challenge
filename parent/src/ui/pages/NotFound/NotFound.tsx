import { Text, Center } from '@chakra-ui/react'

export const NotFound = () => (
  <Center flexDirection="column" h="100vh">
    <Text fontSize={'4xl'} fontWeight="bold" mb={4}>404</Text>
    <Text fontSize={'xl'}>Page not found.</Text>
  </Center>
)