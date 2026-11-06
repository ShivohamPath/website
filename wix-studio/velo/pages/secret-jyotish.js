// ═══════════════════════════════════════════════════════════════
// SHIVOHAMPATH · THE SECRET SIDE OF JYOTISH · PAGE CODE
// ═══════════════════════════════════════════════════════════════
// Wix's "Structured data markup" box wouldn't save on this page, so the
// search data (seo/secret-jyotish-course-schema.json) is set from here
// instead. Keep the two in step if the course details change.
// ═══════════════════════════════════════════════════════════════

import wixSeoFrontend from 'wix-seo-frontend';

const COURSE = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'The Secret Side of Jyotish',
  description: 'A live Saturday cohort: birth-time rectification, the deities of the divisions, the D20, the D60, past-life methods, Bhrigu Nandi Nadi and the nadiamsa. Every method traced to its text.',
  url: 'https://www.shivohampath.com/the-secret-side-of-jyotish',
  inLanguage: 'en',
  provider: { '@type': 'Organization', name: 'Shivoham Path', url: 'https://www.shivohampath.com' },
  instructor: { '@type': 'Person', name: 'Veena Maheshwari' },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    startDate: '2027-01-09',
    endDate: '2027-07-10',
    courseSchedule: { '@type': 'Schedule', repeatFrequency: 'P1W', byDay: 'https://schema.org/Saturday' }
  },
  offers: {
    '@type': 'Offer',
    price: '17500',
    priceCurrency: 'INR',
    category: 'Paid',
    availabilityStarts: '2026-12-01',
    availabilityEnds: '2027-01-06'
  }
};

$w.onReady(function () {
  wixSeoFrontend.setStructuredData([COURSE]);
});
