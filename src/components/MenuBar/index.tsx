import React from 'react';
import Button from '../Button';
import {
	Container,
	Topside,
	Logo,
	MenuButton,
	HomeIcon,
	BellIcon,
	EmailIcon,
	ExploreIcon,
	ProfileIcon,
} from './styles';

const MenuBar: React.FC = () => {
	return (
		<Container>
			<Topside>
				<Logo />
				<MenuButton>
					<HomeIcon />
					<span>Página Inicial</span>
				</MenuButton>

				<MenuButton>
					<ExploreIcon />
					<span>Explorar</span>
				</MenuButton>

				<MenuButton>
					<BellIcon />
					<span>Notificações</span>
				</MenuButton>

				<MenuButton>
					<EmailIcon />
					<span>Mensagens</span>
				</MenuButton>

				<MenuButton className="active">
					<ProfileIcon />
					<span>Perfil</span>
				</MenuButton>
				<Button>
					<span>Tweetar</span>
				</Button>
			</Topside>
		</Container>
	);
};

export default MenuBar;
