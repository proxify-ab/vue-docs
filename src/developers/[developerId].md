---
page: true
footer: false
---

<script setup>
import { useData } from 'vitepress'
import Page from './components/DeveloperPage.vue'

const { page } = useData()
</script>

<Page :developerId="page.params.developerId" />
