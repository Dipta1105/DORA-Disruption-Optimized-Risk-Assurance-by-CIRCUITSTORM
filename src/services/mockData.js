export const dashboardStats = [
  { label: 'Total Risk Exposure', value: '$2.4M', change: '+12.5%', type: 'increase' },
  { label: 'Pending Claims', value: '142', change: '-4.2%', type: 'decrease' },
  { label: 'Policy Renewal Rate', value: '94.2%', change: '+2.1%', type: 'increase' },
  { label: 'Disruption Alerts', value: '3', change: 'Stable', type: 'neutral' },
];

export const riskTrendData = [
  { month: 'Jan', exposure: 1200, claims: 450 },
  { month: 'Feb', exposure: 1500, claims: 520 },
  { month: 'Mar', exposure: 1100, claims: 380 },
  { month: 'Apr', exposure: 1800, claims: 610 },
  { month: 'May', exposure: 2400, claims: 480 },
  { month: 'Jun', exposure: 2100, claims: 530 },
];

export const disruptionEvents = [
  {
    id: 1,
    title: 'Supply Chain Delay - SE Asia',
    severity: 'High',
    impact: '$420,000',
    date: '2026-04-02',
    status: 'In Review',
  },
  {
    id: 2,
    title: 'Cyber Incident - Region B',
    severity: 'Medium',
    impact: '$85,000',
    date: '2026-04-03',
    status: 'Resolved',
  },
  {
    id: 3,
    title: 'Natural Disaster - Coastal Zone',
    severity: 'Extreme',
    impact: '$1,200,000',
    date: '2026-04-01',
    status: 'Action Required',
  },
];

export const mockPolicies = [
  { id: 'POL-001', client: 'Acme Corp', type: 'Property', premium: '$12k', renewal: '2026-12-01' },
  { id: 'POL-002', client: 'Globex Inc', type: 'Liability', premium: '$8.5k', renewal: '2026-10-15' },
  { id: 'POL-003', client: 'Soylent Co', type: 'Cyber', premium: '$15k', renewal: '2026-11-20' },
];
