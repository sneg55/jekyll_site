---
layout: post
title:  "Introducing Torque: Borrowing Made Simple"
date:   2019-08-28 20:12:46 -0700
cover: /images/blog/1_3htpTXj0AQRipFXyk6vCsA.png
canonical: https://medium.com/bzxnetwork/introducing-torque-borrowing-made-simple-8eb494925d16
author: Kistner
---
We are excited to introduce [Torque](http://torque.loans/), the first borrowing platform with indefinite-term loans and fixed interest rates. Torque is uniquely both an App and a dApp. Torque works with any web3 wallet like Metamask, Dapper, Nifty, & co., but it also works with every other type of wallet. This is enabled by Torque’s first-of-its-kind ENS loan system which allows users to borrow assets by simply sending collateral to a human-readable ENS domain from any wallet. Best of all, it does this without requiring any accounts or charging any fees.

## Why Use Torque?

![](/images/blog/0_PTiBcf3nMBPVQala.png)

## How does it work?

### Opening a Loan

*Simple*

A user interacts with the Torque interface to specify a loan amount and accepts the transaction using their web3 wallet. Alternatively, the user sends the collateral to the appropriate ENS address, e.g., dai.tokenloan.eth. In this example the user receives a DAI loan collateralized in ETH.

*Technical*

Torque loans are loans borrowed from the Fulcrum iToken lending pools. When a loan is initiated, this triggers the targeted iToken contract to fund a base protocol order object with a loan that has the expiration parameter set to 0. This initiates an overcollateralized loan where the borrowed token is sent to the borrower’s wallet. However, the tokens for interest come from borrowing slightly more than the requested loan amount, and borrowers are expected to pay interest on them. By default three months of interest are escrowed and held inside the protocol, denominated in the borrowed token. At each block, the iToken contracts lending the interest token gain a pro-rata claim over the escrowed interest. This is accounted for in seconds, preventing the implementation from being sensitive to changes in average block time.
Users can deposit ETH or any ERC20 supported by Fulcrum as collateral against a loan. Each collateral type has its own collateral ratio, reflected in the initial margin and margin maintenance parameters. Because many supported ERC20s have poor liquidity, especially on DEXs, ERC20s used as collateral will have an initial margin of 250% and a margin maintenance of 200%. On the other hand, ETH and stablecoins will have an initial margin of 150% and a margin maintenance of 115%. This allows collateral types with low liquidity to be used while still protecting lenders from the volatility of a borrower’s position. While ideally liquidity from sources beyond DEXs should be leveraged for liquidations, doing so compromises the decentralization of the protocol and its ability to run independently of the founders. There are future developments that can allow liquidity from all sources to be used for margin calls without compromising decentralization that we hope to see implemented in the coming months.

### Loan Maintenance

*Simple*

Loans will run indefinitely on their own until the collateralization of the loan goes below margin maintenance, requiring a margin call. It is advisable to either liquidate a small amount of collateral or deposit additional borrowed tokens to extend the life of the loan once it has been open for three months. However, this is not required, and the cost of failing to do so amounts to only a few dollars a year.

*Technical*

Borrowers can top up their interest deposit at any time, extending the life of their loan. Torque has a decentralized, incentivized system for users to monitor and extend the life of loans that are close to running out of interest. This system uses the same basic infrastructure as the margin calling system; however, instead of liquidating the position and returning it to the lender, it liquidates a portion of the collateral to increase the amount of interest escrowed. Using this system, a borrower does not have to monitor their loan or check-in every three months. It is slightly cheaper in terms of gas to simply deposit the amount of interest corresponding to the loan length, but the cost of not doing so is negligible. It should also be noted that interest payments are pro-rata — any excess interest not owed to lenders at the end of the loan term is returned to borrowers. Loans can be closed early by the borrower at any time.

### Closing a Loan

To close a loan, simply send back the borrowed amount plus interest to the Torque smart contract address that issued the loan, if using the web3 interface. This will release borrowed funds from escrow back to the originating wallet as well as refund unpaid interest. Torque allows you to do a partial repayment at anytime and reclaim a portion of the escrowed collateral. If using the ENS interface, during initiation of the loan an ENS subdomain is created representing the specific wallet address opening the loan e.g., [address].dai.tokenloans.eth, and repayments must be first sent there before sending a 0 ETH transaction to dai.tokenloans.eth to execute loan closure. This makes ENS loans initially more gas intensive than loans opened using the web3 interface.

### Margin Calls

Torque uses the same bZx margin calling system as Fulcrum. An incentivized network of bounty hunters monitors positions and calls liquidate if a position is under margin maintenance. Since borrowed funds have been withdrawn from the borrower’s wallet, partial liquidations are not possible. One feature that is favorable to lenders is that there is no % based penalty for being margin called, unlike other prominent lending platforms. As with Fulcrum, if a liquidation would incur slippage greater than 3% on Kyber, the liquidation transaction reverts. This forces margin callers to break large liquidations into smaller chunks, allowing liquidity to flow into Kyber from centralized exchanges.

### Interest Rates

Loans are sourced from Fulcrum’s iToken lending pools. These lending pools have algorithmically determined interest rates based on supply and demand. Torque loans function slightly differently from Fulcrum loans because of their indefinite term. Interest rates for fixed rate loans have a minimum interest rate corresponding to 80% utilization of the lending pool. When the lending pool goes above this level of utilization, the fixed interest rate offered increases by a gradual amount while utilization is still below 90%. Above 90%, the rate scales dramatically until utilization adjusts to a lower level.

It is also possible to take out staggered floating rate loans. These loans have interest rates which correspond to the borrowing rates on Fulcrum. The rates are fixed for 28 days, upon which they are automatically refinanced at the latest prevailing borrowing rate.

## Limitations to the Fixed Rate Model

Fixed rate loans pose unavoidable difficulties to algorithmic lending pool models, and the solution we have presented is certainly not final. Until an audited and secure interest rate swap protocol is available (e.g. RateLock), we believe the proposed model to be the most effective. We have taken steps to mitigate the largest issues.

### Lender Liquidity

If interest rates are fixed, how are lenders able to withdraw their lent funds? While the Fulcrum iToken lending pool has sufficient liquidity (not fully utilized), the lender can redeem their lent assets at any time by burning their iToken in the [Fulcrum portal](https://fulcrum.trade). Also, iTokens can be sold on secondary markets (DiversiFi, Kyber, Uniswap, etc.) as an alternative, even when there is insufficient liquidity for a withdrawal.

### Robustness to Market Regimes

One of the weaknesses of pooled models in general is the presence of large spreads between borrowing rates and lending rates. For capital to be used most efficiently, the interest rate model parameters must be set to target a high utilization rate. This must also be offset by the consideration to preserve a buffer of liquidity for lenders to withdraw their funds. If indefinite fixed rate loans were issued in a similar fashion as Fulcrum, offering low rates at low levels of loan pool utilization, the spread would become exaggerated at the targeted utilization rate. In order for the protocol to be competitive, it requires lending rates higher than other platforms while simultaneously offering borrowing rates lower than other platforms. This means that the fixed rate must start at the targeted utilization rate and rise from there.

We have set a utilization rate target of 80% to balance the considerations of lender liquidity and interest rate spreads. The market regime constantly shifts, making the equilibrium utilization rate higher and lower. Our interest rate model is robust against an increase in the prevailing market interest rate because of the sharp increase in rates once the reserves are above 90% utilization. This comes at the expense of liquidity for lenders while also tightening spreads. This model is weakest in the case where the prevailing interest rate decreases, as the offered rates will be above the market clearing price, making borrowing unattractive. This may cause borrowers to leave to refinance their loans, giving an opportunity to tune the model downwards to a more attractive rate.

As iterated above, the most elegant way to offer fixed interest rate loans is through interest rate swaps. As the ecosystem matures and this option becomes available, we anticipate that this will be the way that fixed rates will be provided to borrowers.

## Conclusion

[Torque](http://torque.loans/) presents users the easiest borrowing experience in the industry, requiring only a single transaction, while providing all the power and flexibility of existing decentralized borrowing platforms. Since it draws from Fulcrum’s liquidity pools, Torque will have deep liquidity starting from day one.

We believe that ENS loans represent a major advancement in user experience, both because it eliminates reliance on web3 wallets and because it cuts the number of transactions needed to secure a DAI loan with ETH down to just one. If you are a developer, Torque also provides a case study in the power of protocols, as Torque did not require substantial smart contract development — the tools were already there. This is why we are able to ship Torque only three months after launching Fulcrum.
