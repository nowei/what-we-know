import { Center, Container, Box } from "@mantine/core";
import { JSX, ReactNode } from "react";

interface BodyWrapperProps {
  children: ReactNode[];
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  return (
    <Center>
      <Container w="80%">{children}</Container>
    </Center>
  );
}
