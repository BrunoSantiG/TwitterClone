import React from 'react';

import ProfilePage from '../ProfilePage';

import {
	Container,
	Header,
	BackIcon,
	ProfileInfo,
	BottomMenu,
	HomeIcon,
	SearchIcon,
	NotifyIcont,
	DmIcon,
} from './styles';

const Main: React.FC = () => {
	return (
		<Container>
			<Header>
				<button>
					<BackIcon />
				</button>
				<ProfileInfo>
					<strong>Bruno Santi</strong>
					<span>524 Tweets</span>
				</ProfileInfo>
			</Header>
			<ProfilePage />
			<BottomMenu>
				<HomeIcon />
				<SearchIcon />
				<NotifyIcont />
				<DmIcon />
			</BottomMenu>
		</Container>
	);
};

export default Main;
