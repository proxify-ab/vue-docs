<script setup lang="ts">
import { ref } from 'vue'
import PartnerHero from './PartnerHero.vue'
import PartnerList from './PartnerList.vue'
import PartnerJoin from './PartnerJoin.vue'
import data from '../partners.json'
import { Partner } from './type'
import PageSearchableListLayout from '@theme/components/PageSearchableListLayout.vue'


const partners = ref<Partner[]>(data as Partner[])

const filterPartner = (partner: Partner, query: string): boolean => {
  const lowerQuery = query.toLowerCase()
  return partner.name.toLowerCase().includes(lowerQuery) ||
    partner.region.some(region => region.toLowerCase().includes(lowerQuery))
}
</script>

<template>
  <PageSearchableListLayout
    :title="'Browse All Partners'"
    :items="partners"
    searchPlaceholder="Search partners by name or region"
    :filterFunction="filterPartner"
  >
    <template #hero="{ title }">
      <PartnerHero :title="title" />
    </template>

    <template #list="{ filter }">
      <PartnerList :filter="filter" />
    </template>

    <template #join>
      <PartnerJoin />
    </template>
  </PageSearchableListLayout>
</template>
