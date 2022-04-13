import login from "../../services/auth-login";
//import style from "./style.module.css";
import { Heading, Box, Text, Button, Container } from "@chakra-ui/react";

function Login() {
  return (
    // Example from paystack.com
    <Container mt={300} centerContent>
      <Box maxW="32rem">
        <Heading mb={4} centerContent>
          Hello, there!
        </Heading>
        <Text fontSize="xl">
          Please, login. Before you using this web application
        </Text>
        <Button size="lg" colorScheme="green" mt="24px" onClick={() => login()}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;

{
  /* <div className={style.wrapper}>
  <div className={style.content}>
    <h1>Hello, there!</h1>
    <p></p>
  </div>
  <div className={style.button}>
    <button onClick={() => login()}>Login</button>
  </div>
</div>; */
}
