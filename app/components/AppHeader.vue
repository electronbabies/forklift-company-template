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

const mobileNavigationOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  mobileNavigationOpen.value = false
})
</script>

<template>
  <div
    class="fixed bottom-0 inset-x-0 z-[90] flex min-h-[var(--demo-bar-height)]
           items-center justify-center bg-[var(--color-primary)] px-4 py-2 text-center text-[10px]
           font-black uppercase tracking-[0.18em] text-white"
  >
    <span class="hidden min-[480px]:inline">
      Fictional website demo · Built for small service businesses
    </span>
    <span class="min-[480px]:hidden">Fictional website demo</span>
  </div>
  <header
    :class="[
      'inset-x-0 top-0 z-50 border-b border-[var(--color-border)]',
      variant === 'overlay'
        ? 'absolute text-[var(--color-overlay-header-text)] [--logo-muted:var(--color-overlay-header-muted)]'
        : 'relative bg-[var(--color-header)] text-[var(--color-header-text)] [--logo-muted:var(--color-header-muted)]',
    ]"
  >
    <div
      class="mx-auto flex h-20 max-w-[1440px] items-center
             justify-between px-6 lg:px-10"
    >
      <NuxtLink to="/" aria-label="Northline Equipment home">
        <BrandLogo />
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="text-sm font-semibold transition"
          :class="variant === 'overlay'
            ? 'text-[var(--color-overlay-header-muted)] hover:text-[var(--color-overlay-header-text)]'
            : 'text-[var(--color-header-muted)] hover:text-[var(--color-header-text)]'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
        to="/contact"
        class="hidden rounded-sm bg-[var(--color-primary)] px-5 py-3
               text-sm font-bold text-white transition hover:opacity-90
               lg:inline-flex"
      >
        Get a Quote
      </NuxtLink>

      <button
        type="button"
        aria-label="Open navigation"
        aria-controls="mobile-navigation"
        :aria-expanded="mobileNavigationOpen"
        class="lg:hidden"
        @click="mobileNavigationOpen = !mobileNavigationOpen"
      >
        <span class="block h-0.5 w-6 bg-current" />
        <span class="mt-1.5 block h-0.5 w-6 bg-current" />
        <span class="mt-1.5 block h-0.5 w-6 bg-current" />
      </button>
    </div>

    <nav
      v-if="mobileNavigationOpen"
      id="mobile-navigation"
      class="border-t border-[var(--color-border)] bg-[var(--color-header)]
             px-6 py-5 text-[var(--color-header-text)] lg:hidden"
    >
      <div class="mx-auto grid max-w-[1440px] gap-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="border-b border-[var(--color-border)] py-3 font-semibold"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="mt-3 inline-flex justify-center rounded-sm bg-[var(--color-primary)]
                 px-5 py-3 font-bold text-white"
        >
          Get a Quote
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
