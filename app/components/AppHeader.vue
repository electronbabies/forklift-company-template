<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'overlay' | 'solid'
  }>(),
  {
    variant: 'overlay',
  },
)

const navigation = [
  { label: 'Equipment', to: '/equipment' },
  { label: 'Rentals', to: '/rentals' },
  { label: 'Service', to: '/service' },
  { label: 'Parts', to: '/parts' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <header
    :class="[
      'inset-x-0 top-0 z-50 border-b border-[var(--color-border)]',
      variant === 'overlay'
        ? 'absolute'
        : 'relative bg-[var(--color-header)]',
    ]"
  >
    <div
      class="mx-auto flex h-20 max-w-[1440px] items-center
             justify-between px-6 lg:px-10"
    >
      <NuxtLink to="/" class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-sm
                 bg-[var(--color-primary)] text-lg font-black text-white"
        >
          JV
        </div>

        <div class="leading-none">
          <div class="text-lg font-black tracking-tight">
            JV EQUIPMENT
          </div>

          <div
            class="mt-1 text-[10px] font-semibold uppercase
                   tracking-[0.22em] text-[var(--color-text-muted)]"
          >
            Material Handling
          </div>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="text-sm font-semibold text-[var(--color-text-muted)]
                 transition hover:text-[var(--color-text)]"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <a
        href="#contact"
        class="hidden rounded-sm bg-[var(--color-primary)] px-5 py-3
               text-sm font-bold text-white transition hover:opacity-90
               lg:inline-flex"
      >
        Contact JVE
      </a>

      <button
        type="button"
        aria-label="Open navigation"
        class="lg:hidden"
      >
        <span class="block h-0.5 w-6 bg-current" />
        <span class="mt-1.5 block h-0.5 w-6 bg-current" />
        <span class="mt-1.5 block h-0.5 w-6 bg-current" />
      </button>
    </div>
  </header>
</template>
