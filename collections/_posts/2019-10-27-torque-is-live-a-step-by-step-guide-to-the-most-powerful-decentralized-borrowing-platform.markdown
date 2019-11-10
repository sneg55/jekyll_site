---
layout: post
title:  "Torque Is Live: A Step-By-Step Guide"
date:   2019-10-27 20:12:46 -0700
cover: /images/blog/1_3htpTXj0AQRipFXyk6vCsA.png
canonical: https://medium.com/bzxnetwork/torque-is-live-a-step-by-step-guide-to-the-most-powerful-decentralized-borrowing-platform-on-21139dc6abce
author: Kistner
metadescription: "Torque is a non-custodial platform for fixed rate, indefinite-term cryptocurrency loans."
intro: "Torque is a non-custodial platform for fixed rate, indefinite-term cryptocurrency loans."
---
[Torque](http://torque.loans/) is a non-custodial platform for fixed rate, indefinite-term cryptocurrency loans. It allows you to borrow against your current assets in as little as a single transaction. Torque’s unique architecture allows for the lowest liquidation prices while avoiding the significant margin call penalties of existing borrowing platforms. Torque promises the sort of streamlined, simple user experience required for mass adoption.

Get started with [Torque](http://torque.loans/) now.

### Watch Torque In Action
{% youtube "https://www.youtube.com/watch?v=X2RO3iJDIgs" %}
_A Video Demonstration of Using an External Wallet To Borrow DAI_

![](/images/blog/0_uTU3y9yP2ekeAgcV.png)

## Step-by-Step Guide
## Browser Wallets
Using browser wallets such as Metamask, Dapper, Nifty, & others, you can easily take out loans using your ETH or existing ERC20 holdings as collateral. You can also use wallets such as Formatic, Portis, and Squarelink.

![](/images/blog/0_JOaRzxwBV__Mhirt.png)

### Step 1
Select the asset you want to borrow.
![](/images/blog/1_qGvOEd11FkXP4jqE0-5z_g.png)

### Step 2
Enter the quantity of the asset you want to borrow.
![](/images/blog/0_sUd__oRdZWlAG2ns.png)

### Optional: Step 3
Select your collateral.
![](/images/blog/0_jin2dN5rGWmm1s07 (2).png)

### Step 4
Hit Submit and accept the transaction.
![](/images/blog/0_rT1wJOy7TAWuXulE.png)

That’s it!

## External Wallets
You can use any external wallet. Examples include MyCrypto and MyEtherWallet.
![](/images/blog/0_7wJsEpAIWSHRuFg7.png)

### Step 1
Select the asset you want to borrow.
![](/images/blog/1_llS3znDEnKorisZ6SDxaOw.png)

### Step 2
Enter the amount you want to borrow.
![](/images/blog/0_tF6x1SNpUMZejLa5.png)

### Step 3
Enter the address (e.g., dai.tokenloan.eth) and the quantity of ETH indicating on the form.
![](/images/blog/0_3UzZY0615VjR6aFC.png)

### Step 4 (Optional)
It can be a good idea to select the advanced options and set the gas limit to a high quantity like 2,500,000 to make sure the transaction doesn’t run out of gas.
![](/images/blog/0_3STE1cw0JRIt8f3R.png)

### Step 5
Submit the transaction!

## Parameter Changes

We’ve thought long and hard about how to best serve borrowers while also protecting lenders from defaults. We’ve slightly modified some of the initial margin and margin maintenance parameters of borrowing.
The following are the new initial margin and margin maintenance numbers:

![](/images/blog/1_p73UIGcny6GcmsmMWhur8A.png)

## The Future of Torque

Currently Torque allows for loans to be indefinite¹ term and at a fixed rate. It can be difficult for a system to sustain both these features at the same time, and we believe that it is possible that we may need to seek trade-offs around this if market rates were to change dramatically. We have implemented a system where if there becomes a lack of lending liquidity, and lenders seek to exit the pool, a queue forms, allowing the first lenders to enter the queue to exit as new lending liquidity enters.

It has not yet been the case that a queue has formed to exit the lending pool.

¹ _However, if one were to form, this would initiate a process causing the borrower paying the lowest interest rate to transition their loan from indefinite term to three months. If at some point lending liquidity enters, this process reverses, allowing the loan to revert back to its indefinite term form._

One of the upcoming features of Torque we’re excited about is the integration of 0x v3.0. This newest version of 0x allows for the creation of decentralized limit orders, which can be automatically implemented for borrowers to further protect them from margin calls. In addition to not receiving any penalties on margin calls, borrowers can avoid slippage as well.
