import React from 'react';

import { Container } from './styles';

interface Props {
	moment: string;
	subject: string;
	tweets?: string;
}

const News: React.FC<Props> = ({ moment, subject, tweets }) => {
	return (
		<Container>
			<span>{moment}</span>
			<strong>{subject}</strong>
			{tweets && <span className="tweets">{tweets} Tweets </span>}
		</Container>
	);
};

export default News;
