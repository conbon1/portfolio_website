import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 250, text: 'Followers hit on twitter in April'},
  { number: 2000, text: 'Github Followers', },
  { number: 5, text: 'Artists signed on for future 1/1 art creation', }
];

const Acomplishments = () => (
  <Section>
    <center><SectionTitle>Team Achievements and Goals</SectionTitle></center>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
