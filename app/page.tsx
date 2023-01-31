"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

import React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Practice from "./practice";
import Pricing from "./components/pricing";
import Features from "./components/features";

export default function Page() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
      
      {/* <Practice /> */}
    </ChakraProvider>
  );
}
