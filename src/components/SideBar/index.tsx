import React from 'react';

import {
	Container,
	SearchWrapper,
	SearchBar,
	SearchIcon,
	Body,
} from './styles';
import List from '../List';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchBar placeholder="Buscar no Twitter" />
				<SearchIcon />
			</SearchWrapper>
			<Body>
				<List title="Quem seguir" elements={[]} />
			</Body>
		</Container>
	);
};

export default SideBar;
