---
layout: post
title:  "A Tour Of the Varieties of DAI"
date:   2019-12-03 20:12:46 -0700
cover: /images/blog/1_u_fPkE2LdoXJ8R2aXzDjCA.png
canonical: https://medium.com/bzxnetwork/a-tour-of-the-varieties-of-dai-9ff155f7666c
author: Kistner
---
DeFi has reached escape velocity. Now that the primitives are here, we are experiencing a combinatorial explosion of new products, driven by the endless creativity of the Ethereum community. It can feel impossible to keep up with all the new projects and instruments being released on what feels like a daily basis. This article is here to help with that.

## DAI

![](/images/blog/0_eA4VnVO85pRDssLT.png)

The original collateral backed stablecoin, first proposed by MakerDAO. It has become the most commonly used unit of account across the DeFi ecosystem. Dai uses Collateralized Debt Positions (CDPs) to back its value, with ETH currently used as the collateral. [Multi-Collateral Dai](https://blog.makerdao.com/multi-collateral-dai-milestones-roadmap/) is on the horizon, with only a handful of milestones left to complete. Learn more at [MakerDAO.com](http://makerdao.com/).

## xDAI

![](/images/blog/0_yKVkQI0UcGfJZs-D.png)

xDAI was the very first DAI derivative. Originally xDAI was run on a Proof of Authority (POA) sidechain, allowing frictionless transfers of xDAI with very short transaction times. Now, xDAI runs on a DPoS blockchain using the POSDAO consensus algorithm. POSDAO is implemented with a general purpose BFT consensus protocol such as Authority Round (AuRa) with a proposer node and probabilistic finality, or Honey Badger BFT (HBBFT), leaderless and with instant finality. Validators are incentivized to behave in the best interests of a network through a configurable reward structure. The algorithm provides a Sybil control mechanism for managing a set of validators, distributing rewards, and reporting and penalizing malicious validators. [[1]](https://forum.poa.network/t/posdao-white-paper/2208) You can use it at [xdai.io](http://xdai.io/).

## iDAI

![](/images/blog/0_1vmdVAFesMKM2-Yj.png)

iDAI was first proposed by bZx in July 2018 in [an article co-authored with MakerDAO](https://medium.com/bzxnetwork/bzx-makerdao-9db74678e16e). Its [technical specifications](https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f) were released in March 2019. It was the first time the powerful idea of a tokenized loan pool was introduced to the community. iDAI constantly accrues value and increases in price because its underlying assets are loaned out to borrowers. Two notable features of iDAI is that it compounds each second (as opposed to per block) and that its exchange rate is capable of falling if the underlying pool suffers a loss. This makes it well suited for risk management derivatives to be built on top. It can be minted at [fulcrum.trade](http://fulcrum.trade/).

## cDAI

![](/images/blog/0__CriQvjkO4CXdgJK.png)

Compound [first introduced](https://medium.com/compound-finance/testing-compound-v2-ace7184a0b4f) the concept of cTokens and cDAI in April 2019 in their announcement of Compound v2. Like iDAI it is a tokenized lending pool that constantly accrues value by lending the underlying DAI to borrowers. It has two core architectural differences compared to iDAI. First, it compounds per block instead of each second. Second, in the event of a loss to the underlying pool, the exchange rate of cDAI does not decrease. This can potentially lead to a bank run in the case of a black swan event, with the last lender(s) to withdraw their funds sustaining the entire loss. It can be minted at [compound.finance](http://compound.finance/).

## rDAI

![](/images/blog/1_PZqn1vVpiLkjUL6rSvmsrg.png)

RToken, or Reedemable Token, is an ERC20 token that is 1:1 redeemable to its underlying ERC20 token. The underlying tokens are invested into interest earning assets specified by the allocation strategy, for example into [Compound](http://compound.finance/) or [Fulcrum](http://fulcrum.trade/). Owners of the rTokens can use a definition called hat to configure who is the beneficiary of the accumulated interest. RToken can be used for community funds, charities, crowdfunding, etc. It is also a building block for DApps that need to lock underlying tokens while not losing their earning potentials.[[2]](https://github.com/decentral-ee/rtoken-contracts) You can learn more at [redeem.money](http://redeem.money/).

## gDAI

![](/images/blog/0_uOkvMkntlTrsQirI.png)

[gDAI](https://devpost.com/software/gdai) was built by CryptoManiacsZone (the team behind [1inch.exchange](http://1inch.exchange/)) during the ETHBoston hackathon. It uses [Fulcrum](http://fulcrum.trade/) to lend out assets while leveraging [GasStationNetwork](https://gsn.openzeppelin.com/), Kyber, & Uniswap in order to allow users to pay gas fees in DAI. It’s the first time there’s been an interest-bearing, gasless DAI. You can try it at [gdai.io](http://gdai.io/).

## dDAI

[dDAI](https://devpost.com/software/ddai) is rDAI meets gDAI. It’s built using Fulcrum’s iDAI for lending and Gas Station Network for gasless transactions. It expands on the rDAI system of hats, creating “recipes”. These recipes allow callbacks to receiving contracts and can allow data to be added to callbacks. It also integrates with GSN to allow transaction fees to be paid with DAI. It is one of the projects being developed during the Kyber DeFi Hackathon. Read more about it at the [dDAI Devpost](https://devpost.com/software/ddai).

## LSDai

![](/images/blog/0_rd-cuIWRy_CHUPnA.png)

LSDai is an interest rate swap built on Market Protocol’s derivatives and Compound’s cDAI, first created at ETHBerlin. LSDai creates a Euro-dollar like construct that is a future on the Compound Dai lending rate over the duration of the contract. This is done by leveraging Market Protocol, which takes on the approach of constructing index futures via an “iron-cross options” approach. LSDai decouples the risk of the two sides via long and short position tokens.[[4]](https://devpost.com/software/lsdai) You can try it at [lsdai.market](http://lsdai.market/).

## IdleDAI

IdleDAI is a DAI that acts as a tokenized DeFi rebalancer. IdleDAI was born during the Gitcoin Beyond Blockchain hackathon. By depositing your DAI to Idle, you receive back IdleDAI. Your DAI is automatically lent out to either Fulcrum or Compound, depending on what maximizes your interest rate. The fact that IdleDAI is a token itself makes it easily composable with other protocols. You can learn more at [Idle.Finance](http://idle.finance/).

## SwanDAI

![](/images/blog/1_MZoR8USxi5Bdb5mWfDO0uw.png)

[SwanDAI](https://devpost.com/software/swandai) is a synthetic asset that tracks the deviation of DAI’s price from its dollar peg in an exponentially increasing fashion using the Coinbase DAI/USDC API. At the expiry, the contract will trade exactly at the index price. The sellers take a time premium, compensating them for the estimated risk of DAI de-pegging. [[5]](https://devpost.com/software/swandai#updates)

## iSwanDAI

iSwanDAI is a synthetic asset that tracks the deviation of iDAI’s price from its highest recorded price using the Fulcrum smart contract. At the expiry, the contract will trade exactly at the index price. The sellers take a time premium, compensating them for the risk. Unlike SwanDAI which only covers the risk of DAI depegging, iSwanDAI covers the risk of the iDAI contract being hacked, the risk of Fulcrum failing to properly liquidate borrowers, and the risk of DAI depegging. Notably, this will only work with Fulcrum’s iDAI and not Compound cDAI because iDAI’s exchange rate can fall while cDAI’s cannot. iSwanDAI has not been built yet, so consider this a Hackathon idea.

## Aztec Notes

![](/images/blog/1_DmrIW5SXFUfjcTroR6m9mQ.png)

Aztec Notes are a form of DAI that keeps the sender, recipient, and amount confidential. It does this by using Zero Knowledge proofs. These don’t use a ZK-SNARK. Rather, it uses an algebraic zero knowledge proof that leverages Boneh-Boyen signatures to create a commitment scheme with a highly efficient range proof embedded into each commitment. This makes Aztec Notes a practical and gas efficient to perform confidential transactions. Learn more about them [here](https://medium.com/aztec-protocol/confidential-transactions-have-arrived-a-dive-into-the-aztec-protocol-a1794c00c009) or visit [aztecprotocol.com](http://aztecprotocol.com/).

## zkDAI

![](/images/blog/0_-IvZPMMZ0wRBoqWV.png)

zkDAI uses ZKSNARKs to shield transaction senders, recipients, and amounts. It was a winner of the MakerDAO API prize at ETHSingapore. It uses an implementation of ZKSNARKs that was inspired by Zcash. The ZkDai notes are spent like UTXOs. To transfer a particular value to a receiver, you select some secret notes whose net value is at least the value that you want to transact with. This value will be propagated to the receiver in the form of a new ZkDai note, and the leftover value will become a new secret note assigned to your key. [[7]](https://medium.com/@atvanguard/zkdai-private-dai-transactions-on-ethereum-using-zk-snarks-9e3ef4676e22) One disadvantage of this approach is that ZKSNARKs require a large amount of gas, so this particular implementation can be costly.

## pDAI

![](/images/blog/1_UzWHZwNWe43lQdF_eCoPgw.png)

[PoolDAI](https://zeframlou.github.io/pool-dai/) is a no-loss donation protocol enabling people to pool money together, lend it out, and donate the interest to a cause, built on Compound, KyberNetwork, TheGraph, and Blocknative. It was created by Zefram Lou, co-founder of [Betoken.fund](http://betoken.fund/).

## aDAI

![](/images/blog/1_CrJCyjf93ua83bhVOGkvmA.png)

aDAI is currently under development by the team at AAVE as part of their [Decentralized Lending Pools](https://medium.com/aave/decentralized-lending-pool-dlp-protocol-launched-on-testnet-swap-between-fixed-and-variable-e72ae43992c) (DLPs). It is already live on the testnet. aDAI works the same as iDAI. Interest compounds continuously on a per second basis, and the exchange rate is capable of falling if the underlying pool suffers a loss. This makes aDAI also suitable as a money lego for risk management products.

## nmDAI

nmDAI is a theoretical DAI that could incorporate Nexus Mutual cover into iDAI, IdleDAI, or cDAI. This would make it an interest bearing DAI that is hedged against the risk of smart contract hacks. It has not yet been built, only proposed. Hugh Karp remarked that a few changes would be required at the protocol level before it will be possible.

## wxDAI

wxDai is a wrapped xDai on Ethereum Mainnet in the form of an ERC20 token. xDai is minted as a native token on xDai Chain from locked Dai on Ethereum Mainnet. If users return xDai using xDai Bridge, then xDai burned, and Dai is unlocked. If users bridge xDai using wxDai bridge, then xDai is locked on xDai Chain, and wxDai created on Ethereum Mainnet. wxDai is unlocked, 1:1 to xDai and 1:1 to Dai.
There are use-cases of xDai where xDaI is locked on xDai bridge to provide rehypothecation of locked Dai in the form of rDai. Unlocked xDai if returned back will remove Dai from rDai. Thus, unlocked xDai can be bridged into wxDai by another bridge (mint instead of burn) and returned back to Ethereum Mainnet to provide liquidity on markets over there.

## yDAI

[Proposed](http://research.paradigm.xyz/Yield.pdf) by Dan Robinson of Paradigm, drawing yDAI allows you to leverage long assets using DAI as a unit of account. Buying yDAI on the other hand is equivalent to lending it out for interest. One downside of yDAI is that it is not perpetual and needs to be rolled over periodically. The difference in its current price and maturity price reflects the interest rate it offers, allowing the construction of the first yield curve in DeFi.

## MetaDAI/MaxDAI/rfDAI

Proposed by Jacob Schiach of MetaMoneyMarket, MetaDAI or MaxDAI is a tokenized rebalancer much like IdleDAI. MetaDAI currently rebalances between Compound and dYdX. MaxDAI will rebalance between Fulcrum, Compound, and dYdX. Jacob is currently in the process of investigating how to have it achieve the risk-free rate through insurance like Nexus Mutual for MaxDAI, which he intends to name rfDAI.
