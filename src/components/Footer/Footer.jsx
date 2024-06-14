import React from 'react'

import {
	Footer,
	FooterLink,
	FooterLegalLinks,
	FooterLinksContainer,
	FooterColumn,
	FooterColumnTitle,
} from './Footer.styles'

const FooterComp = () => {
	return (
		<Footer>
			<FooterLinksContainer>
				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>acessórios xbox</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>acessórios xbox</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>acessórios xbox</FooterLink>
				</FooterColumn>
			</FooterLinksContainer>

			<FooterLegalLinks>
				<FooterLink>Sitemap</FooterLink>
				<FooterLink>Contato Microsoft</FooterLink>
				<FooterLink>Privacidade</FooterLink>
				<FooterLink>Termos de uso</FooterLink>
				<FooterLink>Marcas registradas</FooterLink>
				<FooterLink>Avisos de terceiros</FooterLink>
				<FooterLink>Segurança e ecologia</FooterLink>
				<FooterLink>Sobre nossos anúncios</FooterLink>
				<FooterLink>© Microsoft Xbox Clone 2024</FooterLink>
			</FooterLegalLinks>
		</Footer>
	)
}

export default FooterComp
