import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Techboss Deliveries</MainHeading>
				<HeroText>
	We provide the most efficient delivery services for our clients
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link >
						<Link to="ordr">
					<HeroButton>
Make an Order
					</HeroButton>

					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
