<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} · Northline Equipment` : 'Northline Equipment · Website Demo',
  meta: [
    {
      name: 'description',
      content: 'A fictional equipment company website demonstrating a clean, focused web presence for small service businesses.',
    },
  ],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
})
</script>

<template>
  <div>
    <NuxtPage />
    <ThemeSwitcher />
  </div>
</template>
