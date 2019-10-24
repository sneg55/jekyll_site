---
layout: post
title:  "bZx + MakerDAO"
date:   2019-07-07 20:12:46 -0700
cover: /images/blog/1_eTHQVq5sjalYVLy3TeKA7A.png
canonical: https://medium.com/bzxnetwork/bzx-makerdao-9db74678e16e
---
[bZx](https://bzx.network/) and [MakerDAO](https://makerdao.com/) are excited to announce a strategic partnership between their protocols. bZx is a margin lending protocol designed to bring 0x-standard DEXs to full feature parity with current centralized exchanges.

There are three major areas of potential integration between bZx and Maker:
1. Using Dai as a unit of account for margin traders
2. Using bZx to create a secondary market for Dai
3. Using bZx iTokens to collateralize [CDPs](https://vimeo.com/247715549) and offset stability fees

Stablecoins have long been thought to be the unobtainable holy grail of currencies. They are critical to the long term adoption of cryptocurrencies through their use as a Medium of Exchange. In what has been considered one of the most groundbreaking and critical efforts in the cryptocurrency space, the MakerDAO team created the collateralized stablecoin

Dai, breaking the impossible trilemma: maintaining a peg in the absence of capital controls while keeping a sovereign monetary policy.

![](/images/blog/0_9AHbH-Cyx4sBR5XU.png)
_The Impossible Trilemma_

### Unit of Account: Infrastructure for Shorting and Leverage

Beyond the use of Dai as a Medium of Exchange, it is critical to the developing Decentralized Exchange (DEX) ecosystem as a Unit of Account. Most cryptocurrencies on the market are highly correlated with each other, moving up together or moving down together. When engaging in complex trading activities such as shorting and leveraging, it is essential for traders to have access to a stable unit of account so their trades are not confounded by correlation between assets.

As an example: a trader wants to short ETH using a 0x-based DEX. First, they would use the bZx protocol to borrow ETH by availing a margin loan. Next they would sell the ETH for an asset that is uncorrelated with ETH. That’s where Dai comes in. By trading the Ethereum for Dai, the trader can wait for Ethereum to fall in value and buy it back at a lower price. The trader would then have more ETH than they started with, allowing them to pay back the loan in full and keep the difference. If the trader was to sell the ETH in exchange for a typical ERC20, it is likely that the ERC20 would fall in value as ETH fell in value, making their bet against the price of ETH more risky.

### A Secondary Market for DAI

The bZx protocol also allows individuals to monetize their Dai holdings. If an individual wants to lend Dai, they can do so at an interest rate determined by the market. This is useful for traders looking to leverage an existing position. For example, if a trader believes ETH will go up in value, they can borrow Dai on the secondary market from individuals who have taken out a Collateralized Debt Position (CDP). This will allow them to use that Dai to buy additional ETH, leading them to profit from any increases in the price of ETH.

### iTokens and CDP Collateral

The previous uses of the bZx protocol outlined above — shorting and leveraging — are possible now that bZx is on the mainnet. The bZx team is moving forward with development of Phase II of the bZx protocol, starting first with iTokens (tokenized margin loans). iTokens are created by sending ETH or ERC20s to the iToken smart contract. Once submitted, the iToken version of the asset is emitted to the user. For example, if ETH is sent to the contract, the user receives iETH in return. These iTokens are fully collateralized and always 1 to 1 redeemable for the underlying token.

The iToken smart contract puts the ETH or ERC20 to work, loaning them out to traders using the bZx protocol. These margin loans are secured not only by the bZx oracle but also by the guarantee fund. The holder of an iToken is entitled to the interest accrued by their token. One of the most exciting applications of iTokens is its use as collateral. When opening a CDP with Maker, collateral must be pledged. Currently, CDPs accept only a single type of collateral: ETH. As MakerDAO expands into multi-collateral CDPs, iTokens have the potential to be the most efficient way of collateralizing loans. As with all potential collateral on the Maker platform, iTokens will be reviewed by the risk team and voted in as collateral by MKR holders. Initial assessment by the MakerDAO risk management team indicates that the iToken design reaches the threshold of feasibility. A full risk assessment will be completed when the iToken contracts are ready for deployment.

Opening and maintaining a CDP requires that the creator pay stability fees. These stability fees are critical to the health of the Dai stablecoin ecosystem and incentive structure. Using iTokens as collateral would allow creators of CDPs to offset the cost of these stability fees with the interest accrued by the margin loans occurring in the background using the bZx protocol. It’s possible to imagine a scenario where iToken holders are earning interest in excess of the stability fee, making money even while holding a CDP. This is an extremely compelling use case for iTokens; it is conceivable that everyone opening CDPs would prefer to use iTokens to offset stability fees.
