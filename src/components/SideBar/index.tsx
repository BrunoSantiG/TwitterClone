import React from 'react';

import { Container, SearchWrapper, SearchBar, SearchIcon } from './styles';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchBar placeholder="Buscar no Twitter" />
				<SearchIcon />
			</SearchWrapper>
		</Container>
	);
};

export default SideBar;
