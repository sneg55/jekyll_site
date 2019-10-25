---
layout: post
title:  "ETHSingapore Wishlist and Bounty"
date:   2019-12-03 20:12:46 -0700
cover: /images/blog/1_4Mec30Uzx-pk72s9YnFisg.png
canonical: https://medium.com/bzxnetwork/ethsingapore-wishlist-and-bounty-6d0b1b1d3ad2
---
bZx is sponsoring the [ETHSingapore Hackathon](http://ethsingapore.co/). The Hackathon is taking place from December 7–9th. ETHSingapore is the first Ethereum and ETHGlobal Hackathon in the Southeast Asian region, which reflects an important step forward for both Ethereum and the region. Right before ETHSingapore, we will also be co-hosting a [DeFi meetup](https://t.co/JR5sW5Cgz2) on December 5th along with CoinAlpha, Set Protocol, Neutral, Sparrow, and Spartan. As one of the sponsors, we’re offering a 4 ETH bounty for the team with the best project built on top of the bZx protocol.

## What is bZx?

bZx is a fully decentralized protocol for margin lending and margin trading on the Ethereum blockchain. It is a financial primitive, a fundamental building block of the decentralized finance software stack. The bZx protocol works alongside exchange protocols like 0x and KyberNetwork to allow critical functionalities like shorting and leverage. The bZx stack can be understood in terms of two layers: the base layer and the liquidation layer. The base layer of the protocol is a series of smart contracts which governs the logic of escrow and interest disbursement. The liquidation layer contains the logic used to execute margin calls on the escrowed funds. This layer also governs the valuation of assets within margin accounts and determines where liquidity is sourced in the event of a margin call.

The protocol is fully functional on the mainnet, powering the funding orderbook at BambooRelay.com, and on the roadmap of half a dozen other relays. There are now a whole host of ways to take part in the ecosystem. This wishlist describes a few of them.

## Relays

1. *Create Your Own Generic Relay*
The first and most obvious way to take advantage of the bZx protocol is to start your own relay. Starting your own relay is as easy as creating a UI and connecting it to the bZx smart contracts using bZx.js. A relay can be standalone; it doesn’t necessarily have to be a 0x relay. If you want to create a relay dedicated specifically to hosting a funding orderbook, individuals can manage their positions using the liquidity from Kyber Swap.

2. *Dark Pool Relays*
Using a matching order system, an opaque orderbook, and providing just in time quotes can allow an enterprising individual to create a funding orderbook that functions like a dark pool. Typically dark pools are a way for individuals with larger volumes of assets to participate in the market without signaling their trades. Likewise, individuals looking to loan out or short large amounts of assets may wish to utilize a dark pool to carry out their actions.

3. *One Click Shorting and Leverage*

This could be built as an independent project, bringing a Shapeshift-like experience to shorting and leverage using the bZx.js library to connect to the bZx smart contracts. It is also possible to build this as an interface that sits on top of BambooRelay and utilizes their Relay API.

4. *An IPFS Hosted Relay*
It’s possible to host the front-end and UI on IPFS and connect to the bZx smart contracts through Infura, creating a relay more decentralized than most.

5. *Relay for Mobile or Mobile Widget*

![](/images/blog/0_dhefq6CuIlGFxqTF.png)

Currently there are several 0x DEXs that feature mobile interfaces, but the area is wide open for innovation. There are many ways to build out the ecosystem in this area. You could create your own standalone bZx relay for mobile. You could build an integration for an existing mobile-based 0x relay such as imToken. Lastly, you could create a widget for relays that could be adopted broadly by the ecosystem. There are certainly many avenues to explore in this area.

## Integrations

1. *Fetch, Airswap, Totle Integrations*

![](/images/blog/0_erIfkJ3NlEn3pITP.png)

Once a trader has borrowed assets from a lender, they’re able to manage their position from inside their margin account. Currently, they can accomplish this by presenting the bZx.sol contract with a 0x order or by authorizing trades via Kyber Swap. However, the protocol is extensible enough to allow for liquidity to be sourced from many pools. Totle and Fetch are projects which fabricate orderbooks constructed from the aggregation of many liquidity sources. It may be most productive to integrate Totle or Fetch, since Airswap is one source of liquidity they are tapping. However, it is always better for traders to have as many options as possible.

2. *Create a Hydro Protocol for bZx*

The Hydro Protocol is a network layer protocol that creates federated liquidity pools. It is currently used most prominently by the relay DDEX. It’s primarily a coordination layer that sits between the protocol and DEXs, allowing an alternative incentive structure for liquidity sharing.

3. *Paradigm.Market Wrapper Contract*

How Paradigm Works
![](/images/blog/0_LSKl4UNVgCNpoauA.png)

[Paradigm](http://paradigm.market/) has created a decentralized relay protocol that functions to create a generalized forwarding contract interface system and global liquidity pool that abstracts away liquidity from centralized venues. It is possible to write a simple wrapper contract that would allow easy integration of Paradigm’s middleware protocol with the bZx protocol. The primary repository you’ll be working with is SubContractSDK. It contains the base SubContract and interface definition, as well as some documentation describing how to implement existing (or new) settlement logic. To get a feel for how to use this library, SubContractExamples may be instructive.

4. *Automated Trading Interface*

This application could use Bamboo Relay or any other bZx relay that adopts the bZx Standard Relay API on the backend, providing automated lending and borrowing functionality. On the lending side, the application would automatically queue up the approvals necessary to lend ETH and other ERC20 tokens out at the Flash Return Rate (FRR). On the borrow side, the application would automatically take loans at the FRR in order to maintain a prescribed level of exposure. This could be useful for market makers looking to manage their inventory risk in an automated fashion.

5. *DutchX Integration and Chainlink Integration*

![](/images/blog/0_BeQe8zJFkZ5S_cd1.png)

Currently there is only one set of smart contracts operating on the Liquidation Layer. This current set of smart contracts rely on Kyber Swap for secure price feeds and liquidity in the event of a margin call. However, it is possible to execute margin calls using Gnosis’ DutchX contract or by integrating a series of Chainlink oracles. The main challenge of executing margin calls is figuring out a way to value the assets inside the margin accounts, driving liquidity to the traders and lenders in the event of a margin call, and creating a sustainable incentive structure for calling in to initiate the margin call. These issues can be addressed using DutchX or Chainlink, but there are of course many ways to approach the problem with these tools.
