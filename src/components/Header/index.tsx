import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Image, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import logoImg from '../../assets/imgs/Logo.png';

type HeaderProps = {
  backPage: boolean;
};

export function Header({ backPage }: HeaderProps) {
  const history = useNavigate();

  return (
    <Flex w="100%" h="16">
      {backPage && (
        <Icon
          as={ChevronLeftIcon}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mb="auto"
          mt="auto"
          ml="8"
          fontSize="32"
          cursor="pointer"
          onClick={() => history('/')}
        />
      )}
      <Image src={logoImg} objectFit="cover" margin="auto" />
    </Flex>
  );
}
