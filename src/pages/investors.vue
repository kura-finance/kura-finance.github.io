<script setup lang="ts">
import type { BreakdownRow } from '~/components/investors/InvestorBreakdownCard.vue'
import { SHUTDOWN } from '~/utils/site'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

usePageSeo({
  title: () => t('report.seo.title'),
  description: () => t('report.seo.description'),
  path: '/investors',
  keywords: () => t('report.seo.keywords'),
})

type Fact = { label: string; value: string }

const summaryFacts = useCopy<Fact[]>('report.summary.facts')
const revenueFacts = useCopy<Fact[]>('report.operating.revenueFacts')
const businessModel = useCopy<Fact[]>('report.model.items')
const timeline = useCopy<Fact[]>('report.timeline.items')
const lessons = useCopy<{ title: string; text: string }[]>('report.lessons.items')

const kycLabels = useCopy<string[]>('report.operating.kyc.rows')
const regionLabels = useCopy<string[]>('report.operating.regions.rows')
const monthLabels = useCopy<string[]>('report.operating.monthly.rows')

// Figures as of 30 October 2026. Labels come from the locale messages.
const KYC = [68, 64, 16, 9, 92]
const REGIONS = [
  [71, 0.458],
  [28, 0.181],
  [27, 0.174],
  [18, 0.116],
  [7, 0.045],
  [3, 0.019],
  [1, 0.006],
] as const
const MONTHLY = [8, 83, 50, 2, 106]

const kycRows = computed<BreakdownRow[]>(() => [
  ...KYC.map((count, index) => ({
    key: `kyc-${index}`,
    label: kycLabels.value[index],
    primary: String(count),
    share: count / 249,
  })),
  { key: 'kyc-total', label: kycLabels.value[5], primary: '249', secondary: t('report.operating.kyc.totalDetail') },
])

const regionRows = computed<BreakdownRow[]>(() =>
  REGIONS.map(([count, share], index) => ({
    key: `region-${index}`,
    label: regionLabels.value[index],
    primary: String(count),
    share,
  })),
)

const newUserRows = computed<BreakdownRow[]>(() =>
  MONTHLY.map((count, index) => ({
    key: `month-${index}`,
    label: monthLabels.value[index],
    primary: String(count),
    ...(index === MONTHLY.length - 1 ? { secondary: t('report.operating.monthly.octoberDetail') } : {}),
  })),
)

function approx(amount: string) {
  return t('report.operating.deposits.approx', { amount })
}

const depositRows = computed<BreakdownRow[]>(() => [
  { key: 'usd', label: 'USD', primary: '27,067.57' },
  { key: 'mxn', label: 'MXN', primary: '37,208.34', secondary: approx('US$2.0K') },
  { key: 'eur', label: 'EUR', primary: '4,208.18', secondary: approx('US$4.5K') },
  { key: 'gbp', label: 'GBP', primary: '285.29', secondary: approx('US$0.4K') },
  {
    key: 'total',
    label: t('report.operating.deposits.total'),
    primary: '≈ US$34K',
    secondary: t('report.operating.deposits.totalDetail'),
  },
])

const refundRows = computed<BreakdownRow[]>(() => [
  { key: 'usd', label: 'USD', primary: '17,123.00', share: 0.63 },
  { key: 'eur', label: 'EUR', primary: '904.64', secondary: approx('US$1.0K'), share: 0.21 },
  { key: 'mxn', label: 'MXN', primary: '4,400.00', secondary: approx('US$0.2K'), share: 0.12 },
  { key: 'gbp', label: 'GBP', primary: '5.00', share: 0.02 },
  {
    key: 'total',
    label: t('report.operating.deposits.total'),
    primary: '≈ US$18.3K',
    secondary: t('report.operating.refunds.totalDetail'),
    share: 0.54,
  },
])

const githubUrl = SHUTDOWN.githubUrl
</script>

<template>
  <div class="ir-page">
    <div class="marketing-container ir-page__inner">
      <header class="ir-masthead">
        <div class="ir-masthead__brand-row">
          <p class="ir-masthead__brand">Kura</p>
          <p class="ir-masthead__doc-type">{{ t('report.docType') }}</p>
        </div>

        <div class="ir-masthead__title-row">
          <div class="ir-masthead__titles">
            <h1 class="ir-masthead__title">{{ t('report.title') }}</h1>
            <p class="ir-masthead__subtitle">
              {{ t('report.subtitle') }}
            </p>
          </div>
        </div>

        <dl class="ir-masthead__meta">
          <div v-for="key in ['period', 'asOf', 'status']" :key="key" class="ir-masthead__meta-item">
            <dt>{{ t(`report.meta.${key}.label`) }}</dt>
            <dd>{{ t(`report.meta.${key}.value`) }}</dd>
          </div>
        </dl>
      </header>

      <InvestorReportSection index="01" :title="t('report.summary.title')" :lede="t('report.summary.lede')">
        <div class="ir-highlights">
          <InvestorMetricCard
            v-for="key in ['users', 'deposits', 'revenue']"
            :key="key"
            featured
            :label="t(`report.summary.kpis.${key}.label`)"
            :value="t(`report.summary.kpis.${key}.value`)"
            :detail="t(`report.summary.kpis.${key}.detail`)"
          />
        </div>
        <p class="ir-prose">
          {{ t('report.summary.prose') }}
        </p>
        <dl class="ir-facts">
          <div v-for="fact in summaryFacts" :key="fact.label" class="ir-facts__row">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection index="02" :title="t('report.operating.title')" :lede="t('report.operating.lede')">
        <div class="ir-composition">
          <div class="ir-composition__stack">
            <InvestorBreakdownCard
              :title="t('report.operating.kyc.title')"
              :name-header="t('report.operating.kyc.name')"
              :value-header="t('report.operating.kyc.value')"
              :rows="kycRows"
            />
            <InvestorBreakdownCard
              :title="t('report.operating.regions.title')"
              :name-header="t('report.operating.regions.name')"
              :value-header="t('report.operating.regions.value')"
              :rows="regionRows"
            />
          </div>
          <div class="ir-composition__stack">
            <InvestorBreakdownCard
              :title="t('report.operating.monthly.title')"
              :name-header="t('report.operating.monthly.name')"
              :value-header="t('report.operating.monthly.value')"
              :rows="newUserRows"
            />
            <InvestorBreakdownCard
              :title="t('report.operating.deposits.title')"
              :name-header="t('report.operating.deposits.name')"
              :value-header="t('report.operating.deposits.value')"
              :rows="depositRows"
            />
            <InvestorBreakdownCard
              :title="t('report.operating.refunds.title')"
              :name-header="t('report.operating.refunds.name')"
              :value-header="t('report.operating.refunds.value')"
              :rows="refundRows"
            />
          </div>
        </div>
        <p class="ir-footnote-inline">
          {{ t('report.operating.footnote') }}
        </p>
        <h3 class="ir-subhead">{{ t('report.operating.revenueTitle') }}</h3>
        <dl class="ir-facts">
          <div v-for="fact in revenueFacts" :key="fact.label" class="ir-facts__row">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection index="03" :title="t('report.model.title')" :lede="t('report.model.lede')">
        <dl class="ir-facts">
          <div v-for="item in businessModel" :key="item.label" class="ir-facts__row">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection index="04" :title="t('report.timeline.title')">
        <dl class="ir-facts">
          <div v-for="item in timeline" :key="item.label" class="ir-facts__row">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </InvestorReportSection>

      <InvestorReportSection index="05" :title="t('report.lessons.title')" :lede="t('report.lessons.lede')">
        <ol class="ir-notes">
          <li v-for="(lesson, index) in lessons" :key="lesson.title">
            <span class="ir-notes__mark">{{ index + 1 }}</span>
            <span>
              <strong>{{ lesson.title }}</strong>
              {{ lesson.text }}
            </span>
          </li>
        </ol>
      </InvestorReportSection>

      <InvestorReportSection index="06" :title="t('report.reading.title')">
        <ul class="ir-links">
          <li>
            <NuxtLinkLocale to="/about">{{ t('report.reading.founder.link') }}</NuxtLinkLocale>
            <span>{{ t('report.reading.founder.text') }}</span>
          </li>
          <li>
            <NuxtLinkLocale to="/blog">{{ t('report.reading.blog.link') }}</NuxtLinkLocale>
            <span>{{ t('report.reading.blog.text') }}</span>
          </li>
          <li>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer">{{ t('report.reading.source.link') }}</a>
            <span>{{ t('report.reading.source.text') }}</span>
          </li>
          <li>
            <NuxtLinkLocale to="/docs">{{ t('report.reading.docs.link') }}</NuxtLinkLocale>
            <span>{{ t('report.reading.docs.text') }}</span>
          </li>
        </ul>
      </InvestorReportSection>

      <footer class="ir-correspondence">
        <div class="ir-correspondence__grid">
          <div>
            <p class="ir-correspondence__label">{{ t('report.correspondence.label') }}</p>
            <h2 class="ir-correspondence__title">{{ t('report.correspondence.title') }}</h2>
            <p class="ir-correspondence__body">
              {{ t('report.correspondence.text') }}
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
