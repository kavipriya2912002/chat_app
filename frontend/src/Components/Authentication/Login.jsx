import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
const Login = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit=()=>{

  };
  return (
    <VStack spacing="5px">
     
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter the email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter the password"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      

      <Button colorScheme='blue' width='100%' style={{marginTop:'15'}} onClick={HandleSubmit}>Login</Button>
      <Button colorScheme='red' width='100%' style={{marginTop:'15'}} onClick={HandleSubmit}>Get guest user credentials</Button>

    </VStack>
  )
}

export default Login
