import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Token Utilities</SectionTitle>
    <SectionText>
      Here is a small list of some of the future token utilities we have planned.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mint #2 and #3</ListTitle>
          <ListParagraph>
            The Genesis Warlocks and all future mints will be <br />
            able to be fully minted with the tokens earned when staking.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Future Items</ListTitle>
          <ListParagraph>
            The Wizard World Metaverse will eventually have a pluthera of items <br />
            to be purchased primarily via our token.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>LP</ListTitle>
          <ListParagraph>
            50% of all funds generated from all 3 Genesis mints will go directly <br />
            into an LP pool setup on Raydium.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
