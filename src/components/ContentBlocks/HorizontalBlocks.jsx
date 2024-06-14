import React from 'react'

import { YellowTag, GreenBtn } from 'components/CommonComponents.styles'

import { imgBreakPoint } from 'globalVars'

import {
	ContentBLocksContainer,
	ContentBlockColumn,
	BigBlock,
	BlockImg,
	SmallBlock,
	BlockDescription,
	BlockTitle,
	BlockSubtitle,
	CtaButton,
	HorizontalBlockDescription,
	HorizontalBlock,
	StarWarsDescription,
	GearShopDescription,
} from './ContentBlocks.styles'

import star_wars from 'media/other_section/star_wars.jpg'
import star_wars_big from 'media/other_section/star_wars_big.jpg'

import gearShop from 'media/other_section/gear_shop.jpg'
import gearShopBig from 'media/other_section/gear_shop_big.jpg'

const StarWarsBlock = () => {
	return (
		<HorizontalBlock>
			<BlockImg>
				<source media={imgBreakPoint} srcSet={star_wars_big} />
				<img src={star_wars} alt='' />
			</BlockImg>

			<StarWarsDescription>
				<BlockTitle>SIMPLESMENTE DA PRÓXIMA GERAÇÃO</BlockTitle>

				<BlockSubtitle>
					Experimente a próxima geração com LEGO® Star Wars™: a Saga Skywalker com Xbox
					Série S
				</BlockSubtitle>

				<GreenBtn>Saber mais</GreenBtn>
			</StarWarsDescription>
		</HorizontalBlock>
	)
}

const GearShopBlock = () => {
	return (
		<HorizontalBlock>
			<BlockImg>
				<source media={imgBreakPoint} srcSet={gearShopBig} />
				<img src={gearShop} alt='' />
			</BlockImg>

			<GearShopDescription>
				<BlockTitle>SIMPLESMENTE DA PRÓXIMA GERAÇÃO</BlockTitle>

				<BlockSubtitle>
					Experimente a próxima geração com LEGO® Star Wars™: a Saga Skywalker com Xbox
					Série S
				</BlockSubtitle>

				<GreenBtn>Saber mais</GreenBtn>
			</GearShopDescription>
		</HorizontalBlock>
	)
}

export { StarWarsBlock, GearShopBlock }
