import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <React.Fragment>
      <Link to={'/sub'}> to sub</Link>
      <Jigglypuff />
      <Jigglypuff />
      <Jigglypuff />
      <Jigglypuff />
      <Jigglypuff />
    </React.Fragment>
  );
};

export const Jigglypuff = () => {
  const [img, setImg] = useState('');

  const { isFetching, error, data } = useQuery(
    ['repoData'],
    () =>
      axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff').then((res) => {
        console.log(res);
        return res.data;
      }),
    {
      staleTime: 100000,
      cacheTime: 5000,
    }
  );

  useEffect(() => {
    if (data) {
      const img_base = data.sprites.other;
      const officalArt = img_base['official-artwork'];
      setImg(officalArt.front_default);
    }
  }, [data]);

  if (isFetching) return <Typography variant={'h1'}> Loading</Typography>;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Box>
      <Avatar src={img} />
      <Typography variant={'h5'}>{data.name}</Typography>
    </Box>
  );
};
