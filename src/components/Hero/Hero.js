

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
          <a href='https://www.launchmynft.io/collections/AETMcjSATqwGHFJvPdZFnBdJzKfbhHW4H3RAcLsan8ZH/1XewNW3yLtie2EXkr1Kj'>Mint</a>
        </Button></center>
      </LeftSection>
    </Section>
  </>
);

export default Hero;