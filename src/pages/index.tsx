import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/input";

export default function Home() {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        background="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail"></Input>
          <Input name="password" type="password" label="Senha"></Input>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
