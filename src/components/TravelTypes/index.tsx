import React from 'react';
import { Flex } from '@chakra-ui/react';
import { TravelType } from './TravelType';
import nigthLifeImg from '../../assets/imgs/Nightlife.png';
import beachImg from '../../assets/imgs/Beach.png';
import modernImg from '../../assets/imgs/Modern.png';
import classicImg from '../../assets/imgs/Classic.png';
import moreImg from '../../assets/imgs/More.png';

export function TravelTypes() {
  return (
    <Flex
      w={['80%', '100%']}
      align="center"
      margin="auto"
      mt="8"
      justifyContent="space-evenly"
    >
      <TravelType image={nigthLifeImg} altDescription="vida noturna" />
      <TravelType image={beachImg} altDescription="praia" />
      <TravelType image={modernImg} altDescription="moderno" />
      <TravelType image={classicImg} altDescription="clássico" />
      <TravelType image={moreImg} altDescription="e mais..." />
    </Flex>
  );
}
