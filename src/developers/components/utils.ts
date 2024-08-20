/**
 * Get the URL of a developer profile image.
 * @param img - The image filename or undefined.
 * @param id - The developer's ID to use as a fallback image filename.
 * @returns The URL of the developer's profile image.
 */
export function getDeveloperProfileImage(img: string | undefined = undefined, id: number): string {
  return `/images/developers/${img ?? `${id}.jpg`}`
}

/**
 * Generate a UTM-encoded URL for tracking purposes.
 * @param baseUrl - The base URL to append UTM parameters to.
 * @param page - The page path to be used for the UTM campaign.
 * @param utmSource - The UTM source parameter.
 * @param utmMedium - The UTM medium parameter.
 * @returns The full URL with UTM parameters.
 */
export function generateUTMUrl(
  baseUrl: string,
  page: string = '/developers/',
  utmSource: string = 'partnership',
  utmMedium: string = 'vuejs'
): string {
  if (!baseUrl) {
    console.warn('Base URL is empty. Returning an empty string.')
    return ''
  }

  const cleanedPage = page.replace(/\//g, '-').replace(/^-+|-+$/g, '')

  const url = new URL(baseUrl)
  url.searchParams.append('utm_source', utmSource)
  url.searchParams.append('utm_medium', utmMedium)
  url.searchParams.append('utm_campaign', cleanedPage)

  return url.toString()
}

/**
 * Truncate a combined string from an array of text to a specified length.
 * @param textArray - The array of strings to combine and truncate.
 * @param maxLength - The maximum allowed length of the resulting string.
 * @param ellipsis - The string to append to truncated text, defaulting to '...'.
 * @returns The truncated string with ellipsis if truncation occurs.
 */
export function truncateTextFromArray(
  textArray: string[],
  maxLength: number,
  ellipsis: string = '...'
): string {
  if (textArray.length === 0) return ''

  const combinedText = textArray.join(' ')
  if (combinedText.length <= maxLength) {
    return combinedText
  }

  const lastSpaceIndex = combinedText.lastIndexOf(' ', maxLength)
  return lastSpaceIndex > 0
    ? `${combinedText.slice(0, lastSpaceIndex)}${ellipsis}`
    : `${combinedText.slice(0, maxLength)}${ellipsis}`
}
