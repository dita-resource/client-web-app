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
import { useState } from "react";


export default function Login() {
    const [inputs, setInputs] = useState({
      email: "",
      username: "",
      password: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleCreateUser = () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs),
        };
        fetch("http://127.0.0.1:8000/create-user", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.error("Error during fetch:", error));
    }

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
            <input
              type="email"
              name="email"
              value={inputs.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              value={inputs.username}
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={inputs.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </VStack>
          <Button colorScheme="teal" variant="solid" onClick={handleCreateUser}>
            Create Account
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
