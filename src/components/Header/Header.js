import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMediumCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Wizard Worlds</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Roadmap</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Web3</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About the team</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.medium.com">
          <AiFillMediumCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.twitter.com/Wizard_Worlds">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
