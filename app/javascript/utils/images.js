import usdcImage from 'images/USDC.png'
import batImage from 'images/BAT.png'
import ethImage from 'images/ETH.png'
import uniImage from 'images/UNI.png'
import daiImage from 'images/DAI.png'
import ethrsiapyImage from 'images/ETHRSIAPY.png'
import wbtcImage from 'images/WBTC.png'

const tokenImage = {
  USDC: usdcImage,
  BAT: batImage,
  ETH: ethImage,
  UNI: uniImage,
  DAI: daiImage,
  ETHRSIAPY: ethrsiapyImage,
  WBTC: wbtcImage,
}

export const assetImage = (symbol) => tokenImage[symbol]
