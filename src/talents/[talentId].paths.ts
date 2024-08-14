import talents from './talent.json'

export default {
  paths: talents.map((p) => {
    return {
      params: {
        talentId: p.id
      }
    }
  })
}
