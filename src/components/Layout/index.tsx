import React from 'react';
import Main from '../Main';
import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';

const Layout: React.FC = () => {
	document.title = 'Página Inicial / Twitter';
	return (
		<Container>
			<Wrapper>
				<MenuBar />
				<Main />
				{/* <SideBar /> */}
			</Wrapper>
		</Container>
	);
};

export default Layout;
