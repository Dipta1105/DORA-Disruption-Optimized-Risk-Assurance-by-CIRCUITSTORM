import { baseService } from './baseService';

export const adminService = {
  getDashboardStats: async () => {
    // Mock simulation of API response
    return {
      activeUsers: { value: '12,842', change: '+14.2%', type: 'increase' },
      claimsToday: { value: '142', change: '+8.1%', type: 'increase' },
      claimsValueToday: { value: '$42,900', change: '+12.5%', type: 'increase' },
      lossRatio: { value: '64.2%', change: '-2.1%', type: 'decrease' },
      fraudFlags: { value: '12', change: '+2', type: 'increase' },
      premiumCollected: { value: '$1.2M', change: '+5.4%', type: 'increase' },
      avgPayoutPerClaim: { value: '$302', change: '-1.4%', type: 'decrease' },
      activeWeatherEvents: { value: '3', change: 'Stable', type: 'neutral' },
    };
  },

  getPremiumVsPayoutData: async () => {
    return [
      { day: 'Mon', premium: 12000, payout: 8000 },
      { day: 'Tue', premium: 15000, payout: 7500 },
      { day: 'Wed', premium: 11000, payout: 9000 },
      { day: 'Thu', premium: 18000, payout: 11000 },
      { day: 'Fri', premium: 24000, payout: 13000 },
      { day: 'Sat', premium: 21000, payout: 10000 },
      { day: 'Sun', premium: 19000, payout: 9500 },
    ];
  },

  getWeatherEvents: async () => {
    return [
      { id: 'W-001', city: 'Mumbai', zone: 'North-West', type: 'Heavy Rain', severity: 'High', users: 1420, exposure: '$42,000', status: 'Active' },
      { id: 'W-002', city: 'Bangalore', zone: 'East', type: 'Thunderstorm', severity: 'Medium', users: 850, exposure: '$12,500', status: 'Monitoring' },
      { id: 'W-003', city: 'Delhi', zone: 'South', type: 'Heat Wave', severity: 'Extreme', users: 3200, exposure: '$94,000', status: 'Active' },
    ];
  },

  getRecentClaims: async () => {
    return [
      { id: 'CLM-9421', type: 'Rain Delay', city: 'Mumbai', amount: '$42.50', status: 'Pending Review', timestamp: '10m ago' },
      { id: 'CLM-9420', type: 'Flash Flood', city: 'Delhi', amount: '$110.00', status: 'Auto-Approved', timestamp: '24m ago' },
      { id: 'CLM-9419', type: 'Traffic Gridlock', city: 'Bangalore', amount: '$15.20', status: 'Flagged', timestamp: '1h ago' },
    ];
  },

  getHighRiskZones: async () => {
    return [
      { city: 'Mumbai', zone: 'Dharavi-Andheri Corridor', score: 92, status: 'Critical' },
      { city: 'Bangalore', zone: 'Outer Ring Road (North)', score: 74, status: 'Elevated' },
      { city: 'Delhi', zone: 'Gurgaon-CyberHub', score: 68, status: 'Warning' },
    ];
  },

  getFraudStats: async () => {
    return {
      anomalyScore: 92,
      flaggedCount: 8,
      nodesScanned: '14K',
      savedLosses: '$1.2M',
    };
  },

  getFraudReviewRecords: async () => {
    return [
      { 
        id: 'FR-941', 
        user: 'USR-820', 
        event: 'W-001', 
        speed: 'Pass', 
        zone: 'Pass', 
        activity: 'Pass', 
        timing: 'Fail', 
        score: 84, 
        status: 'Flagged',
        details: {
          userName: 'Amar Singh',
          claimAmount: '$42.50',
          claimDate: '2026-04-03 14:22',
          speedCheck: {
            status: 'Pass',
            logic: 'Relocation speed: 18km/h',
            threshold: '< 80km/h',
            data: {
              prevGps: '19.0760, 72.8777 (Mumbai)',
              currentGps: '19.0820, 72.8888 (Kurla)',
              distance: '1.2 km',
              timeDelta: '4 min',
              speed: 18
            }
          },
          zoneCheck: {
            status: 'Pass',
            logic: 'Confirmed within North-West MH signal radius',
            threshold: 'Signal Match',
            data: {
              userLoc: '19.0820, 72.8888 (Kurla)',
              zoneCenter: '19.0760, 72.8777 (Andheri E)',
              radius: '1.5 km',
              distance: '1.2 km'
            }
          },
          activityCheck: {
            status: 'Pass',
            logic: 'Ongoing active delivery (Order #ORD-1152)',
            threshold: 'Activity Presence'
          },
          timingCheck: {
            status: 'Fail',
            logic: 'Claim ends 12m after disruption signal normalized',
            threshold: 'Temporal Alignment'
          },
          notes: 'User reported continuing delay despite sensor normalization.'
        }
      },
      { 
        id: 'FR-932', 
        user: 'USR-742', 
        event: 'W-002', 
        speed: 'Fail', 
        zone: 'Pass', 
        activity: 'Pass', 
        timing: 'Pass', 
        score: 62, 
        status: 'Pending',
        details: {
          userName: 'Suresh Kumar',
          claimAmount: '$12.00',
          claimDate: '2026-04-03 16:15',
          speedCheck: {
            status: 'Reject',
            logic: 'Relocation speed: 112km/h (Signal Jump)',
            threshold: '< 80/120km/h',
            data: {
              prevGps: '12.9716, 77.5946 (Bangalore Center)',
              currentGps: '12.9980, 77.6400 (Indiranagar)',
              distance: '5.6 km',
              timeDelta: '3 min',
              speed: 112
            }
          },
          zoneCheck: {
            status: 'Pass',
            logic: 'Matched East Bangalore disruption zone',
            threshold: 'Signal Match',
            data: {
              userLoc: '12.9980, 77.6400 (Indiranagar)',
              zoneCenter: '13.0001, 77.6500 (Banaswadi Hub)',
              radius: '2.0 km',
              distance: '1.1 km'
            }
          },
          activityCheck: {
            status: 'Pass',
            logic: 'Active pickup detected at 16:08',
            threshold: 'Activity Presence'
          },
          timingCheck: {
            status: 'Pass',
            logic: 'Temporal alignment established with station W-002',
            threshold: 'Temporal Alignment'
          },
          notes: 'Potential GPS spoof identified during relocation.'
        }
      },
      { 
        id: 'FR-905', 
        user: 'USR-115', 
        event: 'W-001', 
        speed: 'Pass', 
        zone: 'Fail', 
        activity: 'Pass', 
        timing: 'Pass', 
        score: 71, 
        status: 'Reviewing',
        details: {
          userName: 'Karan Mehra',
          claimAmount: '$15.20',
          claimDate: '2026-04-03 11:45',
          speedCheck: {
            status: 'Pending',
            logic: 'Relocation speed: 88km/h',
            threshold: '< 80/120km/h',
            data: {
              prevGps: '28.6139, 77.2090 (Delhi)',
              currentGps: '28.6250, 77.2250 (Connaught Place)',
              distance: '2.2 km',
              timeDelta: '1.5 min',
              speed: 88
            }
          },
          zoneCheck: {
            status: 'Reject',
            logic: 'User reported in zone A, actual signal coverage zone B',
            threshold: 'Signal Match',
            data: {
              userLoc: '28.6250, 77.2250 (CP Center)',
              zoneCenter: '28.5355, 77.2410 (Nehru Place Hub)',
              radius: '1.0 km',
              distance: '10.2 km'
            }
          },
          activityCheck: {
            status: 'Pass',
            logic: 'Active delivery detected',
            threshold: 'Activity Presence'
          },
          timingCheck: {
            status: 'Pass',
            logic: 'Temporal alignment established',
            threshold: 'Temporal Alignment'
          },
          notes: 'Zone-event mismatch detected, verifying backup signal.'
        }
      },
    ];
  },

  getTriggerEvents: async () => {
    return [
      { 
        id: 'TR-1025', 
        type: 'Precipitation', 
        city: 'Mumbai', 
        zone: 'Zone A', 
        threshold: '>15mm', 
        value: '18.2mm', 
        users: 412, 
        status: 'Active', 
        startedAt: '2026-04-04 18:30' 
      },
      { 
        id: 'TR-1024', 
        type: 'Wind Speed', 
        city: 'Chennai', 
        zone: 'Coastal', 
        threshold: '>45km/h', 
        value: '38km/h', 
        users: 120, 
        status: 'Monitoring', 
        startedAt: '2026-04-04 19:15' 
      },
    ];
  }
};
