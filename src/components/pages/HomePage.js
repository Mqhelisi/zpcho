import React from 'react';
import MainSection from '../MainSection' 
import { Content } from '../Content';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Hero from '../Hero';

function HomePage() {
  return <>
  {/* <MainSection/> */}
<Hero/>
  <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
</>;
}

export default HomePage;
