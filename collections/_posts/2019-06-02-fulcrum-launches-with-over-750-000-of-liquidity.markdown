---
layout: post
title:  "Fulcrum Launches With Over $750,000 in Liquidity"
date:   2019-06-02 20:12:46 -0700
cover: /images/blog/1_SQvBnGWYlM-wwJsZPEz2-w.png
canonical: https://medium.com/bzxnetwork/fulcrum-launches-with-over-750-000-of-liquidity-aa1d28a66510
author: Kistner
metadescription: "Fulcrum supports lending, leveraging, and shorting of ETH, wBTC, ZRX, KNC, BAT, REP, DAI, and USDC. The platform enables users to lend assets for interest or enter into short/leveraged positions with only three clicks."
intro: "Fulcrum supports lending, leveraging, and shorting of ETH, wBTC, ZRX, KNC, BAT, REP, DAI, and USDC. The platform enables users to lend assets for interest or enter into short/leveraged positions with only three clicks."
---
_A special thanks to Matthew Di Ferrante and Harry Roberts of ZK Labs for auditing the Fulcrum smart contracts._

Upon launch, [Fulcrum](https://fulcrum.trade/), the platform for tokenized margin lending and trading, already has [$750,000 in liquidity](http://fulcrum.trade/#/stats).
Fulcrum supports lending, leveraging, and shorting of ETH, wBTC, ZRX, KNC, BAT, REP, DAI, and USDC. The platform enables users to lend assets for interest or enter into short/leveraged positions with only three clicks. To see a step-by-step walkthrough, [click here](https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f) and scroll down.
You can use Fulcrum [here](http://fulcrum.trade/) or read the technical specifications [here](https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f).

## Fulcrum Sets a New Standard for User Experience

When we crafted Fulcrum, we agonized over every click and every word, removing any wasted motion. We’ve added features and defaults that make lending and trading more painless than it has ever been. We’re proud of how much thought and love we have poured into the product.

## Three clicks. No Accounts. No fees.

To start earning interest just click lend, enter the amount, and accept. If you want to trade, select the leverage, click buy, enter the amount, and accept. It’s that easy. You can get started right away without registering an account. How much do we charge for this? Nothing. It’s all free.

## Everything is Tokenized

Margin loans are tokenized, minting ERC20s called iTokens. When a lender deposits ETH, DAI, etc into Fulcrum they receive iETH, iDAI, etc back. iTokens continuously increase in price as you hold them, accruing interest from borrowers. These tokens can be sold on Uniswap, [used as collateral for loans](https://medium.com/@b0xNet/bzx-makerdao-9db74678e16e), bundled into interest bearing ETFs, listed on DEXs and centralized exchanges, or used to exit a loan.
Margin positions are tokenized, minting ERC20s called pTokens. pTokens are static leverage tokens with variable interest rates. They can be sold on Uniswap, bundled into short and leveraged ETFs, listed on DEXs and centralized exchanges, or used to exit a position. It should be noted that Fulcrum facilitates both pTokens and base protocol positions. In contrast to pTokens, base protocol positions* have static interest rates and allow for traders to manage collateralization levels.

## Fulcrum Supports Many Wallets

Fulcrum supports Formatic, Portis, Bitski, Metamask, Equal, Jarvis, Nifty, Dapper, and every other browser based web3 wallet.
![](/images/blog/0_5ZB8v5Dy0YSUCFOC.png)
_If you have a browser extension based wallet like Nifty, Equal, or Dapper, simply select Metamask._

Liquidity in the ecosystem is fragmented among a number of developing approaches to private key and asset management. Users have their assets in a large variety of wallets, and Fulcrum attempts to service as much of the ecosystem as possible.

## Perpetual Positions

Both pTokens and base protocol positions have a duration of 28 days. However, the positions automatically roll over and renew themselves without requiring any intervention from the user. This has no consequence for the interest rates of pTokens which are already variable, but since base protocol positions have a fixed interest rate, this means they refinance every 28 days. The fact that positions automatically roll over provides a great experience to traders as they don’t have to worry about expiration dates when they’re entering or holding positions.

## Minimal Liquidation Penalties

Fulcrum liquidation penalties are only slightly more than the gas cost required to liquidate, around 10% more on average. Reducing the rewards for liquidating a position also reduces the profitability of attacking the price feed. Because the gas costs for margin calls are significantly higher than the gas costs of closing a position, traders are still encouraged to monitor their position and close out the loan before being liquidated.

## Partial Liquidations

There’s no reason for traders to be fully liquidated if their position goes under margin maintenance. Instead, traders are liquidated such that margin maintenance is brought from 15% to 25%. This reduces slippage, protects lenders, and allows traders to maintain their exposure.

## Slippage Protections

If a margin liquidation is going to result in slippage in excess of 10%, the margin call transaction reverts. This forces margin calls to be broken up into smaller, more manageable trades. There is a tradeoff between enforcing optimal execution and latency of margin calls. For the protection of lenders, it is more desirable that margin calls are executed swiftly and in as few transactions as possible. However, it is also against the interests of lenders for excessive slippage to result in a loss of principal. By setting a cap on slippage and forcing liquidations to proceed through multiple transactions a reasonable middle ground between these two trade-offs is reached.

## Unit of Account Abstraction*

Units of account are stablecoins that can be traded against for leveraged and short positions. Fulcrum supports both DAI and USDC. Traders on other platforms often wonder “should I use DAI or USDC to trade against?” There are three main factors that go into choosing a unit of account: interest rates, slippage/liquidity, and price stability. Only interest rates and liquidity can be calculated objectively. Whenever a trade is being initiated, the costs of slippage for entering and exiting the position is added to the cost of interest to compute the total costs of using each supported stablecoin. The stablecoin with the least cumulative cost is presented as the default unit of account.
Users may have strong opinions about the relative price stability of each stablecoin. Some users might not be confident in the ability of DAI to hold the peg throughout the duration of the loan. Other users might not be confident of the ability of Coinbase to fully back USDC. We allow opinionated users to manually select their unit of account in the Advanced tab of the trade selection screen.

## Smart Trade Sizing*

Traders shouldn’t have to deduce how much slippage a trade will incur through trial and error. Fulcrum’s default trade sizing suggests the largest trade possible at the lowest reasonable level of slippage available.
This has the consequence of enabling traders seeking to enter into large positions to automatically break trades up into the optimal trade size, facilitating optimal trade execution without any cognitive overhead.

## Intelligent Tokenization*

Margin position tokens (pTokens) and base protocol positions have their individual considerations. pTokens can be sold on the open market, often at a better price than closing the position in a single transaction. If this was not the case, an arbitrageur could buy pTokens and close the position out slowly with optimal execution to minimize slippage, thereby making a profit. pTokens are also composable with other DeFi protocols and can be used in various financial products such as leveraged and short ETFs. However, it is difficult to manage the collateralization of pTokens. Additionally, since they are part of a pooled position, when they are liquidated or closed, they could potentially suffer more slippage than a base protocol position. Lastly, static leverage pTokens don’t always offer the same level of collateralization as a base protocol position. This means that sometimes it is better for a trader to use a base protocol position than a pToken if the trader wants to minimize the chance that they are liquidated.

Fulcrum automatically selects the default option of base protocol position or tokenized position based on what is most beneficial to the trader, intelligently managing the tokenization so that traders don’t have to. However, if a trader has a strong preference for a certain kind of loan they can select it via the Advanced tab of the trade selection screen. For an in depth discussion of the pros and cons of our static leverage pTokens and how they compare to variable leverage tokens see this previous article.

## Close Positions with 0x and Kyber**

Fulcrum positions can be closed with KyberSwap, 0x, or both. The user interface currently facilitates closing positions with KyberSwap. We will be abstracting away the process of sourcing 0x liquidity, enabling users to execute an optimal combination of KyberSwap and 0x trades to minimize slippage.

## Use Any Supported Token For Collateral

Any supported token can be used to enter into a base protocol or pToken position. The token is swapped through KyberSwap into the appropriate collateral token. Simply click the “change” option next to Deposit Token.

![](/images/blog/0_iCuTQxlugniBG3wz.png)

This will bring up a menu containing all of the supported tokens. Click the token you’d like to use to enter into the position and you’re done.
![](/images/blog/0_hLqZwdvgMb0bTe64.png)

This is an optional feature for more advanced users. It should be noted that using an ERC20 instead of ETH will require a transaction approving a token allowance. The interface will prompt traders requiring a token allowance.
Get started now
If you want to start lending and trading now, go to https://fulcrum.trade. To learn about the Fulcrum technical specifications, read the announcement article Introducing Fulcrum. For a comparison to other products in the DeFi lending space, read our article A Framework for Classifying DeFi Lending Protocols. If you need answers to frequently answered questions, read the FAQ. For support using Fulcrum, join our Discord. If you’d like to learn more about the underlying protocol powering Fulcrum, visit the bZx website.
