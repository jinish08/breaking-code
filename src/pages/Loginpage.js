import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    useToast,
    Text,
    Box,
    Flex,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef, useState } from "react";
//   import { FaGoogle } from "react-icons/fa";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import { Card } from "../components/Card";
//   import DividerWithText from "../components/DividerWithText";
//   import { Layout } from "../components/Layout";
  import { useAuth } from "../contexts/AuthContext";
  import useMounted from "../hooks/useMounted";
  
  export default function Loginpage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);
    const toast = useToast();
  
    const { login, signInWithGoogle } = useAuth();
  
    const mounted = useMounted();
  
    return (
      <Box>
        <Heading textAlign="center" my={12}>
          Login
        </Heading>
        <Card maxW="md" mx="auto" mt={4}>
          <chakra.form
            onSubmit={async (e) => {
              e.preventDefault();
              // your login logic here
              if (!email || !password) {
                toast({
                  description: "Credentials not valid",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              }
              setIsSubmiting(true);
              login(email, password)
                .then((response) => {
                  console.log(response);
                  navigate("/main");
                })
                .catch((error) => {
                  console.log(error);
                  toast({
                    description: error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                })
                .finally(() => mounted.current && setIsSubmiting(false));
            }}
          >
            <Stack spacing="6">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>
              {/* <PasswordField /> */}
              <Button
                type="submit"
                colorScheme="primary"
                size="lg"
                isLoading={isSubmiting}
                fontSize="md"
              >
                Sign in
              </Button>
            </Stack>
          </chakra.form>
          <HStack justifyContent="space-between" my={4}>
            <Button variant="link">
              <Link to="/forgot-password">Forgot password?</Link>
            </Button>
            <Button variant="link">
              Register
            </Button>
          </HStack>
          {/* <DividerWithText my={6}>OR</DividerWithText> */}
          <Button
            variant="outline"
            isFullWidth
            colorScheme="red"
            // leftIcon={<FaGoogle />}
            onClick={() =>
              signInWithGoogle()
                .then((user) => console.log(user))
                .catch((err) => console.log(err))
            }
          >
            Sign in with Google
          </Button>
        </Card>
      </Box>
    );
  }
  