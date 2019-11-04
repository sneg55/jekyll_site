---
layout: post
title:  "Is The New Governance Proposal Pre-Programmed to Fail? A Reply to Tech Nomad Notes"
date:   2019-03-10 20:12:46 -0700
cover: /images/blog/1_LzCwZzlEK0VBbhaswG2VXw (1).png
canonical: https://medium.com/bzxnetwork/is-the-new-governance-proposal-pre-programmed-to-fail-a-reply-to-tech-nomad-notes-48608cbfc734
author: Kistner
metadescription: "We will list a series of core criticisms and answer them in turn. Afterwards we will explain the reformulation of the redemption mechanic."
intro: "We will list a series of core criticisms and answer them in turn. Afterwards we will explain the reformulation of the redemption mechanic."

---
In reply to the article [Governance Is Powerful: Capturing Value With BZRX](https://medium.com/bzxnetwork/governance-is-powerful-capturing-value-with-bzrx-adb35341975c), Tech Nomad Notes published an [investigation](https://www.technomads.wtf/blog/token-underground-0x1-the-bzrx-token-model-a-smart-move-or-a-pre-programmed-fail) and critique of the proposed extension to the BZRX token model. We would like to start by thanking the authors, Vasily Sumanov and Olya Green, for taking the time to engage with our work. In doing so, they uncovered an important weakness in the proposed token redemption mechanic. In this article we aim to address the core arguments made against the proposed model and also present our reformulation of the token redemption mechanic in light of the valid criticisms brought forth.

We will list a series of core criticisms and answer them in turn. Afterwards we will explain the reformulation of the redemption mechanic.

## 1. Liquidations Are Not Secure For Lenders.
- Liquidations are happening in a low liquidity environment.
- Slippage will result in lenders failing to reclaim their principal.
- Unpaid loans are likely to be common.
- The insurance fund acts as a crutch and will experience significant volatility of its collateralization.

### Response

There are two main objections to these points.
The first is that not all loan parameters are covered by the insurance fund. It is imperative that margin maintenance be set high enough that loans can comfortably be liquidated. One of the most critical functions of governing the fund is insuring that this parameter is set sufficiently high so that the fund grows upwards monotonically while setting it low enough that the protocol can capture as much of the markets share of traders demanding high leverage as is possible. If this parameter is set properly, slippage should be accounted for and unpaid loans will be extremely uncommon, a black swan event. The insurance fund is intended to protect against extreme right tail events not the volatility of typical trading operations.

The second objection to this concern is more esoteric and has not been discussed publicly to any large extent. While reserves on Kyber are fairly thin, they’re also not static. Margin liquidations present a market making opportunity. It is both possible and profitable to monitor the mempool for margin liquidations and front-run the reserves. We anticipate that many market makers will compete for this volume, making the process efficient. Major market makers have expressed interest in profiting from this opportunity, so this dynamic liquidity is more than theoretical.

## 2. The BZRX Token Has No Intrinsic Value

It is critical for BZRX holders to receive dividends from the fund
Without dividends the tokens cannot be valued using traditional Discounted Cash Flow (DCF) modeling

### Response

We believe dividend payments for BZRX holders does not represent an optimal approach for several reasons. Token dividends remove the threat of poor governance harming the value accrued to the token holders, which reduces the ability of the token to align incentives. Moreover, by receiving dividends from the fund, token holders are extracting value from the system. Part of the elegance of the proposed extension is that the system retains all of its value while at the same time allowing token holders to capture it. Lastly, despite the fact that the token does not pay dividends, it does not mean that traditional DCF modeling does not apply to its valuation. Regardless of whether or not you can extract a portion of the cash flow, it still represents a claim to a growing underlying pool of assets.

## 3. The Redemption Procedure is Broken

The redemption procedure results in a redemption partially composed of BZRX when BZRX already exists within the fund.
This forces sales of BZRX on the open market.
This may cause a redemption death spiral for the token.

### Response

Since the value of the BZRX token is equal to the redemption value plus the future discounted cash flow, in most circumstances the market value of the token will exceed the redemption value. This means it would be economically irrational to redeem the token except in extremely rare cases where the expected DCF turns sharply negative, such as in the event of a massive liquidation.

It was our vision that, should an individual have attempted to redeem BZRX while the fund was partially collateralized in BZRX, they would iteratively redeem each subsequent batch until they were primarily holding non-BZRX collateral from the fund. This would prevent the need for BZRX to be sold on the open market. The expectation was that this process would asymptotically converge to the desired value, such that the fund could be fully redeemed even if it was already partially collateralized with BZRX. It was discovered that this was not the case and that the proposed redemption mechanics were not exhibiting the desired behavior.

After considering the problem carefully, we have revised our proposal for the redemption mechanic so that it now exhibits the behavior that was previously expected. The modification is disarmingly simple. Instead of any given percentage of the total BZRX supply being redeemable for an equal percentage of the fund, a given percentage of the circulating BZRX supply is redeemable for an equal percentage of the fund, disregarding the BZRX within it. To give an example: if there exists a total supply of 2 BZRX tokens, and the fund is collateralized with 1 BZRX and 1 ETH, then using the remaining 1 BZRX to redeem the collateral within the fund will yield 1 ETH, leaving the fund with 2 BZRX.

## Conclusion

We believe that the core concerns regarding the token model have been addressed in a compelling manner. Indeed, after corresponding extensively, discussing and addressing each core criticism with Vasily Sumanov, it has been agreed by all parties that the concerns raised have been satisfactorily resolved. We would like to finish by once again thanking Vasily Sumanov and Olya Green for taking the time to consider the potential issues with the token model and protocol. It is because of their contributions that the redemption mechanic has been refined and improved. We could not be more grateful.
