import React from 'react';
import { Image, Text, Box, useBreakpointValue } from '@chakra-ui/react';
import logoMobileImg from '../../assets/imgs/banner_mobile.png';
import { useLocation } from 'react-router-dom';

type BannerProps = {
  image: string;
  countryName?: boolean;
};

export function Banner({ image, countryName = false }: BannerProps) {
  const currentRoute = useLocation();
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Box position="relative">
      {!isWideVersion && currentRoute.pathname !== '/details' ? (
        <Image
          src={logoMobileImg}
          w="100vw"
          h="80"
          objectFit="fill"
          margin="auto"
        />
      ) : (
        <Image src={image} w="100vw" h="96" />
      )}
      {countryName && (
        <Text
          position="absolute"
          color="white"
          fontSize="36px"
          fontWeight="700"
          bottom="12"
          left={['16', '24']}
        >
          Europa
        </Text>
      )}
    </Box>
  );
}
