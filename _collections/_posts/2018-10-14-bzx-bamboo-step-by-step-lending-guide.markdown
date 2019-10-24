---
layout: post
title:  "bZx + Bamboo: Step by Step Lending Guide"
date:   2019-10-14 20:12:46 -0700
cover: /images/blog/1_D_7UuJ1PWKYjzaNmNgEnUg.png
canonical: https://medium.com/bzxnetwork/bzx-bamboo-step-by-step-lending-guide-aad9206512cd
---
Bamboo Relay is the first 0x-standard relay, and in fact the first DEX, to ever offer non-custodial peer-to-peer margin lending on the Ethereum blockchain. The debut of their bZx protocol integration comes directly on the heels of their transition to 0x v2.0. Bamboo now offers shorting and leverage for ETH and 60+ additional ERC20 tokens.

Below is a step-by-step guide for lending out tokens on Bamboo.

![](/images/blog/0_g_qm-L2Lf-QOQurk.png)
_The Lending and Borrowing user interface under the Funding table_  

### Connecting Your Wallet

![](/images/blog/0_OAB3VtEz06trMSh5.png)

First select the “Wallet” tab and select your wallet provider. If it’s MetaMask, make sure you are connected to the Ethereum network and enter your password to unlock your MetaMask wallet. If you have trouble getting MetaMask to connect to the main network, toggle between one of the testnets and the mainnet. If using a Ledger, click the Ledger option. *We recommend that you do not use a Ledger connected to MetaMask, because there is a bug preventing ledgers from performing signatures through MetaMask that the Metamask team is currently working to resolve.*

### Initializing Your Funds

Once you have your wallet connected, you’ll see the balances of your tokens.

![](/images/blog/0_5D5EC1_Tey6sQM2y.png)

You must first approve the protocol to execute orders on your behalf. This is accomplished by approving the tokens you will be lending and borrowing. It is recommended to activate WETH, DAI, and any ERC20s you plan on lending.

![](/images/blog/0_89SvZxqso3oiYv4-.png)

If you prefer to use DAI to collect interest, make sure to enable it for funding. It may help to uncheck “hide zero balances” if you want to locate DAI under the balances menu.

![](/images/blog/0_RRvJ1atHLmMF_YBZ.png)

### Wrapping Your ETH

If you are planning to trade using ETH, remember to first wrap your ETH into WETH. For more information on WETH check out weth.io. You can wrap your ETH at the bottom of the Balances page.

![](/images/blog/0_xt_Pu22QYH6UNMYe.png)

Hit Submit and approve the transaction.

### Creating a Loan Order

If you want to earn passive income on your existing tokens, you can create a Lend order using the UI on the left of the funding tab. There are a few fields you should familiarize yourself with.
*Loan Token* — This is the token you are lending out. Input the quantity you would like to lend.
*Interest Token* — This is the token you are paid in. It is recommended you set it to ETH or DAI.
*Daily Interest* — The number of tokens you receive each day as interest.
*Margin Maintenance* — The collateral level at which borrowers will be liquidated. To be covered by the bZx Lender Insurance Fund you must set margin maintenance above 25%
*Initial Margin* — How much collateral the borrower must put up initially. Must be higher than margin maintenance.
*Duration* — How long the borrower can keep the loan open.
*Offer Expiry* — How long until the order can no longer be taken.

In this example I will show you how to lend out 3 ETH for 7 days at a price of 4 DAI/day. The total cost of taking out this loan is 28 DAI which is equal to around $28. At current prices this is approximately $600 worth of Ethereum. The interest rate is 0.66%/day. It is recommended that you first look up the current market interest rates for margin loans at Cryptolend.

![](/images/blog/0_yBPH3e9MVomFjAAU.png)

Simply fill out the form, hit “Place Lend Order” and hit approve when asked to sign the transaction.

![](/images/blog/0_-UvIa8PhsVGuF1IC.png)

Alternatively, you can simply click an existing “Borrow Order” and hit the blue button that says “Fill Matching Order” under the Lending UI.
Our next step-by-step guide will showcase how to borrow, short, and leverage positions on Bamboo.
