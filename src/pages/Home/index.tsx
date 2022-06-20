import React from 'react';
import { Flex, Divider, Heading } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { TravelTypes } from '../../components/TravelTypes';
import { DemoCarousel } from '../../components/Carousel';
import bannerImg from '../../assets/imgs/Banner.png';

function Home() {
  return (
    <Flex direction="column">
      <Header backPage={false} />
      <Banner image={bannerImg} />
      <TravelTypes />
      <Divider w="80px" margin="auto" mt="8" borderColor="black" />
      <Flex direction="column" margin="auto" mt="6" textAlign="center">
        <Heading as="h5" color="#47585B" fontWeight="400" fontFamily="poppins">
          Vamos nessa?
        </Heading>
        <Heading
          as="h5"
          color="#47585B"
          fontWeight="400"
          fontFamily="poppins"
          mb="2"
        >
          Então escolha seu continente
        </Heading>
      </Flex>
      <DemoCarousel />
    </Flex>
  );
}

export default Home;
