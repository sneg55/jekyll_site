---
layout: post
title:  "Augur v2.0: Native Margin Trading Powered by bZx"
date:   2019-06-19 20:12:46 -0700
cover: /images/blog/1_Ihukc5zEV_A-E_VIw2xtDA.png
canonical: https://medium.com/bzxnetwork/augur-v2-0-native-margin-trading-powered-by-bzx-67718b38af0d
author: Kistner
metadescription: "The bZx smart contracts hook directly into Augur, allowing Augur to act as a price feed and source of both trading and margin call liquidity."
intro: "The bZx smart contracts hook directly into Augur, allowing Augur to act as a price feed and source of both trading and margin call liquidity."
---
Read the official announcement from Augur [here](https://www.augur.net/blog/margin-lending/).

## Why does Augur need margin?

Augur on its own can create markets that act as leveraged or short instruments. A user can just as easily create a scalar market that predicts the price of a leveraged financial instrument as the underlying instrument itself. It might seem that this is the end of the story, that Augur delivers leverage and short exposure effectively, and no further instruments are needed. But that’s not the case. Margin is important because it allows Augur to unify liquidity within single markets, allowing those markets to build the network effects required to drive active participation.
The optimal situation for Augur is for users to create a single market that tracks the price of an asset, say AAPL stock, and for all trading activities to take place within that market by allowing participants to lend and borrow their market shares. If a new Augur market needs to be created for users that want a 3x leveraged AAPL position, this means that liquidity will become fragmented. Instead, it is better than a participant simply borrow a unit of account and purchase more of the Augur market tokens. To put it simply, margin prevents Augur liquidity from becoming fragmented.

## How does it work?

Augur can be thought of as just another on-chain DEX. It is an on-chain orderbook with on-chain liquidity. The bZx smart contracts hook directly into Augur, allowing Augur to act as a price feed and source of both trading and margin call liquidity. Traders borrow units of account and Augur market shares from other market participants and trade them from inside the bZx escrow contract. If a trader falls below margin maintenance, they are margin called. Margin calls are decentralized and function just the same as any other bZx margin call; they are permissionless and incentivized, compensated in proportion to network congestion and the cost of the transaction executing the margin call.
bZx created a generic widget that can be dropped into any site to offer margin trading on Augur and Kyber. For Augur, the widget automatically parses the current market.

## How does it look?
![](/images/blog/1_prtgTAPegLl9Uwd8dW8HdA.png)

## Security Considerations

### Market Restrictions: Market Types, Liquidity, and Malicious Markets

Margin trading on Augur only works properly with scalar markets. If a market is categorical, margin trading doesn’t make sense. If a market is binary, it can collapse instantly, making margin calls impossible to institute. Markets also need sufficient liquidity or the funds of lenders will be in peril. This means that at the time of crafting the bZx order object, a whitelist of tradable markets must be included in the OracleData parameter. These markets must be scalar and meet a threshold of liquidity. From a user experience perspective, it is likely that the platform will curate a list of safe markets and build it into the order object for lenders.

### Mitigating Sandwich Attacks

The current implementation of bZx margin lending for Augur does not allow contracts to act as margin callers. That is to say that the contracts require(tx.origin == msg.sender) . This isn’t a sustainable design pattern, especially as the distinction between EOAs and contracts is removed in future versions of Ethereum. However, there are ways that tx-level reentrancy locks can be implemented in the future.

### Demo it now

![](/images/blog/1_sHC5UE-2RRrAI6EPb-hz7Q.png)

You can play with a prototype [here](https://portal.bzx.network/widget/?id=0x448d1d8280844513c38b2b73bde8a539d0022954) on the Rinkeby testnet. To change Augur markets, change id= in the URL to the Augur market you wish to trade on. We’ll be releasing the widget with the new look and feel closer to Augur launch. For now, the prototype is fully functional and connected to the Augur integration on the Rinkeby testnet.
