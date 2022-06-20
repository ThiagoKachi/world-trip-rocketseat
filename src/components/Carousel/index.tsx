import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Image, Flex, Text, Box } from '@chakra-ui/react';
import continents from '../../continents.json';
import { Link } from 'react-router-dom';

export function DemoCarousel() {
  return (
    <Flex w="80vw" margin="auto" mb="8" cursor="pointer">
      <Carousel showThumbs={false} showStatus={false}>
        {continents.map((c) => (
          <Link key={c.name} to="/details">
            <Box>
              <Image
                src={c.image}
                borderRadius="4"
                h="400px"
                objectFit="cover"
              />
              <Text className="legend" fontWeight="700">
                {c.name}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Flex>
  );
}
