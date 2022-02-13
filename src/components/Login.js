import { chakra } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Input, Checkbox, Button } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import React, { useEffect, useRef, useState } from "react";
import useMounted from "../hooks/useMounted";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = ({ handleLogin, loginin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { login } = useAuth();

  const mounted = useMounted();

  return (
    <>
      <Box
        right="0"
        top="0"
        position="absolute"
        height="100vh"
        color="black"
        width="sm"
        border="1px solid"
        textAlign="center"
        backgroundColor="white"
        display={loginin ? "block" : "none"}
      >
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your login logic here
            if (!email || !password) {
              console.log("Please enter email and password");
            }
            setIsSubmiting(true);
            login(email, password)
              .then((response) => {
                console.log(response);
                navigate("/main");
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => mounted.current && setIsSubmiting(false));
          }}
        >
          <Flex justifyContent="flex-end" p="4" _hover={{ cursor: "pointer" }}>
            <CloseIcon onClick={handleLogin} />
          </Flex>
          <Text as="h3" fontWeight="semibold" fontSize="2xl">
            Welcome back!
          </Text>
          <Text as="h5" fontWeight="semibold" my="3">
            Log in using
          </Text>
          <Flex justifyContent="space-around" mx="10" my="8" mb="20">
            <img src="/images/login/Google.svg" />
            <img src="/images/login/Github.svg" />
            <img src="/images/login/Facebook.svg" />
            <img src="/images/login/Linkedin.svg" />
          </Flex>
          <Box>
            <Text textAlign="left" mx="16" my="3">
              Email
            </Text>
            <Input
              placeholder="enter your phone number"
              type="email"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text textAlign="left" mx="16" my="3">
              Password
            </Text>
            <Input
              type="password"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              placeholder="enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Checkbox mr="170px" my="4" colorScheme="blue" defaultIsChecked>
            Remember Me
          </Checkbox>
          <br />
          <Button type="submit" my="4" colorScheme="teal" variant="solid">
            SignIn
          </Button>
          <Text color="#1877F2" textAlign="left" mx="16" mt="10">
            forgot password?
          </Text>
        </chakra.form>
      </Box>
    </>
  );
};

export default Login;
