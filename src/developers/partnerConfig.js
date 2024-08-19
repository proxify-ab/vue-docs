import partnerData from '../partners/partners.json'

const partnerName = 'Proxify'
const partner = partnerData.find(partner => partner.name === partnerName)

const partnerConfig = {
  // Partner information
  partnerName: partner?.name,
  logo: partner?.logo,
  flipLogo: partner?.flipLogo || false,

  // Links and Contact Information
  companyWebsiteLink: partner?.website?.url,
  companyWebsiteLabel: partner?.website?.text,
  companyEmail: partner?.contact,
  applyPage: partner?.hiring,
  contactPage: partner.contactPage,
  UTMTags: {},

  // Hero Section
  pageHeroBanner: {
    title: 'Vue Developer',
    lead: `Vue Developer are certified individual freelancers. Payments, compliance, and vetting are administrated by our partner <a class="link" href="${partner?.website?.url || '#'}" target="_blank">${partner?.name || 'Our Partner'}</a>. Interested in joining the list? <a class="link" href="${partner?.hiring || '#'}" target="_blank">Apply here</a>.`
  },

  // Footer Configuration
  footer: {
    text: `This highly vetted developer is brought to you by Vue’s partner:`,
    email: 'vue.teammates@proxify.io',
    phone: '+44 20 4525 4787',
    websiteVueLink: partner?.website?.url + 'vue',
    websiteVueLabel: partner?.website?.text + '/vue'
  },

  // Proficiency Section
  proficiencies: {
    skillsPerCard: 5
  }
}

export default partnerConfig
