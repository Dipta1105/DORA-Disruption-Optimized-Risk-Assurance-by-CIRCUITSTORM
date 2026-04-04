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

# DORA: Adversarial Defense & Anti-Spoofing Strategy

## Fraud Prevention System - MVP Edition

---

## Document Control

| Version | Date | Status |
| :--- | :--- | :--- |
| 1.0 | April 2026 | Final - Hackathon Submission |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Core Philosophy: Honest Scoping](#2-core-philosophy-honest-scoping)
3. [MVP Fraud Detection Layers](#3-mvp-fraud-detection-layers)
4. [Layer 1: Speed Plausibility Check](#4-layer-1-speed-plausibility-check)
5. [Layer 2: Duplicate Claim Prevention](#5-layer-2-duplicate-claim-prevention)
6. [Layer 3: Zone-Event Mismatch Detection](#6-layer-3-zone-event-mismatch-detection)
7. [Layer 4: Activity During Disruption](#7-layer-4-activity-during-disruption)
8. [Layer 5: Temporal Consistency Check](#8-layer-5-temporal-consistency-check)
9. [Coordinated Fraud Detection (Statistical)](#9-coordinated-fraud-detection-statistical)
10. [The 3-State Decision Model](#10-the-3-state-decision-model)
11. [Fairness Mechanisms for Genuine Users](#11-fairness-mechanisms-for-genuine-users)
12. [Complete Validation Flow](#12-complete-validation-flow)
13. [Data Sources & Availability](#13-data-sources--availability)
14. [Roadmap: Enterprise Features](#14-roadmap-enterprise-features)
15. [MVP vs Enterprise Comparison](#15-mvp-vs-enterprise-comparison)
16. [Conclusion](#16-conclusion)

---

## 1. Executive Summary

DORA's fraud prevention system is designed with **honest scoping** for hackathon MVP implementation. Instead of claiming impossible enterprise features, we implement **five deterministic checks** using only GPS coordinates, timestamps, and order data.

> **Core Principle:** "A 3-state decision model (AUTO-APPROVED / PENDING REVIEW / REJECTED) protects genuine users from false positives while catching obvious spoofing attempts."

### What This Document Covers

| Section | Content |
| :--- | :--- |
| MVP Implementable | Actual code with logic using available APIs |
| Demo-Ready | Simulated scenarios for judge presentation |
| Acknowledged Limitations | What we cannot detect in MVP |
| Roadmap | Enterprise features for post-hackathon |

---

## 2. Core Philosophy: Honest Scoping

### 2.1 What We Will NOT Claim (Unlike False Solutions)

| False Claim | Why It's False |
| :--- | :--- |
| "Hardware-backed attestation in MVP" | Requires Google Play Console, backend setup, not hackathon-feasible |
| "Accelerometer/gyroscope analysis" | Privacy concerns, battery impact, complex sensor fusion |
| "Cellular tower handoff detection" | Not accessible via web/mobile APIs without telco partnership |
| "VPN/tunneling detection" | Unreliable, easily bypassed, over-engineered |
| "Binary REAL/FAKE decision" | Guarantees false positives, destroys user trust |

### 2.2 What We WILL Implement

| True MVP Feature | Implementation |
| :--- | :--- |
| Speed plausibility | Haversine formula + GPS timestamps |
| Duplicate prevention | Database unique constraints |
| Zone validation | Geo-fencing with OpenStreetMap |
| Activity monitoring | Order data queries |
| Temporal consistency | Timestamp arithmetic |
| Cluster anomaly | Statistical aggregation |

---

## 3. MVP Fraud Detection Layers

DORA implements **five deterministic validation layers** using only available data sources.

```
┌─────────────────────────────────────────────────────────────────┐
│                    FIVE LAYERS OF DEFENSE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Layer 1: Speed Plausibility                                   │
│   ├── Detects: GPS spoofing, impossible teleportation           │
│   └── Method: Haversine distance + timestamp diff               │
│                                                                  │
│   Layer 2: Duplicate Claim Prevention                           │
│   ├── Detects: Multiple claims for same event                   │
│   └── Method: Database unique constraint (user_id, event_id)    │
│                                                                  │
│   Layer 3: Zone-Event Mismatch                                  │
│   ├── Detects: Claiming disruption from outside affected zone   │
│   └── Method: Geo-fencing + distance calculation                │
│                                                                  │
│   Layer 4: Activity During Disruption                           │
│   ├── Detects: Claiming loss while actively delivering          │
│   └── Method: Order data timestamp comparison                   │
│                                                                  │
│   Layer 5: Temporal Consistency                                 │
│   ├── Detects: Claims submitted hours after event ended         │
│   └── Method: Claim time vs disruption end time                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Layer 1: Speed Plausibility Check

### 4.1 Mathematical Foundation

**Haversine Formula for Distance Calculation:**

$$
d = 2R \cdot \arcsin\left(\sqrt{\sin^2\left(\frac{\Delta\phi}{2}\right) + \cos(\phi_1) \cdot \cos(\phi_2) \cdot \sin^2\left(\frac{\Delta\lambda}{2}\right)}\right)
$$

Where:
- $d$ = Distance between two points (km)
- $R$ = Earth's radius (6371 km)
- $\phi_1, \phi_2$ = Latitudes in radians
- $\Delta\phi = \phi_2 - \phi_1$
- $\Delta\lambda = \lambda_2 - \lambda_1$ (difference in longitudes)

**Speed Calculation:**

$$
v = \frac{d}{\Delta t} \times 3600
$$

Where:
- $v$ = Speed (km/hr)
- $d$ = Distance (km)
- $\Delta t$ = Time difference (seconds)

### 4.2 Decision Rules

| Condition | Outcome | Action |
| :--- | :--- | :--- |
| $v \leq 80 \text{ km/hr}$ | ✅ Normal | Pass to next layer |
| $80 < v \leq 120 \text{ km/hr}$ | ⚠️ Suspicious | Flag for PENDING REVIEW |
| $v > 120 \text{ km/hr}$ | ❌ Impossible | REJECT immediately |

### 4.3 Implementation

```javascript
/**
 * Haversine distance calculation between two GPS coordinates
 * @param {number} lat1 - Latitude of first point (degrees)
 * @param {number} lon1 - Longitude of first point (degrees)
 * @param {number} lat2 - Latitude of second point (degrees)
 * @param {number} lon2 - Longitude of second point (degrees)
 * @returns {number} Distance in kilometers
 */
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const toRadians = (degrees) => degrees * Math.PI / 180;
    
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c;
}

/**
 * Validate speed consistency across GPS history
 * @param {Array} gpsHistory - Array of {lat, lon, timestamp} objects
 * @returns {Object} Validation result with status and reason
 */
function validateSpeed(gpsHistory) {
    if (gpsHistory.length < 2) {
        return { valid: true, reason: null, severity: null };
    }
    
    for (let i = 1; i < gpsHistory.length; i++) {
        const prev = gpsHistory[i - 1];
        const curr = gpsHistory[i];
        
        const distance = haversineDistance(
            prev.lat, prev.lon,
            curr.lat, curr.lon
        );
        
        const timeDiffSeconds = (curr.timestamp - prev.timestamp) / 1000;
        
        if (timeDiffSeconds <= 0) continue;
        
        const speedKmph = (distance / timeDiffSeconds) * 3600;
        
        if (speedKmph > 120) {
            return {
                valid: false,
                reason: `Impossible speed: ${speedKmph.toFixed(1)} km/hr (max 120)`,
                severity: 'reject'
            };
        }
        
        if (speedKmph > 80) {
            return {
                valid: false,
                reason: `Suspicious speed: ${speedKmph.toFixed(1)} km/hr requires review`,
                severity: 'pending_review'
            };
        }
    }
    
    return { valid: true, reason: null, severity: null };
}
```

### 4.4 Why This Works

| Spoofing Method | Detection |
| :--- | :--- |
| GPS spoofing app teleporting user | Distance jump creates speed >120 km/hr |
| Mock location with random coordinates | Inconsistent movement patterns |
| Static GPS signal (not moving) | Speed = 0 km/hr - passes check (user may be legitimately stationary) |

### 4.5 Limitation Acknowledged

> **Note:** Sophisticated spoofing that gradually moves GPS coordinates at realistic speeds ($\leq 80$ km/hr) will NOT be detected by this layer alone. This requires Layer 2-5 or enterprise features.

---

## 5. Layer 2: Duplicate Claim Prevention

### 5.1 Mathematical Foundation

**Uniqueness Constraint:**

$$
\nexists \text{ claim } c \in C : c.\text{user\_id} = u \land c.\text{event\_id} = e
$$

Where:
- $C$ = Set of all claims
- $u$ = Current user ID
- $e$ = Current event ID

### 5.2 Implementation

```sql
-- Database schema with unique constraint
CREATE TABLE claims (
    claim_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR(50) NOT NULL,
    event_id VARCHAR(50) NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    payout_amount DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- This prevents duplicate claims for same user + event
    CONSTRAINT unique_user_event UNIQUE (user_id, event_id)
);

-- Index for fast lookup
CREATE INDEX idx_claims_user_event ON claims (user_id, event_id);
```

```javascript
/**
 * Prevent duplicate claims for the same user and event
 * @param {string} userId - User identifier
 * @param {string} eventId - Disruption event identifier
 * @returns {Object} Validation result
 */
async function preventDuplicateClaim(userId, eventId) {
    const result = await db.query(
        `SELECT claim_id, status, created_at 
         FROM claims 
         WHERE user_id = $1 AND event_id = $2`,
        [userId, eventId]
    );
    
    if (result.rows.length > 0) {
        const existing = result.rows[0];
        return {
            valid: false,
            reason: `Duplicate claim - already submitted on ${existing.created_at}`,
            severity: 'reject',
            existingClaimId: existing.claim_id
        };
    }
    
    return { valid: true, reason: null, severity: null };
}
```

### 5.3 Additional Temporal Cooldown

```javascript
/**
 * Prevent claims within 2 hours of previous payout
 * @param {string} userId - User identifier
 * @returns {Object} Validation result
 */
async function checkTemporalCooldown(userId) {
    const result = await db.query(
        `SELECT payout_amount, created_at 
         FROM claims 
         WHERE user_id = $1 
         AND status = 'auto_approved'
         AND created_at > NOW() - INTERVAL '2 hours'
         ORDER BY created_at DESC 
         LIMIT 1`,
        [userId]
    );
    
    if (result.rows.length > 0) {
        const lastClaim = result.rows[0];
        return {
            valid: false,
            reason: `Temporal cooldown - last payout at ${lastClaim.created_at}`,
            severity: 'pending_review'
        };
    }
    
    return { valid: true, reason: null, severity: null };
}
```

---

## 6. Layer 3: Zone-Event Mismatch Detection

### 6.1 Mathematical Foundation

**Distance from User to Disruption Zone Center:**

$$
d_{\text{zone}} = 2R \cdot \arcsin\left(\sqrt{\sin^2\left(\frac{\phi_u - \phi_z}{2}\right) + \cos(\phi_u) \cos(\phi_z) \sin^2\left(\frac{\lambda_u - \lambda_z}{2}\right)}\right)
$$

**Decision Rule:**

$$
\text{Status} = 
\begin{cases}
\text{APPROVED} & \text{if } d_{\text{zone}} \leq r_{\text{zone}} \\
\text{REJECTED} & \text{if } d_{\text{zone}} > r_{\text{zone}}
\end{cases}
$$

Where:
- $d_{\text{zone}}$ = Distance from user to zone center
- $r_{\text{zone}}$ = Zone radius (typically 5-10 km)
- $\phi_u, \lambda_u$ = User GPS coordinates
- $\phi_z, \lambda_z$ = Zone center coordinates

### 6.2 Implementation

```javascript
/**
 * Validate that user is within the disruption zone
 * @param {number} userLat - User's latitude
 * @param {number} userLon - User's longitude
 * @param {Object} disruptionZone - { center_lat, center_lon, radius_km }
 * @returns {Object} Validation result
 */
function validateUserInDisruptionZone(userLat, userLon, disruptionZone) {
    const distance = haversineDistance(
        userLat, userLon,
        disruptionZone.center_lat,
        disruptionZone.center_lon
    );
    
    if (distance > disruptionZone.radius_km) {
        return {
            valid: false,
            reason: `User ${distance.toFixed(1)} km away from disruption zone (radius: ${disruptionZone.radius_km} km)`,
            severity: 'reject'
        };
    }
    
    return {
        valid: true,
        reason: null,
        severity: null,
        distanceFromZone: distance
    };
}
```

### 6.3 Geo-Cluster Definition

```javascript
// Pre-defined geo-clusters for each city
const geoClusters = {
    'Mumbai_Andheri': {
        center_lat: 19.1136,
        center_lon: 72.8697,
        radius_km: 5,
        risk_level: 'high'
    },
    'Mumbai_Bandra': {
        center_lat: 19.0596,
        center_lon: 72.8295,
        radius_km: 4,
        risk_level: 'medium'
    },
    'Bangalore_Indiranagar': {
        center_lat: 12.9784,
        center_lon: 77.6408,
        radius_km: 5,
        risk_level: 'medium'
    },
    'Chennai_TNagar': {
        center_lat: 13.0475,
        center_lon: 80.2341,
        radius_km: 4,
        risk_level: 'high'  // Flood-prone
    }
};
```

---

## 7. Layer 4: Activity During Disruption

### 7.1 Mathematical Foundation

**Activity Flag:**

$$
\text{Active} = \mathbb{1}\left[\sum_{i=1}^{n} \text{order}_i \cdot \mathbb{1}\left[t_{\text{start}} \leq t_i \leq t_{\text{end}}\right] > 0\right]
$$

**Decision Rule:**

$$
\text{Status} = 
\begin{cases}
\text{REJECTED} & \text{if Active} = \text{TRUE} \\
\text{Continue} & \text{if Active} = \text{FALSE}
\end{cases}
$$

Where:
- $t_{\text{start}}$ = Disruption start time
- $t_{\text{end}}$ = Disruption end time
- $t_i$ = Order completion time

### 7.2 Implementation

```javascript
/**
 * Check if user completed any orders during the disruption window
 * @param {string} userId - User identifier
 * @param {Date} disruptionStart - Start time of disruption
 * @param {Date} disruptionEnd - End time of disruption
 * @returns {Object} Validation result
 */
async function validateActivityDuringDisruption(userId, disruptionStart, disruptionEnd) {
    const result = await db.query(
        `SELECT 
            COUNT(*) as order_count,
            SUM(earnings) as total_earnings,
            array_agg(order_id) as order_ids
         FROM orders
         WHERE user_id = $1
         AND completed_at BETWEEN $2 AND $3`,
        [userId, disruptionStart, disruptionEnd]
    );
    
    const orderCount = parseInt(result.rows[0].order_count);
    
    if (orderCount > 0) {
        return {
            valid: false,
            reason: `User completed ${orderCount} order(s) during disruption window`,
            severity: 'reject',
            details: {
                order_count: orderCount,
                total_earnings: result.rows[0].total_earnings,
                order_ids: result.rows[0].order_ids
            }
        };
    }
    
    return {
        valid: true,
        reason: null,
        severity: null,
        details: { order_count: 0 }
    };
}
```

### 7.3 Why This Is Critical

| Scenario | Detection |
| :--- | :--- |
| User claims ₹225 loss but completed 5 orders during rain | REJECTED - contradictory evidence |
| User claims loss, went home during rain | APPROVED - no activity |
| User claims loss, GPS shows movement but no orders | PENDING REVIEW - possible platform issue |

---

## 8. Layer 5: Temporal Consistency Check

### 8.1 Mathematical Foundation

**Time Elapsed Since Disruption End:**

$$
\Delta t_{\text{elapsed}} = t_{\text{claim}} - t_{\text{end}}
$$

**Decision Rule:**

$$
\text{Status} = 
\begin{cases}
\text{AUTO-APPROVED} & \text{if } \Delta t_{\text{elapsed}} \leq 2 \text{ hours} \\
\text{PENDING REVIEW} & \text{if } 2 < \Delta t_{\text{elapsed}} \leq 24 \text{ hours} \\
\text{REJECTED} & \text{if } \Delta t_{\text{elapsed}} > 24 \text{ hours}
\end{cases}
$$

### 8.2 Implementation

```javascript
/**
 * Validate claim timing relative to disruption end
 * @param {Date} disruptionEnd - End time of disruption event
 * @param {Date} claimTime - Time claim was initiated
 * @returns {Object} Validation result
 */
function validateClaimTiming(disruptionEnd, claimTime) {
    const hoursElapsed = (claimTime - disruptionEnd) / (1000 * 60 * 60);
    
    if (hoursElapsed <= 2) {
        return {
            valid: true,
            reason: null,
            severity: null,
            hoursElapsed: hoursElapsed
        };
    }
    
    if (hoursElapsed <= 24) {
        return {
            valid: false,
            reason: `Claim submitted ${hoursElapsed.toFixed(1)} hours after disruption ended`,
            severity: 'pending_review',
            hoursElapsed: hoursElapsed
        };
    }
    
    return {
        valid: false,
        reason: `Claim submitted ${hoursElapsed.toFixed(1)} hours after disruption ended (max 24)`,
        severity: 'reject',
        hoursElapsed: hoursElapsed
    };
}
```

---

## 9. Coordinated Fraud Detection (Statistical)

### 9.1 Mathematical Foundation

**Claim Density for Geo-Cluster $c$:**

$$
\rho_c = \frac{|C_c|}{|U_c|}
$$

Where:
- $\rho_c$ = Claim density in cluster $c$
- $|C_c|$ = Number of claims in cluster $c$
- $|U_c|$ = Number of active users in cluster $c$

**Anomaly Score:**

$$
\alpha_c = \frac{\rho_c}{\rho_{\text{historical}}}
$$

**Decision Rules:**

| Condition | Interpretation | Action |
| :--- | :--- | :--- |
| $\alpha_c \leq 2$ | Normal fluctuation | No action |
| $2 < \alpha_c \leq 3$ | Elevated activity | Monitor |
| $\alpha_c > 3$ | Significant anomaly | Investigate |

### 9.2 Implementation

```javascript
/**
 * Detect coordinated fraud rings using cluster-level statistics
 * @param {string} geoClusterId - Geo-cluster identifier
 * @param {string} eventId - Disruption event identifier
 * @returns {Object} Anomaly detection result
 */
async function detectClusterAnomaly(geoClusterId, eventId) {
    // Get historical baseline (last 30 days average claim rate)
    const historicalResult = await db.query(
        `SELECT 
            AVG(daily_claim_rate) as avg_rate,
            STDDEV(daily_claim_rate) as stddev_rate
         FROM (
             SELECT 
                DATE(created_at) as day,
                COUNT(*)::float / COUNT(DISTINCT user_id) as daily_claim_rate
             FROM claims
             WHERE geo_cluster = $1
             AND created_at > NOW() - INTERVAL '30 days'
             GROUP BY DATE(created_at)
         ) daily_stats`,
        [geoClusterId]
    );
    
    const historicalRate = parseFloat(historicalResult.rows[0].avg_rate);
    const stddev = parseFloat(historicalResult.rows[0].stddev_rate);
    
    // Get current claim rate for this event
    const currentResult = await db.query(
        `SELECT 
            COUNT(*) as claim_count,
            COUNT(DISTINCT user_id) as active_users
         FROM claims c
         JOIN users u ON c.user_id = u.user_id
         WHERE c.event_id = $1
         AND u.geo_cluster = $2`,
        [eventId, geoClusterId]
    );
    
    const currentRate = currentResult.rows[0].claim_count / 
                        Math.max(1, currentResult.rows[0].active_users);
    
    const anomalyScore = currentRate / Math.max(0.01, historicalRate);
    
    if (anomalyScore > 3) {
        return {
            isAnomaly: true,
            severity: 'high',
            anomalyScore: anomalyScore,
            currentRate: currentRate,
            historicalRate: historicalRate,
            recommendation: 'Hold all payouts in this cluster for manual review'
        };
    }
    
    if (anomalyScore > 2) {
        return {
            isAnomaly: true,
            severity: 'medium',
            anomalyScore: anomalyScore,
            currentRate: currentRate,
            historicalRate: historicalRate,
            recommendation: 'Flag for monitoring'
        };
    }
    
    return {
        isAnomaly: false,
        severity: null,
        anomalyScore: anomalyScore,
        recommendation: 'Normal activity'
    };
}
```

### 9.3 Demo Simulation

For hackathon demo, pre-script a cluster anomaly scenario:

```javascript
// Demo: Simulate fraud ring detection
function simulateFraudRingDetection() {
    const fraudRingScenario = {
        geo_cluster: "Mumbai_Andheri",
        normal_claim_rate: 0.18,  // 18% historical
        current_claim_rate: 0.67,  // 67% during event
        anomaly_score: 3.72,
        flagged_users: 47,
        recommendation: "HOLD PAYOUTS - Manual verification required"
    };
    
    // Display in admin dashboard
    console.log(`
    🚨 FRAUD RING DETECTED
    Cluster: ${fraudRingScenario.geo_cluster}
    Normal rate: ${fraudRingScenario.normal_claim_rate * 100}%
    Current rate: ${fraudRingScenario.current_claim_rate * 100}%
    Anomaly score: ${fraudRingScenario.anomaly_score}x
    ${fraudRingScenario.recommendation}
    `);
}
```

---

## 10. The 3-State Decision Model

### 10.1 Why Not Binary REAL/FAKE

| Problem with Binary | Consequence |
| :--- | :--- |
| False positives | Genuine users lose payouts, churn, negative word-of-mouth |
| No gray area | Borderline cases (GPS drift, poor network) cause incorrect decisions |
| No user recourse | Rejected users have no path to appeal |

### 10.2 The 3-State Model

```
┌─────────────────────────────────────────────────────────────────┐
│                    3-STATE DECISION MODEL                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   STATE 1: AUTO-APPROVED (95% of claims)                        │
│   ├── All 5 validation layers pass                              │
│   ├── Instant payout to wallet                                  │
│   └── User notified with "✅ Claim Approved"                    │
│                                                                  │
│   STATE 2: PENDING REVIEW (4% of claims)                        │
│   ├── Borderline: speed 80-120 km/hr, or late claim             │
│   ├── Payout held temporarily                                   │
│   ├── Manual review within 2 hours                              │
│   ├── User notified with "⏳ Claim Under Review"                │
│   └── User can upload evidence (screenshot, route map)          │
│                                                                  │
│   STATE 3: REJECTED (1% of claims)                              │
│   ├── Clear violation: speed >120 km/hr, duplicate, out of zone │
│   ├── No payout                                                  │
│   ├── User notified with "❌ Claim Rejected" + reason           │
│   └── User can appeal via in-app form                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 10.3 Decision Matrix

| Layer 1 (Speed) | Layer 2 (Duplicate) | Layer 3 (Zone) | Layer 4 (Activity) | Layer 5 (Timing) | Final Decision |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PASS | PASS | PASS | PASS | PASS | **AUTO-APPROVED** |
| SUSPECT | PASS | PASS | PASS | PASS | **PENDING REVIEW** |
| FAIL | - | - | - | - | **REJECTED** |
| - | FAIL | - | - | - | **REJECTED** |
| - | - | FAIL | - | - | **REJECTED** |
| - | - | - | FAIL | - | **REJECTED** |
| PASS | PASS | PASS | PASS | SUSPECT | **PENDING REVIEW** |
| PASS | PASS | PASS | PASS | FAIL | **REJECTED** |

### 10.4 Implementation

```javascript
/**
 * Complete claim validation orchestrator
 * @param {string} userId - User identifier
 * @param {string} eventId - Disruption event identifier
 * @returns {Object} Final decision with status and details
 */
async function validateClaim(userId, eventId) {
    // Fetch required data
    const user = await getUser(userId);
    const disruptionEvent = await getDisruptionEvent(eventId);
    const gpsHistory = await getUserGpsHistory(userId, disruptionEvent.start_time);
    
    // Layer 1: Speed plausibility
    const speedCheck = validateSpeed(gpsHistory);
    if (speedCheck.valid === false && speedCheck.severity === 'reject') {
        return recordClaimDecision(userId, eventId, 'REJECTED', speedCheck.reason);
    }
    
    // Layer 2: Duplicate prevention
    const duplicateCheck = await preventDuplicateClaim(userId, eventId);
    if (duplicateCheck.valid === false && duplicateCheck.severity === 'reject') {
        return recordClaimDecision(userId, eventId, 'REJECTED', duplicateCheck.reason);
    }
    
    // Layer 3: Zone validation
    const latestGps = gpsHistory[gpsHistory.length - 1];
    const zoneCheck = validateUserInDisruptionZone(
        latestGps.lat, latestGps.lon,
        disruptionEvent.zone
    );
    if (zoneCheck.valid === false) {
        return recordClaimDecision(userId, eventId, 'REJECTED', zoneCheck.reason);
    }
    
    // Layer 4: Activity during disruption
    const activityCheck = await validateActivityDuringDisruption(
        userId,
        disruptionEvent.start_time,
        disruptionEvent.end_time
    );
    if (activityCheck.valid === false) {
        return recordClaimDecision(userId, eventId, 'REJECTED', activityCheck.reason);
    }
    
    // Layer 5: Temporal consistency
    const timingCheck = validateClaimTiming(
        disruptionEvent.end_time,
        new Date()
    );
    
    // Handle borderline cases
    if (speedCheck.valid === false && speedCheck.severity === 'pending_review') {
        return recordClaimDecision(userId, eventId, 'PENDING_REVIEW', speedCheck.reason);
    }
    
    if (timingCheck.valid === false && timingCheck.severity === 'pending_review') {
        return recordClaimDecision(userId, eventId, 'PENDING_REVIEW', timingCheck.reason);
    }
    
    if (timingCheck.valid === false && timingCheck.severity === 'reject') {
        return recordClaimDecision(userId, eventId, 'REJECTED', timingCheck.reason);
    }
    
    // All checks passed
    return recordClaimDecision(userId, eventId, 'AUTO_APPROVED', 'All validation checks passed');
}

/**
 * Record claim decision in database
 */
async function recordClaimDecision(userId, eventId, status, reason) {
    const result = await db.query(
        `INSERT INTO claims (user_id, event_id, status, rejection_reason, created_at)
         VALUES ($1, $2, $3, $4, NOW())
         RETURNING claim_id`,
        [userId, eventId, status, reason]
    );
    
    return {
        claim_id: result.rows[0].claim_id,
        status: status,
        reason: reason,
        timestamp: new Date().toISOString()
    };
}
```

---

## 11. Fairness Mechanisms for Genuine Users

### 11.1 Protection Against False Positives

| Scenario | Handling |
| :--- | :--- |
| **GPS drift** (temporary signal loss) | 5-minute grace period; system waits for signal stabilization before rejecting |
| **Poor network connectivity** | Claim logged with timestamp; validated when connectivity returns |
| **Borderline speed** (80-120 km/hr) | PENDING REVIEW, not rejected. User notified and can provide evidence |
| **Late claim submission** (2-24 hours) | PENDING REVIEW with explanation, not auto-rejected |
| **False positive rejection** | In-app appeal form; manual review within 4 hours |

### 11.2 Grace Period Implementation

```javascript
/**
 * Allow grace period for GPS stabilization
 * @param {string} userId - User identifier
 * @param {Date} disruptionStart - Disruption start time
 * @returns {Object} Grace period status
 */
async function handleGpsDrift(userId, disruptionStart) {
    // Wait up to 5 minutes for GPS to stabilize
    const maxWaitMs = 5 * 60 * 1000;
    const startWait = Date.now();
    
    while (Date.now() - startWait < maxWaitMs) {
        const latestGps = await getLatestGps(userId);
        
        if (isGpsStable(latestGps)) {
            return {
                stabilized: true,
                waitTimeMs: Date.now() - startWait,
                gps: latestGps
            };
        }
        
        await sleep(1000); // Wait 1 second between checks
    }
    
    return {
        stabilized: false,
        waitTimeMs: maxWaitMs,
        reason: "GPS signal did not stabilize within grace period"
    };
}

function isGpsStable(gpsReading) {
    // Check if accuracy is reasonable (< 100 meters)
    const ACCEPTABLE_ACCURACY_METERS = 100;
    return gpsReading.accuracy_meters <= ACCEPTABLE_ACCURACY_METERS;
}
```

### 11.3 User Communication Templates

**AUTO-APPROVED Notification:**

```json
{
    "title": "✅ Claim Approved - ₹90 Credited",
    "body": "Heavy rain detected in your area. ₹90 has been added to your DORA wallet.",
    "data": {
        "payout_amount": 90,
        "event_type": "heavy_rainfall",
        "wallet_balance": 450
    }
}
```

**PENDING REVIEW Notification:**

```json
{
    "title": "⏳ Claim Under Review (2 hours max)",
    "body": "Your claim needs additional verification. You can upload a screenshot or route map to speed up review.",
    "data": {
        "review_id": "REV_001",
        "estimated_resolution_minutes": 120,
        "appeal_url": "https://dora.app/claims/REV_001"
    }
}
```

**REJECTED Notification:**

```json
{
    "title": "❌ Claim Rejected",
    "body": "Reason: Impossible speed detected (145 km/hr). Delivery bikes cannot travel this fast.",
    "data": {
        "rejection_reason": "speed_violation",
        "appeal_available": true,
        "appeal_url": "https://dora.app/claims/REJ_001/appeal"
    }
}
```

---

## 12. Complete Validation Flow

### 12.1 Flowchart

```
                              ┌─────────────────┐
                              │  CLAIM TRIGGER   │
                              │  (Weather Event) │
                              └────────┬────────┘
                                       │
                                       ▼
                    ┌──────────────────────────────────────┐
                    │         FETCH USER DATA              │
                    │  - GPS history (last 10 pings)       │
                    │  - Orders during disruption          │
                    │  - Previous claims                   │
                    └──────────────────┬───────────────────┘
                                       │
                                       ▼
                    ┌──────────────────────────────────────┐
                    │         LAYER 1: SPEED CHECK         │
                    │  v = distance / time × 3600          │
                    └──────────────────┬───────────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
              ▼                        ▼                        ▼
         v ≤ 80 km/hr            80 < v ≤ 120 km/hr         v > 120 km/hr
              │                        │                        │
              ▼                        ▼                        ▼
        ┌──────────┐            ┌──────────┐            ┌──────────┐
        │ CONTINUE │            │ PENDING  │            │ REJECTED │
        └────┬─────┘            │ REVIEW   │            └──────────┘
             │                  └──────────┘
             ▼
    ┌──────────────────────────────────────┐
    │    LAYER 2: DUPLICATE PREVENTION     │
    │    UNIQUE(user_id, event_id)         │
    └──────────────────┬───────────────────┘
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
         No Duplicate       Duplicate
              │                 │
              ▼                 ▼
        ┌──────────┐      ┌──────────┐
        │ CONTINUE │      │ REJECTED │
        └────┬─────┘      └──────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │      LAYER 3: ZONE VALIDATION        │
    │      d_zone ≤ radius?                │
    └──────────────────┬───────────────────┘
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
           In Zone

*End of Document*
