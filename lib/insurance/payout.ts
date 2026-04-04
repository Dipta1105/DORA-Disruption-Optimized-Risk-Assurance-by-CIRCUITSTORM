import { prisma } from "../db";

/**
 * Payout Engine - Zero-Touch Automated Credit
 */
export async function processAutomatedPayout(userId: string, amount: number, eventType: string) {
  console.log(`[PAYOUT_ENGINE] Processing payout of ₹${amount} for user ID ${userId}...`);

  // 1. Log the Claim in the DB (Audit Trail)
  const eventId = `EVT_${Date.now()}`;
  const claim = await prisma.claim.create({
    data: {
      userId,
      eventId,
      eventType: eventType.replace("_", " "),
      status: "auto_approved",
      lossAmount: amount, // For parametric, loss is defined by the trigger amount
      payoutAmount: amount,
      rejectionReason: "Parametric AI Approved"
    }
  });

  // 2. Create the Transaction record
  const transaction = await prisma.transaction.create({
    data: {
      userId,
      type: "payout",
      amount,
      title: `Protection: ${eventType.replace("_", " ")}`,
      status: "completed", // In a real UPI scenario, this might start as "pending"
    }
  });

  // 3. Update User Wallet Balance (Instant Credit)
  await prisma.user.update({
    where: { id: userId },
    data: { walletBalance: { increment: amount } }
  });

  // 4. Simulate UPI Transfer Hook
  // razorpay.payout({ account: user.upiId, amount: amount * 100, mode: "UPI" });
  console.log(`[PAYOUT_ENGINE] Simulated UPI Transfer to User ${userId}: ₹${amount} - SUCCESS`);

  return {
    success: true,
    payoutId: transaction.id,
    amount,
    claimId: claim.id
  };
}
