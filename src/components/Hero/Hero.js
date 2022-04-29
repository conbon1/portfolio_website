import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To The <br />
          Wizard Worlds Metaverse
        </SectionTitle>
        <SectionText>
          Genesis Wizard mint is now live just<br />
          click the link below to get yours!!
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href="https://launchmynft.io/collections/AETMcjSATqwGHFJvPdZFnBdJzKfbhHW4H3RAcLsan8ZH/FAEx0VC5nDerd4IAB1mU" target="_blank">MINT</a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;