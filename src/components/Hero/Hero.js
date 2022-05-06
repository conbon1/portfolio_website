import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <center><SectionTitle main center>
          The Wizard Worlds Project
        </SectionTitle></center>
        <center><SectionText>
          Genesis Wizard mint is coming soon<br />
          follow our twitter to stay up to date
        </SectionText></center>
        <center><Button onClick={props.handleClick}>
          INFO
        </Button></center>
      </LeftSection>
    </Section>
  </>
);

export default Hero;