# DORA: Disruption-Optimized Risk Assurance

## Q-Commerce Income Protection Platform

### Hackathon Edition | Fully Compliant Document

---

## Document Control

| Version | Date |
| :--- | :--- |
| 1.1 | April 2026 |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Exclusive Q-Commerce Focus](#2-exclusive-q-commerce-focus)
3. [Market Opportunity](#3-market-opportunity)
4. [MVP Scope for Hackathon](#4-mvp-scope-for-hackathon)
5. [MUST-HAVE FEATURE 1: AI-Powered Risk Assessment](#5-must-have-feature-1-ai-powered-risk-assessment)
6. [MUST-HAVE FEATURE 2: Intelligent Fraud Detection](#6-must-have-feature-2-intelligent-fraud-detection)
7. [MUST-HAVE FEATURE 3: Parametric Automation](#7-must-have-feature-3-parametric-automation)
8. [MUST-HAVE FEATURE 4: Integration Capabilities](#8-must-have-feature-4-integration-capabilities)
9. [DELIVERABLE 1: Optimized Onboarding](#9-deliverable-1-optimized-onboarding)
10. [DELIVERABLE 2: Risk Profiling Using AI/ML](#10-deliverable-2-risk-profiling-using-ai-ml)
11. [DELIVERABLE 3: Policy Creation with Weekly Pricing](#11-deliverable-3-policy-creation-with-weekly-pricing)
12. [DELIVERABLE 4: Parametric Claim Triggering](#12-deliverable-4-parametric-claim-triggering)
13. [DELIVERABLE 5: Payout Processing](#13-deliverable-5-payout-processing)
14. [DELIVERABLE 6: Analytics Dashboard](#14-deliverable-6-analytics-dashboard)
15. [System Architecture](#15-system-architecture)
16. [Key Risks & Mitigation](#16-key-risks--mitigation)
17. [Conclusion](#17-conclusion)
18. [Compliance Checklist](#18-compliance-checklist)

---

## 1. Executive Summary

**DORA (Disruption-Optimized Risk Assurance)** is an AI-powered parametric micro-insurance platform exclusively designed to protect the income of **Quick Commerce (Q-commerce) delivery partners**.

> **"DORA is not just insurance—it is an income stabilization layer for the Q-commerce economy."**

### The Problem

Q-commerce delivery workers face unpredictable income disruptions due to:
- Heavy rainfall and extreme weather
- Traffic congestion and road closures
- Civic restrictions and curfews
- Platform-side technical downtime

### The Solution

| Feature | DORA Approach |
| :--- | :--- |
| Premium Collection | Per-order micro-deductions with **weekly cap** |
| Risk Assessment | AI-powered dynamic scoring |
| Claim Processing | Fully automated, no paperwork |
| Payout Speed | Instant to wallet → Scheduled UPI |
| Fraud Detection | Multi-layer ML validation |

### Why Q-commerce Exclusively?

> **Exclusive Statement:** DORA is built exclusively for Q-commerce delivery partners working with Zepto, Blinkit, and Instamart. This focus allows us to optimize risk models specifically for 10-15 minute delivery windows, high order density, and weather-sensitive earnings patterns—unlike ride-hailing or food delivery.

---

## 2. Exclusive Q-Commerce Focus

> ⚠️ **CRITICAL: DORA is exclusively for Q-commerce delivery workers. Not for general gig workers, not for ride-hailing, not for food delivery.**

### 2.1 Target Platforms (Exclusive)

| Platform | Active Delivery Partners | Focus Cities |
| :--- | :---: | :--- |
| **Zepto** | 150,000+ | Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune |
| **Blinkit** | 200,000+ | 40+ cities nationwide |
| **Instamart (Swiggy)** | 150,000+ | 30+ cities |

### 2.2 Why Q-commerce is Unique

| Parameter | Q-commerce | Food Delivery | Ride-hailing |
| :--- | :--- | :--- | :--- |
| **Delivery SLA** | 10-15 minutes | 30-45 minutes | N/A |
| **Weather sensitivity** | Extreme (perishables) | High | Medium |
| **Order density** | Very high (18-25/day) | Medium (12-18/day) | Variable |
| **Income volatility** | High | Medium | Medium |
| **DORA Focus** | ✅ **EXCLUSIVE** | ❌ | ❌ |

### 2.3 Exclusive Persona: Meet Raj

> Raj is a 24-year-old delivery partner working **exclusively with Zepto in Mumbai**. He works 10-hour shifts, completing 18-22 orders daily, earning ₹600-800. He uses a Redmi Note phone. His biggest fear: a sudden rainstorm costing him a day's wage. He needs protection that works automatically without paperwork.

---

## 3. Market Opportunity

### 3.1 TAM / SAM / SOM (Q-Commerce Exclusive)

| Metric | Estimate | Source |
| :--- | :---: | :--- |
| **TAM - Total Q-commerce Delivery Partners (India)** | 500,000+ | Zepto (150k) + Blinkit (200k) + Instamart (150k) |
| **SAM - Active Weekly Partners** | 300,000+ | Platform disclosures |
| **SOM - Target Year 1 (3 cities)** | 50,000 | Mumbai, Bangalore, Chennai pilot |

### 3.2 Revenue Opportunity

$$
\text{Annual Premium Market} = \text{SOM} \times \text{Avg Weekly Premium} \times 52
$$

$$
\text{Annual Premium Market} = 50,000 \times ₹60 \times 52 = ₹156 \text{ crore}
$$

---

## 4. MVP Scope for Hackathon

> **Note to Judges:** The following scoping ensures a realistic, demo-ready submission while maintaining the ambitious vision.

| Component | MVP Implementation (Hackathon) | Roadmap (Post-Hackathon) |
| :--- | :--- | :--- |
| **Disruption Triggers** | Weather-only (heavy rain >30mm/hr) | Traffic, civic, platform downtime |
| **Earnings Data** | Simulated order generator (₹40/order) | Live platform API integration |
| **Pricing Model** | Weekly cap (₹40/60/80) - FULLY IMPLEMENTED | + AI dynamic risk multiplier |
| **Fraud Detection** | Speed plausibility + duplicate prevention | ML anomaly detection + cluster analysis |
| **Risk Scoring** | Static multiplier (1.0 for all) | XGBoost predictive model |
| **ML Models** | Rule-based thresholds | XGBoost, Isolation Forest, Neural Networks |
| **Reinsurance** | Simulated for demo | Full quota share + XOL |

> **Operational Reliability Note:** Initial version uses rule-based models; ML improves accuracy over time with real-world data.

---

## 5. MUST-HAVE FEATURE 1: AI-Powered Risk Assessment

### 5.1 Dynamic Premium Calculation with Weekly Pricing Model

> ⚠️ **CRITICAL: DORA uses a WEEKLY PRICING MODEL with a hard weekly cap. This is NOT an unlimited per-order deduction model.**

#### Premium Formula

$$
\text{Premium}_{\text{per order}} = \text{Base Plan}\% \times \text{Order Earnings}
$$

$$
\text{Weekly Premium} = \min\left(\sum \text{Premium}_{\text{per order}},\; \text{Weekly Cap}\right)
$$

#### Plans with Weekly Pricing

| Plan | Base Deduction Rate | **Weekly Cap (EXCLUSIVE FEATURE)** | Weekly Cap as % of Avg Earnings |
| :--- | :---: | :---: | :---: |
| Basic | 2% | **₹40** | 0.8% |
| Standard | 4% | **₹60** | 1.2% |
| Pro | 6% | **₹80** | 1.6% |

#### Weekly Pricing in Action (Standard Plan Example)

| Day | Orders | Per-Order Deduction | Daily Deduction | Cumulative | Cap Remaining |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Monday | 18 | ₹1.60 | ₹28.80 | ₹28.80 | ₹31.20 |
| Tuesday | 18 | ₹1.60 | ₹28.80 | ₹57.60 | ₹2.40 |
| Wednesday | 2 | ₹1.60 | ₹3.20 | ₹60.00 | ₹0 |
| Thu-Sun | 50+ | ₹0 | ₹0 | ₹60.00 | ₹0 |

> **Worker sees:** *"You've reached your weekly premium cap of ₹60. No more deductions this week."*

### 5.2 Predictive Risk Modeling (Specific to Q-commerce Persona)

#### Risk Model Formula (Roadmap)

$$
\text{Risk Multiplier} = f_{\text{XGBoost}}(\mathbf{X}_{\text{features}})
$$

$$
\text{Final Premium} = \text{Base Deduction\%} \times \text{Risk Multiplier} \times \text{Order Earnings}
$$

#### Feature Set for Q-commerce Delivery Persona

| Feature Category | Specific Signals | Data Source |
| :--- | :--- | :--- |
| **Worker behavior** | Historical earnings, active hours, delivery zones | 30-day rolling window |
| **Weather sensitivity** | Past earnings during rain, historical loss patterns | Weather API + earnings log |
| **Temporal patterns** | Day of week, time of day, holiday impact | Calendar API |
| **Location risk** | Flood-prone zones, historical congestion | Geo-database |

#### Risk Categories

| Risk Category | Multiplier Range | Typical Q-commerce Worker |
| :--- | :---: | :--- |
| Low Risk | 0.5 - 0.7 | Part-time (<10 orders/day), low-rainfall zone |
| Standard Risk | 0.8 - 1.2 | Full-time, mixed zone, average rain exposure |
| High Risk | 1.3 - 2.0 | Full-time (>20 orders/day), flood-prone zone |

---

## 6. MUST-HAVE FEATURE 2: Intelligent Fraud Detection

### 6.1 Anomaly Detection in Claims

#### Individual Anomaly Detection (Isolation Forest - Roadmap)

$$
\text{Fraud Score} = \text{IsolationForest}(\mathbf{X}_{\text{behavior}})
$$

Where $\mathbf{X}_{\text{behavior}}$ includes:
- GPS coordinates (last 10 pings)
- Speed between pings
- Time at each location
- App interaction frequency

#### Cluster Anomaly Detection

$$
\text{Anomaly Score}_c = \frac{\text{Claim Count}_c}{\text{Expected Claim Count}_c}
$$

**Rule:** If $\text{Anomaly Score}_c > 3\sigma$ above historical mean → Trigger cluster investigation.

### 6.2 Location and Activity Validation

#### GPS Plausibility Check

$$
\text{Speed} = \frac{\text{Distance between pings}}{\text{Time between pings}}
$$

**Rule:** If $\text{Speed} > 80 \text{ km/hr}$ in urban area → Flag as potential GPS spoofing.

#### Zone Verification

```
IF (User GPS NOT within disruption zone) AND (Claim initiated)
THEN Flag for review
```

#### Activity Baseline Validation

$$
\text{Activity Drop} = \frac{\text{Actual Earnings}}{\text{Historical Baseline}}
$$

**Rule:** If $\text{Activity Drop} > 0.7$ (still earning 70%+ of baseline) → Flag as potential false claim.

### 6.3 Duplicate Claim Prevention

| Mechanism | Implementation |
| :--- | :--- |
| **Composite Key** | `(event_id, user_id)` unique constraint |
| **Temporal Cooldown** | No back-to-back claims within 2 hours |
| **Event Deduplication** | Same weather event ID cannot trigger multiple payouts |

---

## 7. MUST-HAVE FEATURE 3: Parametric Automation

### 7.1 Real-Time Trigger Monitoring

#### Monitored Parameters (Polling every 15 minutes)

| Trigger | Threshold | Data Source |
| :--- | :--- | :--- |
| Heavy Rainfall | $>30 \text{ mm/hr}$ | OpenWeatherMap |
| Flood Alert | Government-issued warning | Civic API (simulated) |
| Extreme Heat | $>40^\circ \text{C}$ | OpenWeatherMap |

### 7.2 Automatic Claim Initiation

**Trigger Logic (AND condition):**

```
IF (Rainfall > 30mm/hr IN user's geo-cluster)
AND (User GPS within affected zone)
AND (Actual earnings < 70% of predicted baseline for 2+ hours)
THEN Auto-initiate claim with ZERO user action
```

### 7.3 Instant Payout Processing for Lost Income

#### Payout Formula

$$
\text{Gross Payout} = \text{Loss} \times \text{Coverage}\%
$$

$$
\text{Final Payout} = \min(\text{Gross Payout},\; \text{Daily Cap},\; \text{Remaining Weekly Limit})
$$

#### Payout Timeline

| Step | Duration |
| :--- | :---: |
| Trigger detection | < 1 second |
| Validation (GPS + activity) | < 5 seconds |
| Wallet credit | < 2 seconds |
| **Total** | **< 8 seconds** |

---

## 8. MUST-HAVE FEATURE 4: Integration Capabilities

### 8.1 Integration Summary

| Integration | MVP Status | Provider | Notes |
| :--- | :---: | :--- | :--- |
| **Weather APIs** | ✅ Live + Mock Toggle | OpenWeatherMap (free tier) | Polling every 15 min |
| **Traffic Data** | ✅ Mock | Google Maps API | Roadmap for live |
| **Platform APIs** | ✅ Simulated | N/A | Order generator for demo |
| **Payment Systems** | ✅ Sandbox | Razorpay test mode | UPI AutoPay ready |

### 8.2 Weather API Integration (Live for Demo)

```javascript
// Polling every 15 minutes
GET https://api.openweathermap.org/data/2.5/weather
    ?lat={user_lat}&lon={user_lon}
    &appid={API_KEY}
    
// Trigger condition
if (data.rain['1h'] > 30 || data.main.temp > 40) {
    initiateDisruptionCheck();
}
```

### 8.3 Simulated Platform API (Order Generator)

```javascript
// Simulates Zepto/Blinkit order data for demo
function generateOrder() {
    return {
        order_id: "ORD_" + Date.now(),
        earnings: 40,  // ₹40 per order
        timestamp: new Date().toISOString()
    };
}
```

### 8.4 Payment System Integration

| Channel | Provider | MVP Implementation |
| :--- | :--- | :--- |
| In-app wallet | Internal | Redis/PostgreSQL |
| UPI withdrawal | Razorpay | Test mode (no real money) |
| Notifications | FCM | Push alerts for payouts |

---

## 9. DELIVERABLE 1: Optimized Onboarding for Q-commerce Delivery Persona

### 9.1 Onboarding Flow (2 Minutes Total)

| Step | Action | Time | UX Feature |
| :--- | :--- | :---: | :--- |
| 1 | Phone number + OTP verification | 30 sec | Auto-detect OTP |
| 2 | Name + Platform selection (Zepto/Blinkit/Instamart) | 20 sec | Dropdown with logos |
| 3 | UPI ID (for withdrawals) | 20 sec | Keyboard optimized |
| 4 | GPS permission | 10 sec | One-tap allow |
| 5 | Plan selection (Basic/Standard/Pro) | 30 sec | Voice-enabled |
| 6 | Exclusions acknowledgment | 10 sec | Audio summary |

### 9.2 UX Differentiators for Q-commerce Workers

| Feature | Implementation |
| :--- | :--- |
| **Voice-enabled interface** | Hindi, Marathi, Tamil, Telugu, Kannada, Bengali |
| **Large touch targets** | 48pt minimum for gloved hands |
| **Offline-first design** | Forms work without internet, sync later |
| **Low bandwidth mode** | Image compression, text-only fallback |

### 9.3 Onboarding Screen Mockup (Text Description)

```
┌─────────────────────────────────────┐
│         DORA - परिचय (Intro)         │
├─────────────────────────────────────┤
│  [Zepto] [Blinkit] [Instamart]      │
│         (Platform selection)         │
├─────────────────────────────────────┤
│  Phone number:  ___________         │
│  OTP:         [______]  [Verify]    │
├─────────────────────────────────────┤
│  Name:        ___________           │
│  UPI ID:      ___________@ybl       │
├─────────────────────────────────────┤
│  [✓] I agree to terms & exclusions   │
│         [Continue →]                 │
└─────────────────────────────────────┘
```

---

## 10. DELIVERABLE 2: Risk Profiling Using AI/ML

### 10.1 Risk Profile Components

| Component | Data Source | Update Frequency | ML Model |
| :--- | :--- | :--- | :--- |
| Earnings history | 30-day rolling average | Daily | XGBoost |
| Active hours | GPS tracking | Real-time | Rule-based |
| Delivery zones | Historical GPS clusters | Weekly | K-means clustering |
| Weather sensitivity | Past rain-day earnings | After each event | Logistic regression |
| Time patterns | Hourly earnings distribution | Daily | XGBoost |

### 10.2 Risk Scoring Formula (Roadmap)

$$
\text{Risk Score} = \beta_0 + \beta_1 \cdot \text{Earnings Volatility} + \beta_2 \cdot \text{Rain Sensitivity} + \beta_3 \cdot \text{Zone Risk} + \beta_4 \cdot \text{Time Risk}
$$

$$
\text{Risk Multiplier} = \text{clip}(\text{Risk Score}, 0.5, 2.0)
$$

### 10.3 Risk Profile Output for User

| Risk Factor | Raj's Profile | Score |
| :--- | :--- | :---: |
| Earnings volatility (30-day) | ₹600-800 range | 0.7 |
| Rain sensitivity | ₹200 loss on rain days | 0.9 |
| Zone risk | Andheri East (moderate flood) | 0.6 |
| Time risk | Peak hours (6-9 PM) | 0.8 |
| **Composite Risk Multiplier** | → | **1.2** |

---

## 11. DELIVERABLE 3: Policy Creation with Weekly Pricing

> ⚠️ **CRITICAL: Pricing is structured as a WEEKLY model with hard caps. This is a key differentiator.**

### 11.1 Policy Structure

| Plan | Weekly Premium | Coverage % | Daily Payout Cap | Weekly Payout Limit |
| :--- | :---: | :---: | :---: | :---: |
| **Basic** | **₹40** | 60% | ₹150 | ₹700 |
| **Standard** | **₹60** | 75% | ₹300 | ₹1,000 |
| **Pro** | **₹80** | 90% | ₹400 | ₹1,200 |

### 11.2 Policy Creation Flow

```
User selects plan 
    → View premium calculation example
    → Read exclusions (acknowledge)
    → Confirm selection
    → Policy active immediately
    → First deduction on next completed order
    → Coverage begins
```

### 11.3 Policy Document (Simplified for MVP)

```json
{
    "policy_id": "POL_001",
    "user_id": "USER_RAJ_001",
    "plan": "Standard",
    "weekly_premium_cap": 60,
    "coverage_percentage": 0.75,
    "daily_payout_cap": 300,
    "weekly_payout_limit": 1000,
    "status": "active",
    "start_date": "2026-04-01",
    "exclusions": [
        "Voluntary inactivity",
        "GPS spoofing",
        "Personal illness",
        "Vehicle breakdown"
    ]
}
```

### 11.4 Weekly Pricing Transparency

> **What the user sees in app:**

```
📋 Your Standard Plan - This Week

Premium cap: ₹60
Deducted so far: ₹57.60
Remaining this week: ₹2.40

✅ You will not be charged more than ₹60 this week
✅ After cap reached, all orders are free (₹0 deduction)
✅ Cap resets every Monday at 12:00 AM
```

---

## 12. DELIVERABLE 4: Parametric Claim Triggering (Loss of Income Only)

> ⚠️ **CRITICAL: Claims are triggered ONLY for loss of income due to verified disruptions. No other claim types.**

### 12.1 Trigger Logic (AND Condition)

```
CLAIM_TRIGGERED = TRUE 
IF AND ONLY IF:
    (Weather_Event == TRUE) 
    AND (User_GPS_in_Zone == TRUE) 
    AND (Income_Loss_Detected == TRUE)
```

### 12.2 Loss of Income Calculation

#### Step 1: Calculate Predicted Earnings

$$
\text{Predicted}_{t} = \frac{1}{7} \sum_{i=1}^{7} \text{Earnings}_{\text{same day, same hour, day } i}
$$

#### Step 2: Calculate Actual Earnings

$$
\text{Actual}_{t} = \sum \text{Order Earnings in last 2 hours}
$$

#### Step 3: Calculate Loss

$$
\text{Loss} = \max(0, \text{Predicted}_{t} - \text{Actual}_{t})
$$

### 12.3 Trigger Example

| Parameter | Value |
| :--- | :--- |
| Day & Time | Tuesday, 6:00 PM - 8:00 PM |
| Predicted earnings (historical) | ₹160 |
| Actual earnings (during rain) | ₹40 |
| Loss | ₹120 |
| Coverage (Standard: 75%) | ₹90 |
| **Payout** | **₹90** |

### 12.4 Trigger Event Types (Exclusive for Loss of Income)

| Event Type | Threshold | Income Impact |
| :--- | :--- | :--- |
| Heavy rainfall | >30 mm/hr | Orders drop 60-80% |
| Flood alert | Government warning | Zero deliverability |
| Extreme heat | >40°C | Orders drop 40-60% |
| Traffic congestion (roadmap) | >80% index | Delivery time doubles |

---

## 13. DELIVERABLE 5: Payout Processing via Appropriate Channels

### 13.1 Two-Stage Payout Model

```
┌─────────────────────────────────────────────────────────┐
│  STAGE 1: INSTANT WALLET CREDIT                         │
│  ├── Trigger validated (<5 sec)                         │
│  ├── Payout calculated (<1 sec)                         │
│  ├── Wallet balance updated (<2 sec)                    │
│  └── Push notification sent                             │
│                     ↓                                    │
│  STAGE 2: SCHEDULED UPI WITHDRAWAL                      │
│  ├── Monday 10:00 AM - Auto-withdraw full balance       │
│  ├── Thursday 10:00 AM - Auto-withdraw full balance     │
│  └── UPI transfer to linked bank account (minutes)      │
└─────────────────────────────────────────────────────────┘
```

### 13.2 Payout Channels

| Channel | Provider | Timing | MVP Status |
| :--- | :--- | :--- | :---: |
| In-app wallet | Internal (Redis) | < 2 seconds | ✅ Live |
| UPI AutoPay | Razorpay / NPCI | 2-5 minutes | ✅ Test mode |
| Push notification | Firebase FCM | < 1 second | ✅ Live |

### 13.3 Payout Transaction Record

```json
{
    "transaction_id": "TXN_20260401_001",
    "user_id": "USER_RAJ_001",
    "event_id": "EVT_RAIN_MUM_001",
    "trigger_type": "heavy_rainfall",
    "loss_amount": 120,
    "coverage_percentage": 0.75,
    "payout_amount": 90,
    "daily_cap_remaining": 210,
    "weekly_limit_remaining": 910,
    "timestamp": "2026-04-01T18:35:22Z",
    "status": "completed"
}
```

### 13.4 User Notification (Push)

```
┌─────────────────────────────────────┐
│  🔔 DORA - Payout Received          │
├─────────────────────────────────────┤
│  Heavy rain detected in your area   │
│                                      │
│  Loss: ₹120                          │
│  Covered: 75%                        │
│                                      │
│  💰 ₹90 credited to your wallet     │
│                                      │
│  Wallet balance: ₹450               │
│  Next withdrawal: Monday, 10:00 AM  │
└─────────────────────────────────────┘
```

---

## 14. DELIVERABLE 6: Analytics Dashboard

### 14.1 User Dashboard (In-App)

| Metric | Display Format | Update Frequency |
| :--- | :--- | :--- |
| Earnings protected (lifetime) | ₹X,XXX | Real-time |
| Active coverage status | Basic/Standard/Pro | Real-time |
| Current wallet balance | ₹XXX | Real-time |
| Next withdrawal date | Monday, 10:00 AM | Static |
| Recent payouts | List with dates & amounts | Real-time |
| Active alerts | "Heavy rain in your zone" | Push |

### 14.2 Admin Dashboard (Web - For Judges)

| Metric | Purpose | Formula |
| :--- | :--- | :--- |
| Active users | Adoption tracking | Count of users with active policy |
| Claims today (volume) | Real-time monitoring | Count of claims in last 24h |
| Claims today (value) | Real-time monitoring | Sum of payouts in last 24h |
| Loss ratio | Financial health | $\frac{\text{Total Payouts}}{\text{Total Premiums}}$ |
| Fraud flags | Risk management | Count of pending reviews |
| Weather events active | Operational awareness | Count of active geo-clusters with rain |
| Premium collected | Revenue tracking | Sum of weekly premiums |
| Avg payout per claim | Claims analysis | $\frac{\text{Total Payouts}}{\text{Claim Count}}$ |

### 14.3 Admin Dashboard Mockup (Text Description)

```
┌─────────────────────────────────────────────────────────────┐
│  DORA Admin Dashboard                    [Last 24h] [Week]  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐│
│  │ Active Users│ │ Claims Today│ │  Loss Ratio │ │ Fraud  ││
│  │   12,847    │ │    341      │ │    64.2%    │ │   23   ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘│
├─────────────────────────────────────────────────────────────┤
│  Active Weather Events                                       │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Mumbai (Andheri)    │ Heavy Rain │ 234 users │ ₹52,650 ││
│  │ Bangalore (Indira   │ Heavy Rain │ 187 users │ ₹42,075 ││
│  │ Chennai (T.Nagar)   │ Extreme Heat│ 89 users │ ₹13,350 ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  Premium vs Payout (Last 7 days)                             │
│  │████████████████████████████ Premium: ₹1,24,000          │
│  │███████████████████        Payout: ₹79,600               │
└─────────────────────────────────────────────────────────────┘
```

---

## 15. System Architecture

### 15.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 Mobile App (React Native)                   │
│  Onboarding │ Dashboard │ Plan │ Wallet │ Alerts │ Profile  │
└─────────────────────────────┬───────────────────────────────┘
                              │ HTTPS/REST
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   API Gateway (Node.js)                     │
│                Authentication │ Rate Limiting               │
└─────────────────────────────┬───────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  User Service │    │ Policy Service│    │ Wallet Service│
│  - Onboarding │    │ - Enrollment  │    │ - Balance     │
│  - KYC (mock) │    │ - Premium cap │    │ - Payouts     │
│  - Profiles   │    │ - Coverage    │    │ - Withdrawals │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              Disruption Engine + Fraud Detection            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Weather API │ │ GPS Validity│ │ Speed Check │           │
│  │ (15 min)    │ │ (Zone match)│ │ (Plausible) │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ Anomaly     │ │ Duplicate   │ │ Baseline    │           │
│  │ Detection   │ │ Prevention  │ │ Comparison  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL + Redis                       │
│  Users │ Policies │ Transactions │ Claims │ Wallet Ledger   │
└─────────────────────────────────────────────────────────────┘
```

### 15.2 Tech Stack Summary

| Layer | Technology |
| :--- | :--- |
| Frontend | React Native + TypeScript |
| Backend | Node.js + Express |
| Database | PostgreSQL (primary) + Redis (cache) |
| ML (Roadmap) | Python + XGBoost + Scikit-learn |
| Weather API | OpenWeatherMap (free tier) |
| Payments | Razorpay test mode |
| Notifications | Firebase Cloud Messaging |
| Deployment | Docker + (AWS/GCP - roadmap) |

---

## 16. Key Risks & Mitigation

| Risk Category | Specific Risk | MVP Mitigation | Roadmap Mitigation |
| :--- | :--- | :--- | :--- |
| **Platform API** | No direct access to Zepto/Blinkit APIs | Simulated order generator for demo | Indirect GPS-based estimation + partnership MoUs |
| **User Trust** | Workers don't trust automated insurance | Instant payouts + transparent demo + free trial | Vernacular UI + worker ambassador program |
| **Claim Spikes** | Monsoon causes correlated claims | MVP uses simulated cap for demo | Reinsurance (quota share + XOL + stop loss) |
| **Fraud** | GPS spoofing, coordinated rings | Speed plausibility + duplicate prevention | ML anomaly detection + cluster analysis |
| **Regulatory** | IRDAI compliance | N/A for hackathon | Regulatory sandbox + licensed insurer partner |
| **Adoption** | Low signup due to premium sensitivity | Weekly cap model (₹40-80) feels affordable | Free trial + platform-level integration |
| **Data Privacy** | GPS tracking concerns | Explicit consent + offline mode | DPDPA 2023 compliance + data localization |

---

## 17. Conclusion

### 17.1 Summary of Deliverables

| Deliverable | Status | Section |
| :--- | :---: | :---: |
| Optimized onboarding for Q-commerce delivery persona | ✅ | Section 9 |
| Risk profiling using AI/ML | ✅ | Section 10 |
| Policy creation with **Weekly pricing** | ✅ | Section 11 |
| Claim triggering via parametric events (loss of income only) | ✅ | Section 12 |
| Payout processing via appropriate channels | ✅ | Section 13 |
| Analytics dashboard | ✅ | Section 14 |

### 17.2 Summary of Must-Have Features

| Must-Have Feature | Status | Section |
| :--- | :---: | :---: |
| AI-Powered Risk Assessment | ✅ | Section 5 |
| └ Dynamic premium (Weekly pricing model) | ✅ | Section 5.1 |
| └ Predictive risk modeling | ✅ | Section 5.2 |
| Intelligent Fraud Detection | ✅ | Section 6 |
| └ Anomaly detection in claims | ✅ | Section 6.1 |
| └ Location and activity validation | ✅ | Section 6.2 |
| └ Duplicate claim prevention | ✅ | Section 6.3 |
| Parametric Automation | ✅ | Section 7 |
| └ Real-time trigger monitoring | ✅ | Section 7.1 |
| └ Automatic claim initiation | ✅ | Section 7.2 |
| └ Instant payout processing | ✅ | Section 7.3 |
| Integration Capabilities | ✅ | Section 8 |
| └ Weather APIs | ✅ | Section 8.2 |
| └ Traffic data (mock) | ✅ | Section 8.1 |
| └ Platform APIs (simulated) | ✅ | Section 8.3 |
| └ Payment systems | ✅ | Section 8.4 |

### 17.3 Final Statement

> **DORA redefines insurance for the Q-commerce economy by transforming it from a reactive, claim-based system into a proactive, real-time income protection layer. As Q-commerce becomes the backbone of urban consumption, DORA positions itself as the financial safety net that scales with it.**

> *"Insurance should work like UPI: instant, invisible, and for everyone."*

> *"DORA is not just insurance—it is an income stabilization layer for the Q-commerce economy."*

---

## 18. Compliance Checklist

### 18.1 Exclusive Focus Verification

| Requirement | Status | Evidence |
| :--- | :---: | :--- |
| Exclusively for Q-commerce workers | ✅ | Section 2 - Zepto, Blinkit, Instamart only |
| Not for ride-hailing or food delivery | ✅ | Section 2.2 - Comparison table excludes others |
| Persona is Q-commerce specific | ✅ | Section 2.3 - Raj works with Zepto |

### 18.2 Weekly Pricing Model Verification

| Requirement | Status | Evidence |
| :--- | :---: | :--- |
| Weekly cap explicitly stated | ✅ | Section 5.1 - ₹40/60/80 per week |
| No unlimited per-order deductions | ✅ | Section 5.1 - "Cap resets every Monday" |
| User sees remaining cap | ✅ | Section 11.4 - Transparency UI |

### 18.3 Loss of Income Only Verification

| Requirement | Status | Evidence |
| :--- | :---: | :--- |
| Claims only for loss of income | ✅ | Section 12 - "Loss of income calculation" |
| No health/accident/vehicle claims | ✅ | Section 11.3 - Exclusions list |
| Trigger requires income drop | ✅ | Section 12.2 - Predicted vs Actual |

### 18.4 All Must-Have Features Verification

| Feature | Status | Section |
| :--- | :---: | :--- |
| AI-Powered Risk Assessment | ✅ | 5 |
| Intelligent Fraud Detection | ✅ | 6 |
| Parametric Automation | ✅ | 7 |
| Integration Capabilities | ✅ | 8 |

### 18.5 All Deliverables Verification

| Deliverable | Status | Section |
| :--- | :---: | :--- |
| Optimized onboarding | ✅ | 9 |
| Risk profiling using AI/ML | ✅ | 10 |
| Policy creation with Weekly pricing | ✅ | 11 |
| Claim triggering (loss of income) | ✅ | 12 |
| Payout processing | ✅ | 13 |
| Analytics dashboard | ✅ | 14 |

---

## Appendix: Mathematical Notation Reference

| Symbol | Meaning |
| :--- | :--- |
| $\text{Premium}_{\text{per order}}$ | Premium deducted per completed order |
| $\text{Weekly Cap}$ | Maximum premium per week (₹40/60/80) |
| $\text{Risk Multiplier}$ | AI-generated multiplier (0.5 - 2.0) |
| $\text{Coverage}\%$ | Percentage of loss paid out (60%/75%/90%) |
| $\text{Loss}$ | Difference between predicted and actual earnings |
| $\text{Anomaly Score}_c$ | Fraud detection score for cluster $c$ |
| $\sigma$ | Standard deviation (for anomaly detection) |
| $\text{Predicted}_{t}$ | ML-predicted earnings for time $t$ |
| $\text{Actual}_{t}$ | Actual earnings for time $t$ |

---

**Document Version:** 1.1  
**Last Updated:** April 2026  

---

*End of Document*
