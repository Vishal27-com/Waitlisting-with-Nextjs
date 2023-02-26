import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
  Box
} from "@chakra-ui/react";
import axios from "axios"
const Description = ({data}) => {
    const addToWhislist = async () => {
        try {
          await axios.post(`http://localhost:8080/whislist`, data);
          alert("Added To Whislist");
        } catch (error) {
            if(error.response.data.substring(22,31))
          alert("Item Already Exists");
        }
      };
  return (
    <Box >
        <Center>
    <Card maxW="2xl">
      <CardBody>
        <Center>
        <Image
          h="200px"
          src={data.Images[0]}
          alt={data.Title}
          />
          </Center>
        <Stack mt="6" spacing="3" fontWeight="600">
          <Heading size="md">{data.Title}</Heading>
          <Text>{data.Plot}</Text>
          <Text>{data.Genre}</Text>
          <Text>{data.Actors}</Text>
          <Text>Awards : {data.Awards}</Text>
          <Text>Language : {data.Language}</Text>
          <Text>Duration : {data.Runtime}</Text>
          <Text>IMDB Rating : {data.imdbRating}</Text>
          <Text>IMDB Votes : {data.imdbVotes}</Text>
          <Text>Released at : {data.Released}</Text>
          <Button variant="solid" colorScheme="blue" onClick={addToWhislist}>
            Add To Whislist
          </Button>
        </Stack>
      </CardBody>
    </Card>
        </Center>
    </Box>
  );
};

export default Description;
