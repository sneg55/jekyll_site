---
layout: page
permalink: itokens
metadescription: "iTokens, such as iDAI or iUSDC, are interest accumulating tokens that continuously go up in value as you hold them. They represent a share in a lending pool that grows in size as borrowers pay interest into them."
featured-image: /images/ogp.png
title: iTokens - interest-bearing ERC-20 assets. What is iTokens?
h1title: What is iTokens?
---
iTokens, such as iDAI or iUSDC, are interest accumulating tokens that continuously go up in value as you hold them. They represent a share in a lending pool that grows in size as borrowers pay interest into them. iTokens can be traded, used as collateral, composed by developers into structured products, or sent to cold storage for safety.

![](/images/itokens.png)

iTokens constantly accrues value and increases in price because its underlying assets are loaned out to borrowers. Two notable features of iTokens is that it compounds each second (as opposed to per block) and that its exchange rate is capable of falling if the underlying pool suffers a loss. This makes it well suited for risk management derivatives to be built on top.

## Minting an iToken
When the iToken contract for an asset is first deployed, it creates on-chain base protocol order objects corresponding to each level of leverage. The initial margin of the order object defines the level of leverage, and each order object has margin maintenance set at 15%. The length of the loan in the order object is defined as 28 days. When a lender wants to create a loan, they invoke the function mintWithEther when loaning ETH, or if loaning an ERC20, approve a token allowance and invoke the function mint.

Anyone can borrow directly against the iToken to execute a typical base protocol loan with a fixed interest rate. Alternatively, loans can be taken by calling the borrowTokenFromEscrow function through a pToken contract, which will then mint pTokens using the loan. Calling either borrowTokenFromEscrow or borrowToken causes the iToken liquidity to be added to the appropriate order object corresponding to the level of leverage specified by the borrower. The interest rates on loans initiated by the pToken contracts are dynamic, reacting in real-time to the supply and demand of lending and borrowing as described in the section below titled Interest Determination. When the loan is taken by a borrower, the 28 days begins. Once a loan has been initiated, each subsequent borrower at that level of leverage partially fills the loan order but does not refresh the expiration date.

## Closing an iToken
Lenders are able to divest themselves of an iToken position in two ways: burning the token by sending it to the iToken contract or selling it on the open market. When an iToken holder burns the token by sending it to the iToken contract, the funds they deposited are returned to their address immediately, assuming doing so does not bring loan utilization over 100%. In the case that burning the iToken brings loan utilization over 100%, as much of the funds that can be returned are returned. When a redemption does not result in a full refund, the user is placed in a queue to have the remainder of their funds returned. When the loans taken out by pToken contracts reach the end of the loan duration, they are then used to fully remunerate the first lender in the queue. Any interaction with the iToken contract including minting, burning, or borrowing acts as a trigger for the funds to be returned to the next lender in the queue. If a queue forms, lenders can call the redeem function to claim any existing liquidity within the iToken contract and place themselves at the front of the queue. Lenders continue to earn interest on any funds not returned to them, even if all their iTokens are burnt.

The redemption mechanics outlined above primarily govern edge cases. It is most likely that loan utilization will not stay near 100% for any substantial period of time. This is because of the interest rate mechanics at work for lending and borrowing. When loan utilization is near 100%, the interest rate will be high, attracting loan interest. This will create liquidity for lenders wanting to exit their iToken positions.
