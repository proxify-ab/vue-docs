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
  const url = new URL(baseUrl)
  url.searchParams.append('utm_source', utmSource)
  url.searchParams.append('utm_medium', utmMedium)
  url.searchParams.append('utm_campaign', page)
  return url.toString()
}
