import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import citiesInfos from '../../citiesInfos.json';
import { CityCard } from './CityCard';

export function CitiesInfos() {
  return (
    <SimpleGrid gap={12} minChildWidth="200px" columns={[5, 4, 3]}>
      {citiesInfos.map((e, index) => (
        <CityCard
          key={index}
          image={e.mainImage}
          city={e.cityName}
          cityCapital={e.cityCapital}
          cityFlag={e.image}
        />
      ))}
    </SimpleGrid>
  );
}
