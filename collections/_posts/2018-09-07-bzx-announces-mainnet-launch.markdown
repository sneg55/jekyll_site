---
layout: post
title:  "bZx announces Mainnet Launch, releases ZK Labs Security Audit, and unveils upcoming Relay Integrations"
date:   2019-09-07 20:12:46 -0700
cover: /images/blog/1_LNcoYRFe5QfMcWd9II1l0w.png
canonical: https://medium.com/bzxnetwork/bzx-announces-mainnet-launch-releases-zk-labs-security-audit-and-unveils-upcoming-relay-a690cc6c7bf1
author: Kistner
---
bZx deployed its protocol to the Ethereum mainnet after passing a successful audit by ZK Labs. ZK Labs is a leading security auditor in the blockchain space, headed by Matthew DiFerrante, Dean Eigenmann, Nick Johnson, and Harry Roberts. ZK Labs has audited contracts containing billions of dollars and even conducts audits for Ethereum itself. The report can be found [here](https://github.com/mattdf/audits/blob/master/bZx/bzx-audit.pdf).

## Smart Contract Audit

ZK Labs audited bZx’s smart contracts and released a detailed report of their findings, evaluating whether the codebase adheres to the established best practices for smart contract development, code correctness, quality, and security. The audit reported that the code was well structured and properly compartmentalized.

![](/images/blog/1_D3e3qdjZBd7D4NbI5BSmJQ.png)
_A callgraph showing the internal mechanics of the bZx Oracle_

The only issue remaining after the audit is that it is possible for any upgrade to any component to affect the state or balances in the entire protocol. This can be accounted for by being consistent about compiler versions and testing deployment on a private mainnet before releasing to the public mainnet. This is also addressed by our new governance mechanism.

## Governance

During development of the protocol on the testnet we used a single signature wallet capable of exercising full control of the protocol; this is a natural feature of being in development. Since launching to the mainnet, the protocol is now governed using a time-locked variant of the Gnosis multi-signature wallet, much like the 0x project. The critical contracts providing access to funds are subject to a 28 day timelock while less critical contracts are subject to a 14 day timelock.

## Grinding Attacks and Miner Collusion

One of the issues raised during the audit was the possibility of grinding attacks that could be carried out against the guarantee fund with the help of colluding miners. While these sort of attacks are not particularly likely in the early stages, as the guarantee fund grows the incentive to conduct them increases. There are two major variants of grinding attacks that could be performed, one that enriches miners and another that enriches bounty hunters.

1. *Miner Collusion Attacks.* The exponential moving average governing bounty hunter compensation has a lookback window of ten transactions. This means that the refund could be set arbitrarily high if an attacker sent ten high gas price transactions (e.g., 10 txns at 999 gwei each). There is a trade-off between responsiveness of the EMA and its susceptibility to being gamed. While at first it might appear that bounty hunters can game the EMA to receive outsized rewards, a closer look reveals that there is no advantage to bounty hunter manipulation of the EMA. Since bounty hunters must compete, rational bounty hunters will submit transactions according to the following formula:

>E = G + M

Where G is the optimal gas cost, E is the compensation dictated at the current time by the EMA, and M is the marginal cost of bounty hunting (time, electricity, and equipment costs).

Since bounty hunters must engage in a gas war in order to receive the bounty, simply manipulating the EMA does not result in an increase in bounty hunter compensation. However, a miner could manipulate the EMA in a profitable manner in two different ways. A miner with a large amount of hash power could censor the transactions of other bounty hunters and insert their own 0 gwei transaction, thereby claiming a large bounty without engaging in a gas war (at the cost of forfeiting a large portion of the fees from transactions submitted by competing bounty hunters). Alternatively, a miner with a large amount of hash power might be incentivized to game the EMA so that bounty hunters engage in a gas war, thereby enriching the miner.

These two scenarios are nearly equivalent. In the former scenario, the miner profit P is equal to E - T - M + B while in the latter scenario the miner profit P is equal to G - T, where T is the cost of manipulating the EMA upwards and B represents the gas spent by bounty hunters prior to their transaction throwing as a result of miner front-running. T is determined by the fraction of hashpower controlled. As a miner’s hashpower approaches 50%, T approaches 50%. Above this level of hashpower, the security of the blockchain itself is compromised. The difference between these two quantities is equal to M + B, the marginal cost of bounty hunting plus the gas spent in thrown transactions. In essence, the miners profit by inflating the EMA, draining the guarantee fund in the process, and by siphoning gas from bounty hunters submitting thrown transactions.

2. *Spot Market Manipulation Attack.* The guarantee fund is capable of being griefed by intentionally creating loans whose contribution to the guarantee fund is less than the cost of liquidating the position. Under normal circumstances, the guarantee fund might be expected to accumulate more fees than it pays out to bounty hunters. However, by intentionally creating many small loans for tokens with thin orderbooks and taking both the position of lender and borrower, an individual could manipulate the spot market to cause a large number of liquidations. If the loans have been issued for only a short amount of time, the cost of liquidating would exceed the fee collected on interest, thereby draining the guarantee fund. This is especially true during times of high network congestion.

This sort of attack could be motivated by bounty hunters looking to artificially increase the amount of work available to them. As more positions are required to be liquidated, more money from the guarantee fund must be directed toward supporting the bounty hunter network.

3. *Combined EMA and Spot Price Manipulation Attack.* An attacker could combine an attack on the EMA with the spot market manipulation attack to produce a third variety of attack. If a bounty hunter knows which loans are going to become eligible for liquidation before other bounty hunters because they are manipulating the spot market, this could create an informational advantage. This informational advantage could be leveraged to submit a transaction with a lower gas cost relative to competing bounty hunters, allowing the attacker to bypass the competitive forces that make EMA attacks unprofitable for bounty hunters. By manipulating the EMA upwards and obtaining an informational advantage, bounty hunters could profit from loans they created and manipulated into bankruptcy. It should be noted, however, that the computational efficiency of evaluating margin account statuses is high, so the information advantage obtained would be expected to be relatively low.

## A Major Protocol Change

In light of these potential dangers to the guarantee fund, we made a difficult choice to overhaul the protocol to better align the incentives within it. There are three objectives we were looking to accomplish in removing these attack vectors:

1. Modularization of the guarantee fund, with funds only disbursed to lenders who would lose principal.
2. Alignment of the incentives of traders to discourage forced liquidations.
3. Alignment of the incentives of the bounty hunters so that they will not be motivated to create work for themselves.

This led us to make the following four changes:
- Bounty hunters are no longer paid out of the guarantee fund
- Gas refunds are no longer paid out of the guarantee fund
- Bounty hunter transaction fees will be taken out of the collateral staked by traders
- Trader collateral must be greater than 0.5 ETH

Minimum position limits have been set to ensure that there will always be enough collateral to incentivize bounty hunters to liquidate. Now, with these changes in place, there is no way to profitably drain the guarantee fund. Not only have we eliminated the incentive for bounty hunters to create work for themselves, but we’ve increased the efficiency of the protocol by incentivizing borrowers to avoid having their position margin called.

Margin calling is extremely computationally expensive and requires a large amount of gas to process. Since it is important to keep the amount of gas used by the application to a minimum, margin traders need an incentive to avoid forcing a liquidation. Since margin traders are the only ones that can release a position before they are force liquidated, and since they already are expected to monitor the health of their position, it makes sense that they should bear the cost of margin calls.

While this change has eliminated the possibility of a spot price manipulation attack, there still exists the potential for an EMA manipulation attack, though the combined variant is no longer viable. Bounty hunters have no incentive to manipulate the EMA any longer. However, miners still have an incentive to manipulate it upwards so long as excess gas used by the bounty hunters exceeds the cost of manipulating the EMA upwards. In order to mitigate this sort of attack, the EMA contains an outlier detection mechanism that uses the formula k = 2x + 5 where x is the current EMA value. If the gas used for a transaction is greater than k, the transaction is not encoded into the EMA.

The remaining attack vector is obscure and, in the minds of our security experts, highly improbable. Miners can still attempt to slowly raise the EMA in order to cause bounty hunters to use more gas in their transactions. An individual miner only has incentive to do this if they control a large amount of the hashpower, as the cost of raising the EMA is likely to exceed the miner fees collected. This is an attack against the collateral staked by margin traders. However, traders can still protect themselves by simply being diligent about avoiding margin calls.

## Relay Integration

![](/images/blog/0_C-nzRLvTsFSxitb3.png)
_The first DEX to offer non-custodial margin trading_

Starting Monday, we anticipate that the protocol will debut on Bamboo Relay. We would like to extend thanks to the folks at Bamboo for working hard to integrate the bZx protocol. This marks the first time in history anyone can use margin on a DEX. We are working with liquidity providers to ensure that there is liquidity on the orderbooks starting from Day 1. If you’ve been wanting to take advantage of market irrationality to short Ethereum — or even take up a leveraged short position — now is the time. There will be liquidity for both ETH and a variety of ERC20 tokens. If you’ve been wanting to make passive income issuing margin loans, now is your opportunity. Individuals wanting to enter into a short or leveraged position can make use of the entire 0x liquidity pool in addition to the entire KyberNetwork liquidity pool to manage positions. We are proud to be one of the first fully functional dApps in the ecosystem, and we thank Bamboo for working closely with us.

In the coming weeks and months, more relays are expected to go live with their bZx integration. We are currently partnered with six relays including SharkRelay, Amadeus, Instex, Starbit, and OpenRelay. It’s been a great pleasure getting this project from inception to fruition, and we thank everyone who has taken this journey with us.
