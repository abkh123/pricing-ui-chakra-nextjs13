"use client";
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";

import React from "react";

export default function Practice() {
  return (
    <ChakraProvider>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <p>This is a paragraph</p>
      <Heading>Default Heading by Chakra</Heading>
      <Heading as="h1" color="red" fontSize="48px">
        This is h1 heading by Chakra
      </Heading>
      <Heading as="h2" color="blue" fontSize="36px">
        This is h2 heading by Chakra
      </Heading>
      <Text fontWeight="bold"> This is paragraph by chakra</Text>

      <Heading>Flex Box in HTML and CSS</Heading>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "end",
          alignItems: "center",
          backgroundColor: "green",
          height: "500px",
        }}
      >
        <div style={{ backgroundColor: "red", padding: "50px" }}>div1</div>
        <div style={{ backgroundColor: "blue", padding: "50px" }}>div2</div>
      </div>
    </ChakraProvider>
  );
}
