const { processParametricEvent } = require('../lib/insurance/trigger');
const { prisma } = require('../lib/db');

async function simulate() {
  const event = {
    type: 'HEAVY_RAIN',
    location: 'Mumbai_Andheri',
    severityValue: 45,
    timestamp: new Date(),
    zoneRadius: 5,
    zoneLat: 19.1136,
    zoneLon: 72.8697
  };

  try {
    const result = await processParametricEvent(event);
    console.log('Simulation Result:', JSON.stringify(result, null, 2));
  } catch (e) {
    console.error('Simulation Error:', e);
  } finally {
    await prisma.$disconnect();
  }
}

simulate();
