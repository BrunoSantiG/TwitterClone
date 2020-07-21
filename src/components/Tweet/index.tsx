import React from 'react';

import {
	Container,
	Retweeted,
	ActionIcon,
	Body,
	Avatar,
	Content,
	Header,
	Dot,
	Description,
	ImageContent,
	Icons,
	Status,
	CommentIcon,
	RetweetIcon,
	LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
	return (
		<Container>
			<Retweeted>
				<ActionIcon />
				Você retweetou
			</Retweeted>
			<Body>
				<Avatar />
				<Content>
					<Header>
						<strong>Bruno Santi</strong>
						<span>@brsanti</span>
						<Dot />
						<time>21 de jul</time>
					</Header>
					<Description>Clone de um tweet</Description>
					<ImageContent />
					<Icons>
						<Status>
							<CommentIcon />
							18
						</Status>
						<Status>
							<RetweetIcon />
							223
						</Status>
						<Status>
							<LikeIcon />
							1k
						</Status>
					</Icons>
				</Content>
			</Body>
		</Container>
	);
};

export default Tweet;
