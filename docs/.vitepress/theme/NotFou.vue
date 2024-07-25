<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { page } = useData()
</script>

<template>
  <Layout>
    <template #not-found>
         <h1>Custom Layout!</h1>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>
  <Content v-else />
    </template>
  </Layout>
</template>