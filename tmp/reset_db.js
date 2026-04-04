const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
async function reset() {
  await p.transaction.deleteMany();
  await p.claim.deleteMany();
  await p.event.deleteMany();
  await p.user.updateMany({ data: { walletBalance: 0 } });
  console.log('Database reset for verification.');
}
reset()
  .catch(e => console.error(e))
  .finally(() => p.$disconnect());
