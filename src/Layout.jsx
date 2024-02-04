import { Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Flex minH="100vh" direction={"column"} justify={"space-between"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}