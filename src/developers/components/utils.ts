export function getDeveloperProfileImage(img: string | undefined, id: number) {
  return `/images/developers/${img || `${id}.jpg`}`
}

// Common UTM parameters
const utmSource = 'partnership'
const utmMedium = 'vuejs'

// Utility function to generate UTM URLs
export function generateUTMUrl(
  baseUrl: string,
  page: string = '/developers/'
): string {
  // Replace "/" with "-" and remove extra dashes
  let cleanedPage = page.replace(/\//g, '-').replace(/^-+|-+$/g, '')

  const url = new URL(baseUrl)
  url.searchParams.append('utm_source', utmSource)
  url.searchParams.append('utm_medium', utmMedium)
  url.searchParams.append('utm_campaign', cleanedPage)
  return url.toString()
}

