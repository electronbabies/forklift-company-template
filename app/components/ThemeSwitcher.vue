<script setup lang="ts">
const themes = [
  { id: 'dark-blue', label: 'Dark Blue' },
  { id: 'dark-yellow', label: 'Dark Yellow' },
  { id: 'mixed-yellow', label: 'Mixed Yellow' },
  { id: 'white-yellow', label: 'White Yellow' },
/*  { id: 'ron-swanson', label: 'Ron Swanson' }, */
]

const currentTheme = ref('dark-blue')

function setTheme(theme: string) {
  currentTheme.value = theme
  document.documentElement.dataset.theme = theme
}

onMounted(() => {
  setTheme(currentTheme.value)
})
</script>

<template>
  <div
    class="fixed bottom-5 right-5 z-[100]
           flex flex-col gap-2
           border border-[var(--color-border)]
           bg-[var(--color-surface)]/95
           p-2 shadow-2xl backdrop-blur"
  >
    <button
      v-for="theme in themes"
      :key="theme.id"
      type="button"
      class="px-4 py-2 text-left text-xs font-bold
             transition hover:bg-[var(--color-surface-alt)]"
      :class="
        currentTheme === theme.id
          ? 'text-[var(--color-primary)]'
          : 'text-[var(--color-text-muted)]'
      "
      @click="setTheme(theme.id)"
    >
      {{ theme.label }}
    </button>
  </div>
</template>
