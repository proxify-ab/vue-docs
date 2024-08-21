---
page: true
footer: false
title: Vue Developers
---

<script setup>
import { useData } from 'vitepress'
import Page from './components/DeveloperPage.vue'

const { page } = useData()
</script>

<Page :developerId="page.params.developerId" :developerSlug="page.params.developerSlug" />
