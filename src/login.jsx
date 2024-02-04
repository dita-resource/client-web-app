import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Button,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Text fontSize="2x1" align="center">
            Create Account
          </Text>
          <Text>
            Already have an account?
            <Link color="teal.500" href="#">
              Log in
            </Link>
          </Text>
          <VStack spacing={2} align="stretch" pb={3}>
            <input placeholder="Username" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <input placeholder="Confirm password" />
          </VStack>
          <Button colorScheme="teal" variant="solid" isFullWidth="true">
            Create Account
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
