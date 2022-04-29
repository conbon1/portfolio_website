import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To Wizard Worlds
        </SectionTitle>
        <SectionText>
        Genesis Wizard Mint Live!
        </SectionText>
        <Button onClick={props.handleClick}>Mint</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;