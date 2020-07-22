import React from 'react';

import { Container, Column, Avatar, Info, FollowButton } from './styles';

interface Props {
	name: string;
	nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
	return (
		<Container>
			<Column>
				<Avatar />
				<Info>
					<strong>{name}</strong>
					<span>{nickname}</span>
				</Info>
			</Column>

			<FollowButton outlined>Seguir</FollowButton>
		</Container>
	);
};

export default FollowSuggestion;
