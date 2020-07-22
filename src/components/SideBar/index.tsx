import React from 'react';
import StickyBox from 'react-sticky-box';

import {
	Container,
	SearchWrapper,
	SearchBar,
	SearchIcon,
	Body,
} from './styles';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchBar placeholder="Buscar no Twitter" />
				<SearchIcon />
			</SearchWrapper>
			<StickyBox>
				<Body>
					<List
						title="O que está acontecendo"
						elements={[
							<News
								moment="Covid-19"
								subject="Covid-19: Vacina não deve sair antes de 2021, diz OMS"
							/>,
							<News
								moment="Tecnologia"
								subject="React"
								tweets="1.334"
							/>,
							<News
								moment="Incrível"
								subject="Alto, elegante e estiloso: sim, o Lobo-guará é isso tudo"
							/>,
						]}
					/>

					<List
						title="Quem seguir"
						elements={[
							<FollowSuggestion
								name="Usuário 1"
								nickname="@user1"
							/>,
							<FollowSuggestion
								name="Usuário 2"
								nickname="@user2"
							/>,
							<FollowSuggestion
								name="Usuário 3"
								nickname="@user3"
							/>,
						]}
					/>
				</Body>
			</StickyBox>
		</Container>
	);
};

export default SideBar;
