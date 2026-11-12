<script setup lang="ts">
import type { BreakdownRow } from '~/components/investors/InvestorBreakdownCard.vue'
import { SHUTDOWN } from '~/utils/site'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Business Report',
  description:
    'Kura business report: what was built, operating data as of 30 October 2026, the business model, the timeline, and why it stopped.',
  path: '/investors',
  keywords: 'Kura business report, operating data, post-mortem, lessons learned, fintech',
})

const summaryFacts = [
  { label: 'Operating period', value: 'April – September 2026 (about 5 months from first commit to wind-down)' },
  { label: 'Team', value: 'Solo founder-engineer' },
  { label: 'Platforms', value: 'iOS and Android app, web app, internal ops console, marketing site' },
  { label: 'Fiat coverage', value: 'US (ACH/wire), EU (SEPA), UK (Faster Payments), Mexico (SPEI), Brazil (PIX)' },
  { label: 'Where users came from', value: 'Southeast Asia 46% · Latin America 18% · Africa 17% · Europe 12% · US 1%' },
  { label: 'Codebase', value: 'About 148K lines of TypeScript across 5 repositories' },
  { label: 'Infrastructure cost', value: 'About US$30 per month on Google Cloud' },
]

const kycRows: BreakdownRow[] = [
  { key: 'approved', label: 'Approved', primary: '68', share: 68 / 249 },
  { key: 'rejected', label: 'Rejected', primary: '64', share: 64 / 249 },
  { key: 'paused', label: 'Paused', primary: '16', share: 16 / 249 },
  { key: 'incomplete', label: 'Incomplete', primary: '9', share: 9 / 249 },
  { key: 'not-started', label: 'Not started', primary: '92', share: 92 / 249 },
  { key: 'total', label: 'Total', primary: '249', secondary: '248 individuals, 1 business' },
]

const newUserRows: BreakdownRow[] = [
  { key: 'jun', label: 'June 2026', primary: '8' },
  { key: 'jul', label: 'July 2026', primary: '83' },
  { key: 'aug', label: 'August 2026', primary: '50' },
  { key: 'sep', label: 'September 2026', primary: '2' },
  { key: 'oct', label: 'October 2026', primary: '106', secondary: 'Sign-ups after the shutdown notice' },
]

const regionRows: BreakdownRow[] = [
  { key: 'sea', label: 'Southeast Asia', primary: '71', share: 0.458 },
  { key: 'latam', label: 'Latin America', primary: '28', share: 0.181 },
  { key: 'africa', label: 'Africa', primary: '27', share: 0.174 },
  { key: 'europe', label: 'Europe', primary: '18', share: 0.116 },
  { key: 'other-asia', label: 'Other Asia', primary: '7', share: 0.045 },
  { key: 'na', label: 'North America', primary: '3', share: 0.019 },
  { key: 'oceania', label: 'Oceania', primary: '1', share: 0.006 },
]

const depositRows: BreakdownRow[] = [
  { key: 'usd', label: 'USD', primary: '27,067.57' },
  { key: 'mxn', label: 'MXN', primary: '37,208.34', secondary: 'About US$2.0K' },
  { key: 'eur', label: 'EUR', primary: '4,208.18', secondary: 'About US$4.5K' },
  { key: 'gbp', label: 'GBP', primary: '285.29', secondary: 'About US$0.4K' },
  { key: 'total', label: 'Total', primary: '≈ US$34K', secondary: '75 deposits from 18 users across 182 virtual accounts' },
]

const refundRows: BreakdownRow[] = [
  { key: 'usd', label: 'USD', primary: '17,123.00', share: 0.63 },
  { key: 'eur', label: 'EUR', primary: '904.64', secondary: 'About US$1.0K', share: 0.21 },
  { key: 'mxn', label: 'MXN', primary: '4,400.00', secondary: 'About US$0.2K', share: 0.12 },
  { key: 'gbp', label: 'GBP', primary: '5.00', share: 0.02 },
  { key: 'total', label: 'Total', primary: '≈ US$18.3K', secondary: '21 deposits refunded', share: 0.54 },
]

const revenueFacts = [
  { label: 'Fiat-ramp fees', value: '381.32 USDC, earned on 54 converted deposits' },
  {
    label: 'Subscriptions',
    value: 'US$0. Three Pro monthly subscriptions were all invoiced at $0 and later canceled. No charges, refunds, or disputes.',
  },
  { label: 'Swap and Earn fees', value: 'Not measured in this report' },
  {
    label: 'Wire-return fees',
    value: 'Exceeded the 381.32 USDC of ramp fees, so net fiat-ramp revenue was negative',
  },
  { label: 'Cloud hosting', value: 'About US$30 per month (Google Cloud Run and Cloud SQL)' },
  {
    label: 'Not itemized',
    value: 'Fixed monthly fees for each open virtual account and third-party API subscriptions',
  },
  {
    label: 'Risk',
    value: 'One fraud incident (about 992.5 USDC, 27 July 2026), traced on-chain and remediated',
  },
]

const businessModel = [
  { label: 'Subscriptions', value: 'Basic free · Pro $12.99/mo or $129.99/yr · Ultimate $29.99/mo or $299.99/yr' },
  { label: 'On/off-ramp', value: 'A 0.25% margin on top of the ramp partner’s wholesale cost' },
  { label: 'Swaps and bridges', value: 'A 0.25% integrator fee' },
  { label: 'Earn', value: 'A 10% performance fee on Morpho fee-wrapper vaults' },
  { label: 'Referrals', value: 'A cashback program settled from ramp events' },
]

const timeline = [
  { label: 'April 2026', value: 'API and database go live; web app deployed' },
  { label: 'May 2026', value: 'Mobile app development begins' },
  { label: 'June 2026', value: 'First fiat-account customers; on/off-ramp live' },
  { label: 'July 2026', value: 'Public launch; peak sign-ups (83); marketing site rebuilt; fraud incident and risk tooling' },
  { label: 'August 2026', value: 'Internal admin console; Business & Team treasuries' },
  { label: 'September 2026', value: 'Development stops; code open-sourced' },
  { label: 'October 2026', value: 'Shutdown notice published' },
]

const lessons = [
  {
    title: 'Too broad, too early.',
    body: 'Wallet, card, stocks, DeFi, aggregation, and business treasuries all shipped before a single wedge found product-market fit. The card alone went through three partner approaches without launching.',
  },
  {
    title: 'The ramp margin could not absorb returns.',
    body: 'Ramp fees earned 381.32 USDC on about US$34K of gross deposits, but about 54% of that money was sent back, and the wire-return fees on those refunds wiped out all fiat-ramp revenue. The cost could not be passed on: fees are only collected when a deposit converts, converted funds land in the user’s own wallet where they cannot be clawed back, and every workaround either made successful deposits subsidize failed ones, cut off the core user base, or broke the non-custodial promise.',
  },
  {
    title: 'Regulated money movement is an operations business.',
    body: 'KYC rejections (64 of 249), fraud-rate thresholds, recalls, refunds, and per-account fees demand dedicated compliance capacity that a solo founder cannot sustain next to engineering.',
  },
  {
    title: 'Activation is the real funnel.',
    body: '249 KYC starts led to 68 approvals and 18 funded accounts. Onboarding friction, not features, was the constraint.',
  },
  {
    title: 'The users were not the ones the product was designed for.',
    body: 'Kura was built for US-style multi-asset users, but 81% of users came from Southeast Asia, Latin America, and Africa, looking for USD and EUR receiving accounts. Only 2 were in the US. Cross-border wires into those accounts are the likely cause of the high refund rate.',
  },
  {
    title: 'Subscriptions were never validated.',
    body: 'No one paid for Pro or Ultimate; the three Pro subscriptions were all invoiced at $0.',
  },
  {
    title: 'What worked.',
    body: 'Shipping speed (519 production deploys), a security architecture that holds up to scrutiny, and a clean, documented codebase that others can fork.',
  },
]

const githubUrl = SHUTDOWN.githubUrl
</script>

<template>
  <div class="ir-page">
    <div class="marketing-container ir-page__inner">
      <header class="ir-masthead">
        <div class="ir-masthead__brand-row">
          <p class="ir-masthead__brand">Kura</p>
          <p class="ir-masthead__doc-type">Archive</p>
        </div>

        <div class="ir-masthead__title-row">
          <div class="ir-masthead__titles">
            <h1 class="ir-masthead__title">Business Report</h1>
            <p class="ir-masthead__subtitle">
              What Kura built, how it performed, and why it stopped. Kura Finance LLC has been dissolved and has ceased operations.
            </p>
          </div>
        </div>

        <dl class="ir-masthead__meta">
          <div class="ir-masthead__meta-item">
            <dt>Operating period</dt>
            <dd>April – September 2026</dd>
          </div>
          <div class="ir-masthead__meta-item">
            <dt>Data as of</dt>
            <dd>30 October 2026</dd>
          </div>
          <div class="ir-masthead__meta-item">
            <dt>Document status</dt>
            <dd>Final · archived</dd>
          </div>
        </dl>
      </header>

      <InvestorReportSection
        index="01"
        title="Summary"
        lede="Kura was a consumer fintech app built around one idea: you keep custody of your money and your data."
      >
        <div class="ir-highlights">
          <InvestorMetricCard
            featured
            label="Users in KYC"
            value="249"
            detail="68 approved · 18 funded"
          />
          <InvestorMetricCard
            featured
            label="Gross deposits"
            value="≈ US$34K"
            detail="≈ US$18.3K (54%) refunded"
          />
          <InvestorMetricCard
            featured
            label="Revenue"
            value="381.32 USDC"
            detail="Ramp fees · US$0 from subscriptions"
          />
        </div>
        <p class="ir-prose">
          A single account let users hold stablecoins in a self-custody smart wallet, move money in and out of bank accounts in five regions, buy tokenized US stocks, earn DeFi yield, and see their net worth across banks, brokers, exchanges, and wallets. The server could not decrypt that financial data.
        </p>
        <dl class="ir-facts">
          <div v-for="fact in summaryFacts" :key="fact.label" class="ir-facts__row">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection
        index="02"
        title="Operating data"
        lede="Full disclosure of users, deposits, refunds, revenue, and expenses as of 30 October 2026."
      >
        <div class="ir-composition">
          <div class="ir-composition__stack">
            <InvestorBreakdownCard
              title="Users by KYC status"
              name-header="Status"
              value-header="Users"
              :rows="kycRows"
            />
            <InvestorBreakdownCard
              title="Users by region (155 users with a country on file)"
              name-header="Region"
              value-header="Users"
              :rows="regionRows"
            />
          </div>
          <div class="ir-composition__stack">
            <InvestorBreakdownCard
              title="New users by month"
              name-header="Month"
              value-header="Users"
              :rows="newUserRows"
            />
            <InvestorBreakdownCard
              title="Gross deposits by currency"
              name-header="Currency"
              value-header="Deposits"
              :rows="depositRows"
            />
            <InvestorBreakdownCard
              title="Refunds (share of gross deposits in that currency)"
              name-header="Currency"
              value-header="Refunded"
              :rows="refundRows"
            />
          </div>
        </div>
        <p class="ir-footnote-inline">
          Net deposits kept on the platform: about US$15.6K. October sign-ups and deposits arrived after the shutdown notice.
        </p>
        <h3 class="ir-subhead">Revenue, expenses, and risk</h3>
        <dl class="ir-facts">
          <div v-for="fact in revenueFacts" :key="fact.label" class="ir-facts__row">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection
        index="03"
        title="Business model"
        lede="How Kura intended to earn revenue."
      >
        <dl class="ir-facts">
          <div v-for="item in businessModel" :key="item.label" class="ir-facts__row">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection index="04" title="Timeline">
        <dl class="ir-facts">
          <div v-for="item in timeline" :key="item.label" class="ir-facts__row">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection
        index="05"
        title="Why it stopped"
        lede="Lessons learned."
      >
        <ol class="ir-notes">
          <li v-for="(lesson, index) in lessons" :key="lesson.title">
            <span class="ir-notes__mark">{{ index + 1 }}</span>
            <span>
              <strong>{{ lesson.title }}</strong>
              {{ lesson.body }}
            </span>
          </li>
        </ol>
      </InvestorReportSection>

      <InvestorReportSection index="06" title="Further reading">
        <ul class="ir-links">
          <li>
            <NuxtLink to="/about">A note from the founder</NuxtLink>
            <span>Why Kura was built.</span>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <span>Articles published while Kura was operating.</span>
          </li>
          <li>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer">Source code</a>
            <span>The repositories, with architecture and security documentation.</span>
          </li>
          <li>
            <NuxtLink to="/docs">Documentation</NuxtLink>
            <span>Policies and legacy coverage pages.</span>
          </li>
        </ul>
      </InvestorReportSection>

      <footer class="ir-correspondence">
        <div class="ir-correspondence__grid">
          <div>
            <p class="ir-correspondence__label">Correspondence</p>
            <h2 class="ir-correspondence__title">Legal contact</h2>
            <p class="ir-correspondence__body">
              Kura is not raising capital and has no investor relations or support team. For legal matters, email us.
            </p>
          </div>
          <div class="ir-correspondence__contact">
            <a href="mailto:legal@kura-finance.com" class="ir-correspondence__email">
              legal@kura-finance.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.ir-page {
  width: 100%;
  min-height: 100vh;
  color: #12131a;
  background:
    linear-gradient(180deg, #f3f4f8 0%, #f8f9fc 18%, #f8f9fc 100%);
}

.ir-page__inner {
  padding-top: 7.5rem;
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .ir-page__inner {
    padding-top: 8.5rem;
    padding-bottom: 6.5rem;
  }
}

/* —— Masthead —— */
.ir-masthead {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #12131a;
}

.ir-masthead__brand-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.ir-masthead__brand {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.ir-masthead__doc-type {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-masthead__title-row {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .ir-masthead__title-row {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
  }
}

.ir-masthead__title {
  margin: 0 0 0.75rem;
  max-width: 18ch;
  font-family: "Newsreader", Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: #12131a;
}

.ir-masthead__subtitle {
  margin: 0;
  max-width: 28rem;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #64687a;
}

.ir-refresh {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.625rem 0.875rem;
  border: 1px solid #12131a;
  background: transparent;
  color: #12131a;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.ir-refresh:hover:not(:disabled) {
  background: #12131a;
  color: #fff;
}

.ir-refresh:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.ir-refresh__icon {
  width: 0.875rem;
  height: 0.875rem;
}

.ir-refresh__icon--spin {
  animation: ir-spin 0.8s linear infinite;
}

@keyframes ir-spin {
  to {
    transform: rotate(360deg);
  }
}

.ir-masthead__meta {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 2rem;
  margin: 0;
}

@media (min-width: 640px) {
  .ir-masthead__meta {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.ir-masthead__meta-item {
  min-width: 0;
  padding-top: 0.75rem;
  border-top: 1px solid #d5d9e4;
}

.ir-masthead__meta-item dt {
  margin: 0 0 0.35rem;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-masthead__meta-item dd {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #12131a;
  font-variant-numeric: tabular-nums;
}

/* —— Notices / states —— */
.ir-notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.ir-notice {
  margin: 0;
  padding: 0.75rem 0 0.75rem 0.875rem;
  border-left: 2px solid #d5d9e4;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #64687a;
}

.ir-notice--info {
  border-left-color: #7c5cfc;
}

.ir-notice--success {
  border-left-color: #1f7a4d;
  color: #1f7a4d;
}

.ir-notice--error {
  border-left-color: #b42318;
  color: #8a1c14;
}

.ir-state {
  margin: 2rem 0;
  padding: 2.5rem 0;
  border-top: 1px solid #e1e4ec;
  border-bottom: 1px solid #e1e4ec;
  text-align: center;
}

.ir-state p {
  margin: 0;
  font-size: 0.875rem;
  color: #64687a;
}

.ir-state--warn {
  border-color: rgba(180, 120, 40, 0.35);
}

.ir-state--warn p {
  color: #8a5a12;
}

/* —— Section grids —— */
.ir-highlights {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem 1.5rem;
}

@media (min-width: 768px) {
  .ir-highlights {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5rem 2rem;
  }

  .ir-highlights > :not(:first-child) {
    padding-left: 2rem;
    border-left: 1px solid #e1e4ec;
  }
}

.ir-ops {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem 1.25rem;
}

.ir-ops--volumes {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .ir-ops--volumes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .ir-ops--secondary {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }

  .ir-ops--volumes > :nth-child(even),
  .ir-ops--secondary > :not(:first-child) {
    padding-left: 1.5rem;
    border-left: 1px solid #e1e4ec;
  }
}

@media (min-width: 960px) {
  .ir-ops--volumes {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .ir-ops--volumes > :nth-child(even) {
    padding-left: 0;
    border-left: none;
  }

  .ir-ops--volumes > :not(:first-child) {
    padding-left: 1.5rem;
    border-left: 1px solid #e1e4ec;
  }
}

.ir-footnote-inline {
  margin: 1.5rem 0 0;
  font-size: 0.75rem;
  color: #9499a8;
}

.ir-footnote-inline--warn {
  color: #8a5a12;
}

.ir-composition {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.ir-composition__stack {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.ir-table-note {
  margin: -1.5rem 0 0;
  font-size: 0.75rem;
  color: #9499a8;
}

@media (min-width: 1024px) {
  .ir-composition {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem 2.5rem;
  }
}

/* —— Notes —— */
.ir-notes {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 48rem;
}

.ir-notes li {
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  gap: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.65;
  color: #64687a;
}

.ir-notes__mark {
  font-size: 0.6875rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: #9499a8;
}

.ir-notes strong {
  font-weight: 600;
  color: #12131a;
}

/* —— Correspondence —— */
.ir-correspondence {
  margin-top: 1rem;
  padding-top: 2.5rem;
  border-top: 1px solid #12131a;
}

.ir-correspondence__grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .ir-correspondence__grid {
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 3rem;
  }
}

.ir-correspondence__label {
  margin: 0 0 0.75rem;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-correspondence__title {
  margin: 0 0 0.75rem;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.ir-correspondence__body {
  margin: 0;
  max-width: 28rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #64687a;
}

.ir-correspondence__email {
  display: inline-block;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #12131a;
  text-decoration: none;
  border-bottom: 1px solid #12131a;
  padding-bottom: 0.15rem;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ir-correspondence__email:hover {
  color: #7c5cfc;
  border-bottom-color: #7c5cfc;
}

/* —— Prose, facts, links —— */
.ir-prose {
  margin: 2rem 0 0;
  max-width: 48rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #64687a;
}

.ir-subhead {
  margin: 2.5rem 0 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #12131a;
}

.ir-facts {
  margin: 1.5rem 0 0;
  max-width: 48rem;
}

.ir-facts__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  padding: 0.875rem 0;
  border-top: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .ir-facts__row {
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: 1.5rem;
  }
}

.ir-facts__row dt {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #12131a;
}

.ir-facts__row dd {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #64687a;
}

.ir-links {
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 48rem;
}

.ir-links li {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.875rem 0;
  border-top: 1px solid #e1e4ec;
  font-size: 0.875rem;
  color: #64687a;
}

.ir-links a {
  width: fit-content;
  font-weight: 500;
  color: #12131a;
  text-decoration: none;
  border-bottom: 1px solid #12131a;
}

.ir-links a:hover {
  color: #7c5cfc;
  border-bottom-color: #7c5cfc;
}
</style>
