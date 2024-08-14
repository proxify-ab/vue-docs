<script setup lang="ts">
import { ref } from 'vue'
import TalentHero from './TalentHero.vue'
import TalentJoin from './TalentJoin.vue'
import data from '../talent.json'
import { TalentProfile } from './type'
import PageSearchableListLayout from '@theme/components/PageSearchableListLayout.vue'
import CardList from '@theme/components/CardList.vue'
import TalentCard from './TalentCard.vue'

const talents = ref<TalentProfile[]>(data as TalentProfile[])

const filterTalent = (talent: TalentProfile, query: string): boolean => {
  const lowerQuery = query.toLowerCase()

  return (
    talent.name.toLowerCase().includes(lowerQuery) ||
    talent.location.toLowerCase().includes(lowerQuery) ||
    talent.proficiencies.some(proficiency =>
      proficiency.toLowerCase().includes(lowerQuery)
    )
  )
}
</script>

<template>
  <PageSearchableListLayout
    title="Browse All Talents"
    :items="talents"
    searchPlaceholder="Search talents by name, region or skill"
    :filterFunction="filterTalent"
  >
    <template #hero="{ title }">
      <TalentHero :title="title" />
    </template>

    <template #list="{ filter }">
      <CardList
        :items="talents"
        :filter="filter"
        :cardComponent="TalentCard"
      />
    </template>

    <template #join>
      <TalentJoin />
    </template>
  </PageSearchableListLayout>
</template>
