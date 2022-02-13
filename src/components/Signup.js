import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {db} from "../utils/init-firebase"
import { auth } from "../utils/init-firebase";
import { collection, getDocs , addDoc } from 'firebase/firestore';

const Signup = ({ handleSign , sign }) => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { register} = useAuth();

  const mounted = useMounted();

  const userCollectionRef = collection(db, 'users');

  const toast = useToast();

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
          auth,
        email,
        password
      );
      console.log("Firebase Signup Succesfull ", authUser);
      toast({
        description: "Signup Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

		await addDoc(userCollectionRef, {
			user_id: authUser.user.uid,
            name: username,
            email: authUser.user.email,
            points: 0,
            address: "",
		});
        navigate("/main");
    } catch (error) {
      toast({
        description: "Some error occured",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  };

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
        display={sign ? "block" : "none"}
      >
        <Flex justifyContent="flex-end" p="4" _hover={{cursor:"pointer"}}>
          <CloseIcon onClick={handleSign} />
        </Flex>
        <Text as="h3" fontWeight="semibold" fontSize="2xl">
          Welcome back!
        </Text>
        <Text as="h5" fontWeight="semibold" my="3">
          Signup using
        </Text>
        <Flex justifyContent="space-around" mx="10" my="8" mb="20">
          <img src="/images/login/Google.svg" />
          <img src="/images/login/Github.svg" />
          <img src="/images/login/Facebook.svg" />
          <img src="/images/login/Linkedin.svg" />
        </Flex>
        <form 
        onSubmit={
            async (e) => {
        //     e.preventDefault();
        //     // your register logic here
        //     console.log(email, password);
        //     if (!email || !password) {
        //       console.log("Please enter email and password");
        //     }
        //     setIsSubmiting(true);
        //     register(email, password)
        //       .then((response) => console.log(response))
        //       .catch((error) => {
        //         console.log(error);
        //       })
        //       .finally(() => mounted.current && setIsSubmiting(false));

        //   }
        e.preventDefault();
        return onSignup(email,password,username)
            }
          }>
          <Box>
            <Text textAlign="left" mx="16" my="3">
              Name
            </Text>
            <Input
              placeholder="enter your name"
              type="name"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <Text textAlign="left" mx="16" my="3">
              Email
            </Text>
            <Input
              placeholder="enter your email"
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Checkbox mr="170px" my="4" colorScheme="blue" defaultIsChecked>
            Checkbox
          </Checkbox>
          <br />
          <Button type="submit" my="4" colorScheme="teal" variant="solid">
            SignIn
          </Button>
        </form>
        <Text color="#1877F2" textAlign="left" mx="16" mt="10">
          forgot password?
        </Text>
      </Box>
    </>
  );
};

export default Signup;
