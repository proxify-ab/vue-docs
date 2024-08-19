export function getDeveloperProfileImage(img: string | undefined, id: number) {
  return `/images/developers/${img || `${id}.jpg`}`
}

