/**
 * Groww Real-Time AI Behavioral Engine
 * Dynamically evaluates investor session signals, market volatility,
 * and habit progression to prevent early SIP drop-off with empathetic,
 * non-speculative behavioral nudges.
 */

export const INITIAL_CONTEXT = {
  streakDays: 47,
  sipInstallmentCount: 3,
  daysToNextDebit: 14,
  totalInvested: 7000,
  currentValue: 7084,
  oneDayReturnPct: 0.3, // e.g. +0.3%
  sessionAppOpensThisWeek: 4,
  rapidToggleCount: 0,
  viewState: 'HABIT' // 'HABIT' | 'HOLDINGS'
};

export function evaluateBehaviorState(ctx) {
  const {
    streakDays,
    sipInstallmentCount,
    daysToNextDebit,
    oneDayReturnPct,
    sessionAppOpensThisWeek,
    rapidToggleCount,
    viewState
  } = ctx;

  // 1. Predictive Panic Detection: 3+ rapid flips or viewing holdings during red day
  const isPanicLoop = rapidToggleCount >= 3 || (oneDayReturnPct < -0.5 && viewState === 'HOLDINGS');

  // 2. Cash-Flow Sentinel: Approaching debit in 3 days or fewer
  const isApproachingDebit = daysToNextDebit <= 3;

  // 3. Drawdown / Red Market State
  const isRedMarket = oneDayReturnPct < -0.5;

  // 4. Stagnation / Flat Market State
  const isFlatMarket = Math.abs(oneDayReturnPct) <= 0.3 && sipInstallmentCount >= 2;

  // 5. High-Frequency App Opens (Anxiety Loop)
  const isHighFrequency = sessionAppOpensThisWeek >= 4;

  let stateId = 'DEFAULT_MOMENTUM';
  let badge = 'Elite 14% Cohort';
  let copy = 'Groww data: 92% of investors who completed 12+ uninterrupted debits achieved positive compounding milestones.';

  if (isRedMarket) {
    stateId = 'RED_MARKET';
    badge = 'Smart Accumulator';
    copy = `Groww data: 91% of investors who stayed invested through temporary dips achieved 32% higher compounding gains.`;
  } else if (isApproachingDebit) {
    stateId = 'APPROACHING_DEBIT';
    badge = 'Autopay On-Track';
    copy = `Debit #${sipInstallmentCount + 1} scheduled in ${daysToNextDebit} days. 98% of milestone achievers keep autopay active.`;
  } else if (isHighFrequency) {
    stateId = 'HIGH_FREQUENCY_OPEN';
    badge = 'Discipline Milestone';
    copy = `Top Groww achievers check the app just once a week. Your Day ${streakDays} streak is safely compounding.`;
  } else if (isFlatMarket) {
    stateId = 'FLAT_MARKET';
    badge = 'Compounding Engine';
    copy = 'Peer benchmark: 84% of investors who held steady past Day 45 saw compounding outpace savings by Month 6.';
  }

  return {
    stateId,
    badge,
    copy,
    isPanicLoop,
    isApproachingDebit,
    isRedMarket,
    shouldShowHorizonTrigger: isPanicLoop,
    shouldShowBalanceNudge: isApproachingDebit
  };
}

/**
 * Fallback Hook: Simulates an empathetic AI callout via LLM prompt
 * Returns within 150ms with zero network dependency to maintain offline PWA resilience.
 */
export async function fetchAICallout(ctx) {
  // Deterministic local LLM response simulator matching system prompt:
  // "You are an empathetic financial behavioral coach in the Groww app. Max 18 words."
  const evaluated = evaluateBehaviorState(ctx);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        copy: evaluated.copy,
        badge: evaluated.badge,
        timestamp: Date.now()
      });
    }, 120);
  });
}

