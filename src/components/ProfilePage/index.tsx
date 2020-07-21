import React from 'react';

import {
	Container,
	Banner,
	Avatar,
	ProfileData,
	LocationIcon,
	CakeIcon,
	Followage,
} from './styles';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>

			<ProfileData>
				{/* <EditButton outlined>Editar Perfil</EditButton> */}
				<h1>Bruno Santi</h1>
				<h2>@brsanti</h2>

				<p>
					Full Stack Web Developer at{' '}
					<a href="https://operdata.com.br">@operdata</a>
				</p>
				<ul>
					<li>
						<LocationIcon />
						Belo Horizontte, Brasil
					</li>
					<li>
						<CakeIcon />
						Nascido(a) em 2 de agosto de 1998
					</li>
				</ul>

				<Followage>
					<span>
						Seguindo <strong>35</strong>
					</span>
					<span>
						<strong>157 </strong> Seguidores
					</span>
				</Followage>
			</ProfileData>
		</Container>
	);
};

export default ProfilePage;
