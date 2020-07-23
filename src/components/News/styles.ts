import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	> span {
		color: var(--gray);
		font-size: 13px;
	}
	> span.tweets {
		margin-top: 4px;
	}

	> strong {
		font-size: 15px;
		color: var(--white);
		margin-top: 3px;
	}
`;
