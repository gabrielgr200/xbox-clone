import bugsnax from 'media/other_section/bugsnax.jpg'
import gamePass from 'media/other_section/gamepass.jpg'
import empires from 'media/other_section/empires.jpg'
import playful from 'media/other_section/playful.jpg'

import flight from 'media/other_section/flight.jpg'
import nba from 'media/other_section/nba.jpg'
import minecraft from 'media/other_section/minecraft.jpg'
import chinatown from 'media/other_section/chinatown.jpg'

import gamePassBig from 'media/other_section/gamepass_big.jpg'
import empiresBig from 'media/other_section/empires_big.jpg'
import flightBig from 'media/other_section/flight_big.jpg'
import chinatownBig from 'media/other_section/chinatown_big.jpg'

const firstBlockData = [
	{
		img: bugsnax,
		title: 'Bugsnax',
		subtitle: 'Jogue agora com o Xbox Game Pass ou compre',
		cta: 'Obtê-lo agora',
	},
	{
		img: gamePass,
		bigImg: gamePassBig,
		title: 'Descubra seu próximo jogo favorito',
		subtitle:
			'Jogue mais de 100 jogos de alta qualidade com amigos em consoles, PC, telefones e tablets',
		cta: 'INSCREVA-SE NO XBOX GAME PASS',
	},
	{
		img: empires,
		bigImg: empiresBig,
		title: 'Age of Empires II: Edição Definitiva',
		subtitle: 'Obtenha a nova expansão Dynasties of India',
		cta: 'OBTÊ-LO AGORA',
		tag: 'NOVO DLC',
	},
	{
		img: playful,
		title: 'Bugsnax',
		subtitle: 'Jogue agora com o Xbox Game Pass ou compre',
		cta: 'Obtê-lo agora',
		dark: true,
		tag: 'Novo',
	},
]

const secondBlockData = [
	{
		img: nba,
		title: 'NBA 2K22',
		subtitle: 'Jogue agora com o Xbox Game Pass ou compre',
		cta: 'Obtê-lo agora',
		tag: 'console . cloud',
		dark: true,
	},
	{
		img: chinatown,
		bigImg: chinatownBig,
		title: 'Chinatown Detective Agency',
		subtitle: 'Jogue agora com o Xbox Game Pass ou compre',
		cta: 'Obtê-lo agora',
		tag: 'console . pc . cloud',
	},
	{
		img: flight,
		bigImg: flightBig,
		title: 'Microsoft Flight Simulator: Por que eu voo',
		subtitle: 'Existe um estilo de jogo e um plano de voo para cada piloto',
		cta: 'Saber mais',
	},
	{
		img: minecraft,
		title: 'Minecraft Dungeons',
		subtitle: 'Explore a Torre sob uma luz totalmente nova',
		cta: 'Saber mais',
	},
]

export { firstBlockData, secondBlockData }
