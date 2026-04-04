const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      name: "Akshay Delivery Hero",
      phone: "9876543210",
      platform: "Zepto",
      upiId: "akshay@upi",
      geoCluster: "Mumbai_Andheri",
      walletBalance: 0
    }
  });

  await prisma.policy.create({
    data: {
      userId: user.id,
      planType: "Pro",
      weeklyPremiumCap: 50,
      coveragePercentage: 1.0,
      dailyPayoutCap: 400,
      weeklyPayoutLimit: 1200,
      status: "active"
    }
  });

  console.log("Seeding complete. User ID:", user.id);
}

seed()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
