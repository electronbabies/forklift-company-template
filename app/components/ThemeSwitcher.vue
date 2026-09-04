<script setup lang="ts">
const themes = [
  { id: 'dark-blue', label: 'Dark Blue' },
  { id: 'dark-yellow', label: 'Dark Yellow' },
  { id: 'mixed-yellow', label: 'Mixed Yellow' },
  { id: 'white-yellow', label: 'Coastal Light' },
/*  { id: 'ron-swanson', label: 'Ron Swanson' }, */
]

const currentTheme = ref('dark-blue')
const open = ref(false)

function setTheme(theme: string) {
  currentTheme.value = theme
  document.documentElement.dataset.theme = theme
  open.value = false
}

onMounted(() => {
  setTheme(currentTheme.value)
})
</script>

<template>
  <div
    class="fixed bottom-[calc(var(--demo-bar-height)+0.75rem)] right-3 z-[100]"
  >
    <div
      v-if="open"
      class="absolute bottom-full right-0 mb-2 flex min-w-40 flex-col gap-1
             border border-[var(--color-border)] bg-[var(--color-surface)]/95
             p-2 shadow-2xl backdrop-blur"
    >
      <button
        v-for="theme in themes"
        :key="theme.id"
        type="button"
        class="whitespace-nowrap px-3 py-2 text-left text-xs font-bold"
        :class="currentTheme === theme.id
          ? 'text-[var(--color-primary)]'
          : 'text-[var(--color-text-muted)]'"
        @click="setTheme(theme.id)"
      >
        {{ theme.label }}
      </button>
    </div>
    <button
      type="button"
      class="border border-[var(--color-border)] bg-[var(--color-surface)]/95
             px-3 py-2 text-xs font-bold shadow-xl backdrop-blur"
      :aria-expanded="open"
      @click="open = !open"
    >
      Themes
    </button>
  </div>
</template>
