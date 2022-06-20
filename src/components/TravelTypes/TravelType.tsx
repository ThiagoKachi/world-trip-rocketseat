import React from 'react';
import { Image, Flex } from '@chakra-ui/react';

type TravelTypeProps = {
  image: string;
  altDescription: string;
};

export function TravelType({ image, altDescription }: TravelTypeProps) {
  return (
    <Flex>
      <Image
        src={image}
        alt={altDescription}
        boxSize={['60px', '90px']}
        objectFit="contain"
      />
    </Flex>
  );
}
