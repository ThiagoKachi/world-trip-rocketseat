import React from 'react';
import { Flex, Text, Box, Tooltip, Icon, Heading } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import bannerImg from '../../assets/imgs/londres.png';
import { CitiesInfos } from '../../components/CitiesInfos';

function Details() {
  return (
    <>
      <Header backPage={true} />
      <Banner image={bannerImg} countryName />
      <Box w="80%" margin="auto" pt="12">
        <Flex direction={['column', 'row']}>
          <Text
            w={['100%', '50%']}
            fontFamily="poppins"
            fontSize="16"
            color="#47585B"
            lineHeight="2"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex w={['100%', '50%']} justify="space-evenly" align="center">
            <Box>
              <Text fontSize="36px" color="#FFBA08" fontWeight="600">
                50
              </Text>
              <Text fontSize="16px" color="#47585B" fontWeight="600">
                países
              </Text>
            </Box>
            <Box>
              <Text fontSize="36px" color="#FFBA08" fontWeight="600">
                60
              </Text>
              <Text fontSize="16px" color="#47585B" fontWeight="600">
                línguas
              </Text>
            </Box>
            <Box>
              <Text fontSize="36px" color="#FFBA08" fontWeight="600">
                27
              </Text>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Text fontSize="16px" color="#47585B" fontWeight="600" mr="2">
                  cidades +100
                </Text>
                <Tooltip label="Mensagem teste">
                  <Icon as={InfoOutlineIcon} />
                </Tooltip>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Heading as="h4" size="lg" color="#47585B" mt="10" fontWeight="500">
          Cidades +100
        </Heading>
        <CitiesInfos />
      </Box>
    </>
  );
}

export default Details;
