export function getTalentProfileImage(img: string | undefined, id: number) {
  return `/images/talents/${img || `${id}.jpg`}`
}

