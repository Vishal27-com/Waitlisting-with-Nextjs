import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from 'next/link'
const MovieCard = ({ data }) => {
  return (
    <Card maxW="sm">
        <Link href={`/${data?.id}`}>
      <CardBody>
        <Image
          h="200px"
          src={data?.Images[0]}
          alt={data?.Title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3" fontWeight="600">
          <Heading size="md">{data?.Title}</Heading>
          <Text>{data?.Runtime}</Text>
          <Text>{data?.Genre}</Text>
          <Text>{data?.Language}</Text>
        </Stack>
      </CardBody>
        </Link>
    </Card>
  );
};

export default MovieCard;
