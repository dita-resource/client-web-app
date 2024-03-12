import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
{/* <Box
        bgImage={ict}
        bgSize="cover"
        bgPosition="center"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        //style={{ filter: "blur(1px)" }}
      >
        <Box>
          <h3>
            <span
              style={{ marginLeft: "5rem", color: "black", fontSize: "1.5rem" }}
            >
              Welcome to Dita
            </span>
          </h3>
          <h1
            style={{
              marginLeft: "5rem",
              fontWeight: "700",
              fontSize: "4.5rem",
              color: "white",
            }}
          >
            Elevate. Innovate
          </h1>
        </Box>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="0.5rem"
        color="black"
      >
        <Box flex="2">
          <h1
            style={{
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "black",
            }}
          >
            What is DITA
          </h1>
          <p>
            DITA is first of all a community.
            <br /> We learn together and grow together.
            <br /> We strive for excellence as upcoming
            <br />
            professionals. We are quick to embrace
            <br />
            new members and introduce them into
            <br />
            our culture. We are a tech hub. Technology
            <br />
            is our surname. In DITA, you matter.
          </p>
        </Box>
        <Box flex="1" ml="2rem">
          <Image src={ict} alt="ICT" />
        </Box>
      </Flex> */}