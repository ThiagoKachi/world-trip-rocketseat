import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

type CityCardProps = {
  image: string;
  city: string;
  cityCapital: string;
  cityFlag: string;
};

export function CityCard({
  image,
  city,
  cityCapital,
  cityFlag,
}: CityCardProps) {
  return (
    <Flex w="60" mt="8" mb="8" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={image}
          alt={`Picture of ${city}`}
          roundedTop="lg"
          h="44"
          objectFit="cover"
        />

        <Box p="4">
          <Flex mt="1" justifyContent="space-between" alignItems="center">
            <Box lineHeight="tight">
              <Text fontSize="20px" color="#47585B" fontWeight="600">
                {city}
              </Text>
              <Text fontSize="16px" color="#999999" fontWeight="500">
                {cityCapital}
              </Text>
            </Box>
            <Image src={cityFlag} alt={city} w="40px" h="40px" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
