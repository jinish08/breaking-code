import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import {useState} from 'react';

const Login = ({ handleClick, button }) => {

    const [sign,setSign] = useState(false);

    const handleSign = () => {
        setSign(!sign);
    }

  return (
    <>
      <Box
        right="0"
        top="0"
        position="absolute"
        height="100vh"
        color="black"
        width=""
        border="1px solid"
        textAlign="center"
        backgroundColor="white"
        display={button ? "block" : "none"}
      >
        <Flex justifyContent="flex-end" p="4" _hover={{cursor:"pointer"}}>
          <CloseIcon onClick={handleClick} />
        </Flex>
        <Text as="h3" fontWeight="semibold" fontSize="2xl">
          Welcome back!
        </Text>
        <Text as="h5" fontWeight="semibold" my="3">
          {sign?"Log in using":"Sign up using"}
        </Text>
        <Flex justifyContent="space-around" mx="10" my="8" mb="20">
          <img src="/images/login/Google.svg" />
          <img src="/images/login/Github.svg" />
          <img src="/images/login/Facebook.svg" />
          <img src="/images/login/Linkedin.svg" />
        </Flex>
        <form>
          <Box>
            {!sign && (<Text textAlign="left" mx="16" my="3">
              Name
            </Text>)}
            {!sign && (<Input
              placeholder="enter your name"
              type="text"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
            />)}
            <Text textAlign="left" mx="16" my="3">
              Phone
            </Text>
            <Input
              placeholder="enter your phone number"
              type="number"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
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
            />
          </Box>
          <Checkbox mr="170px" my="4" colorScheme="blue" defaultIsChecked>
            Checkbox
          </Checkbox>
          <br />
          <Button type="submit" my="4" colorScheme="teal" variant="solid">
            {sign?"Sign In":"Sign Up"}
          </Button>
        </form>
        <Text color="#1877F2" textAlign="left" mx="16" mt="10">
          forgot password?
        </Text>
        <Text color="black" textAlign="left" mx="16" cursor="pointer" onClick={handleSign}>
          Not a Lead Coder? Sign up Now
        </Text>
      </Box>
    </>
  );
};

export default Login;
