---
page: true
footer: false
---

<script setup>
import { useData } from 'vitepress'
import Page from './components/TalentPage.vue'

const { page } = useData()
</script>

<Page :talent="page.params.talentId" />
