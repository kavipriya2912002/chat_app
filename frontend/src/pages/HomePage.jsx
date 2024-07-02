import { Container, Box, Text, TabList, Tab, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import SignUp from "../Components/Authentication/SignUp";

function HomePage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        width="100%"
        margin="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl">Let's Chat</Text>
      </Box>

      <Box        bg="white"
        width="100%"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
