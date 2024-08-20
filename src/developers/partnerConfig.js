import partnerData from '../partners/partners.json'

const partnerName = 'Proxify'
const partner = partnerData.find(partner => partner.name === partnerName)

const websiteLabel = 'proxify.io'
const websiteUrl = 'https://proxify.io/'
const applyUrl = 'https://career.proxify.io/apply'
const hireUrl = 'https://proxify.io/hire-vuejs'


const partnerConfig = {
  // Partner information
  partnerName: partner?.name,
  logo: partner?.logo,
  flipLogo: partner?.flipLogo || false,

  // Partner website
  websiteUrl: websiteUrl,
  hireUsButtonUrl: hireUrl,

  // Hero Section
  pageHeroBanner: {
    title: 'Vue Developers',
    description: 'Vue Developers are certified individual freelancers. Payments, compliance and vetting are administrated by our partner Proxify. Interested to join the list?',
    applyButton: {
      url: applyUrl,
      label: 'Apply here'
    }
  },

  // Hero Section
  pageJoinSection: {
    title: 'Become a listed developer',
    description: 'Get a long-term part-time or full-time position at company looking for a Vue.js developer.',
    applyButton: {
      url: applyUrl,
      label: 'Apply to join'
    }
  },

  // Footer Configuration
  pageFooter: {
    text: `This highly vetted developer is brought to you by Vue’s partner:`,
    email: 'vue.teammates@proxify.io',
    phone: '+44 20 4525 4787',
    websiteVueLink: websiteUrl + 'vue',
    websiteVueLabel: websiteLabel + '/vue'
  },

  // Proficiency Section
  proficiencies: {
    skillsPerCard: 5
  }
}

export default partnerConfig
