---
layout: post
title:  "Governance is Powerful: Capturing Value with BZRX"
date:   2019-02-23 20:12:46 -0700
cover: /images/blog/1_EgMr_tHvlI5911nWyBKGCQ.png
canonical: https://medium.com/bzxnetwork/governance-is-powerful-capturing-value-with-bzrx-adb35341975c
author: Kistner
metadescription: "The BZRX token has been used until now as a medium of exchange, with users paying relay fees denominated in BZRX."
intro: "The BZRX token has been used until now as a medium of exchange, with users paying relay fees denominated in BZRX."
---
The BZRX token has been used until now as a medium of exchange, with users paying relay fees denominated in BZRX. Much like the ZRX token, the governance aspect of BZRX has been left vague. The value of governance can appear nebulous when it is unclear what governance might entail. We hope that this first governance proposal for the bZx protocol drives excitement on the power of governance and how it can be used to capture value without extracting rent.

## The Insurance Fund

The protocol collects 10% of all interest earned by lenders and aggregates it into an insurance fund. This fund is designed to pay out in the event that a lender loses money from a borrower that was not liquidated quickly enough. It is likely that the size of the fund will need to be calibrated dynamically in order to collect only as much interest as is necessary to support the maximum volume of lending on the protocol. In light of this, we propose that holders of BZRX vote on the percentage of interest charged as a fee.

In order to align the holders of BZRX with the interests of the fund and the protocol, we propose that BZRX holders vote on whether to make the BZRX token redeemable for a portion of the insurance fund assets. We envision this working best when a given percentage of the BZRX token supply is redeemable for an equal percentage of the insurance fund token supply. This essentially tokenizes the insurance fund using BZRX. This incentivizes BZRX holders to calibrate the insurance fund fee at the rate that grows the fund most quickly. If holders vote for a fund fee that is too high, it will hinder adoption of the protocol, causing the value of the token to fall.

The rate at which the insurance fund is tapped is closely related to the loan parameters that are covered by the fund. Currently the insurance fund covers loans that have margin maintenance above 15%. As scaling improves on the Ethereum base layer, the protocol will be able to support higher levels of leverage without endangering the insurance fund. It is also likely that the current liquidation latency is fast enough to support higher levels of leverage. Increasing the amount of leverage covered by the insurance fund will likely attract more lenders and borrowers, thereby making the fund grow faster. However, allowing levels of leverage that are too high can jeopardize the fund. We propose that BZRX token holders also vote on the loan parameters covered by the insurance fund.

## Asset Backing the BZRX Token

The insurance fund does not suffer as a result of being able to exchange its contents for BZRX. First, the insurance fund works best when it is diversified. The insurance fund assets, if they are needed, will be liquidated in one massive market sell order. Since slippage gets worse as the size of the market sell order increases, it is optimal to collateralize the insurance fund in multiple highly liquid assets. Allowing BZRX to be exchanged for insurance fund assets frictionlessly diversifies the contents of the insurance fund, making it worth more in the event of a large market sell. Since the BZRX tokens have value themselves, with the size of the insurance fund being a lower bound, allowing holders to redeem their tokens for the assets inside the fund does not reduce the value of the fund. We should expect the net BZRX collateralization of the insurance fund to be relatively small, as it would rarely make sense to redeem the token rather than sell it on the open market. This use of the BZRX token allows for token holders to capture value flowing through the protocol without extracting any rent.

## Redeeming the Fee Token Model

There are important consequences to allowing the insurance fund to be redeemed using BZRX tokens. The BZRX token is above all a governance token. To incentivize a proportional distribution among representative shareholders, the protocol mandates that relay fees are denominated in the BZRX token. However, this poses the problem of whether relays would want to hold the token once it has been delivered to them in the form of a fee. The 0x protocol has had issues with relays tending not to charge relay fees. Moreover, once relays have charged fees it is unclear that the relays have kept the assets denominated in ZRX for any significant amount of time. This is because it isn’t clear that the value of the governance exceeds the risks of being exposed to the volatility of the ZRX token.

Allowing BZRX to be redeemed for a portion of the insurance fund changes the calculus of the relays significantly. By holding BZRX collected as fees, relays are able to collect a percentage of the interest flowing through the protocol proportional to their contribution to the volume of lending activity on the protocol. In centralized margin lending approaches, collecting a percentage of the interest as fees has been the major source of margin lending revenue. This gives relays skin in the game and a real reason to hold onto BZRX tokens that they’ve received as transaction fees, reinforcing the ability of the relays to serve as a velocity sink for the token and a mechanism for driving a representative token distribution.

## Restructuring the Insurance Fund

Currently, interest tokens are converted to ETH via KyberSwap if their value is above the minimum trade size on Kyber. We are moving away from this model to reduce the number of swaps required. Each time interest is collected, it is kept in its native denomination. The insurance fund will collect an amount of each asset representative of its individual level of lending activity in this way. When the insurance fund pays out, it will pay out in the native denomination. This minimizes the number of Kyber swaps we have to perform. When the insurance fund no longer can pay out in the domination of the owed token, payouts will be denominated in ETH. If the fund runs out of ETH/WETH, a random asset is liquidated until all assets have been liquidated. We swap assets at random because it is computationally infeasible to sort the assets by level of liquidity.

This new insurance fund structure has interesting consequences. Principally, it serves as a universal velocity sink. Any token that is used to pay interest to lenders is sequestered in the insurance fund, possibly indefinitely. The circulating token supply of all tokens actively traded on the protocol diminishes with time, adding deflationary pressure. It should be noted that there are other universal velocity sinks that already exist in the ecosystem. For example Compound’s sponsor equity has a similar function. When analyzing token economic models, care should be taken to look beyond the internals, to the flow of funds throughout the entire ecosystem.

## Closing

These are proposals for what is possible when governance is implemented in the protocol. We intend to take steps towards formalizing the governance process and forming a DAO using either Aragon or DaoStack once the token distribution is complete. We will not undertake these proposals unilaterally; the proposals will be presented and voted on using the same standardized process that anyone can utilize.
