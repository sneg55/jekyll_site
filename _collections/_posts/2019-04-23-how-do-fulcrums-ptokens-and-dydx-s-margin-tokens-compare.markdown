---
layout: post
title:  "How do bZx’s Fulcrum pTokens and dYdX’s Expo Margin Tokens Compare?"
date:   2019-12-03 20:12:46 -0700
cover: /images/blog/1_kqlKFbx4QzQJdxXDRKJxuA.png
canonical: https://medium.com/bzxnetwork/how-do-fulcrums-ptokens-and-dydx-s-margin-tokens-compare-a3badae4b004
author: Kistner
---
A special thanks to Antonio Juliano of dYdX for his input on this article.

*High level summary:* Fulcrum pTokens are static leverage tokens while dYdX margin tokens are variable leverage tokens. In this article we explore the consequences for margin traders and financial protocols.
Both [Fulcrum](https://fulcrum.trade/) and Expo offer the ability to take advantage of tokenized margin positions, but there are stark architectural differences between the two implementations with consequences for the user experience of traders. Recently dYdX announced a move away from margin position tokens and toward base protocol margin positions due to what they view as misalignment with product-market fit. This caused us to reflect on our own offering and attempt to incorporate the insights that they have gained from their tenure in the market. We believe that Fulcrum margin tokens possess properties that avoid some of the problems faced by dYdX margin tokens while confronting different issues.

## Understanding the Needs of Margin Traders

In order to derive maximum benefit from a trading platform, what properties do margin traders require? This was the question we asked ourselves in an attempt to understand how Fulcrum pTokens and dYdX margin tokens address the needs of margin traders.
Margin traders want:
- To select a specific amount of leverage with granular control.
- To initiate positions as far from margin maintenance as possible.
- The ability to adjust collateral levels to avoid margin calls.

Generally, these desires can be understood as exposure control and liquidation avoidance. Anything that compromises these two fundamental needs will fail to capture the margin trading market.

## Addressing The Needs of Margin Traders

### Exposure Control

Fulcrum pTokens maintain a constant level of leverage while dYdX margin tokens have variable levels of leverage that fluctuate with price movements.

*Fulcrum pTokens* are minted by traders, typically using a partial fill of an existing base protocol order. This base protocol loan has a defined initial margin, meaning a trader will always get a level of exposure reflective of the token being purchased. For example, a 2x Long ETH token will always represent 2x long exposure upon being minted by a trader. This makes it simple for traders to get the precise level of exposure they are looking for.

*dYdX Tokens* have variable leverage, meaning the leverage of the token may not correspond to the leverage described. For example, a 2x Long ETH token can have leverage anywhere between 0 and 6.66x leverage. This can make it difficult for a trader coming to Expo to get the precise level of exposure they are looking for.

### Liquidation Avoidance

Liquidation avoidance has two main components:
- Starting the loan as far as possible from initial margin
- Collateral control.

Fulcrum pTokens and dYdX Tokens have different relationships with liquidation avoidance. The most devastating possible event for a trader is for their margin position to be forcefully liquidated, locking in losses. This means that margin traders are strongly incentivized to maximize the difference between margin maintenance and current margin. If they buy into an existing tokenized margin position, and the price has moved against that position, they are at risk of being prematurely liquidated.

The mechanics of this is different for both Fulcrum pTokens and dYdX Tokens due to their architectures. When a trader moves to buy a dYdX 2x Long ETH token and the price of ETH has dropped sharply, they are actually buying a token with much higher leverage and therefore a much closer liquidation price. However, the liquidation price still corresponds neatly with the level of leverage. With Fulcrum pTokens, although traders have full control over exposure, they are onboarding what is essentially a pre-existing position where there may be little relationship between the level of exposure and the liquidation price.

With Fulcrum pTokens it is very attractive for traders to enter a pToken position where current margin > initial margin and extremely unattractive for traders to enter a position where initial margin > current margin. With dYdX Tokens it is always equally attractive to enter a position as long as it represents the desired level of exposure.

Fulcrum pTokens and dYdX Tokens both have difficulties with allowing traders to top up their collateral to avoid a margin call. Fulcrum pTokens allow a trader to buy more pTokens and increase the collateral pool, but because pTokens are fungible ERC20s, this effect is netted out among all holders, making it less likely that any single trader can prevent a margin call. dYdX Tokens give traders no ability to influence the collateralization of the loan; the liquidation price is set in stone regardless of the actions of the traders.

## The Hybrid Approach

There is a satisfying solution to the shortcomings of Fulcrum pTokens. When current margin > initial margin for a pToken, it is better to issue pTokens to traders. When initial margin > current margin it is better to issue base protocol positions. The Fulcrum portal will adjust to these conditions and offer the appropriate type of position by default. If for some reason a trader requires pTokens instead of a base protocol position, they can simply check a box to get pTokens instead of a base protocol position. We anticipate that dApps and protocols making use of pTokens will integrate at the contract level and that these UI changes won’t affect them.

By knowing when to offer pTokens and when to offer base protocol positions, an interesting property emerges for Fulcrum users. On average, we should expect users of Fulcrum to enter positions where current margin > initial margin. Under this system, traders will get the benefit of free extra collateralization half the time they trade, protecting them from margin calls. This means that the Fulcrum portal is providing a superior experience that no other margin platform can match.

## Deeper Mechanics

Behind the scenes there are other differences that have less of an impact on margin traders. Fulcrum pTokens are perpetual and can be held in the long term while dYdX tokens expire every 28 days and require monthly management to maintain exposure. Most margin traders do not maintain exposure for months at a time, so perpetuity of margin tokens has greatest applicability to financial products that wish to make use of margin tokens. Both pTokens and dYdX Tokens have underlying loans that last for 28 days, but pTokens roll over automatically in a trustless and decentralized way while dYdX tokens have to be manually redeployed by the dYdX team each time a loan expires.

Fulcrum pTokens and dYdX Tokens have very different margin calling mechanisms. Fulcrum pTokens can be liquidated in batches so as not to incur excessive slippage on Kyber. Soon there will be other liquidity sources available to liquidate Fulcrum pTokens; this will be described in an upcoming article. dYdX Tokens are liquidated over the course of a Dutch Auction that lasts a maximum of an hour using liquidity from RadarRelay and ETH2DAI. Because of this large and sudden liquidation, there is often significant slippage that accompanies it.

## Conclusion

There are significant architectural differences and trade-offs made that distinguish Fulcrum pTokens from dYdX Tokens. Fulcrum pTokens are appropriate for traders that want a specific level of exposure, but base protocol positions are often a better option depending on the current collateralization ratio of the pTokens. The Fulcrum portal always presents traders with the position type that offers the greatest protection from margin calls. This hybrid approach protects traders from margin calls in a way that no single approach can. dYdX Tokens are appropriate for traders that do not demand precise control over exposure, and always provide an appropriate liquidation price for any given level of leverage. One advantage that pTokens have over dYdX Tokens is that their perpetuity makes them more appropriate for financial productization. Lastly, Fulcrum pTokens and dYdX Tokens have different liquidation mechanics which may present a different risk profile for traders concerned about slippage.
