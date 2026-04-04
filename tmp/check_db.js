const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const events = await prisma.event.findMany();
  console.log('--- Events ---');
  console.log(events);

  const claims = await prisma.claim.findMany();
  console.log('--- Claims ---');
  console.log(claims);

  const transactions = await prisma.transaction.findMany();
  console.log('--- Transactions ---');
  console.log(transactions);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
