<script setup lang="ts">
const contactItems = [
  {
    label: 'Best for',
    value: 'Local service businesses',
    href: '/contact',
  },
  {
    label: 'Approach',
    value: 'Simple, focused, credible',
    href: '/contact',
  },
  {
    label: 'Next step',
    value: 'Tell us about your website',
    href: '/contact',
  },
]
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-[var(--color-footer-bg)]"
  >
    <div
      class="pointer-events-none absolute -right-24 -top-32
             size-[620px] rounded-full bg-white/10 blur-[120px]"
    />

    <div
      class="relative mx-auto max-w-[1440px]
             px-6 py-24 lg:px-10 lg:py-28"
    >
      <div
        class="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]
               lg:items-end"
      >
        <div>
          <div
            class="mb-5 flex items-center gap-3 text-xs font-bold
                   uppercase tracking-[0.24em] text-white/70"
          >
            <span class="h-px w-8 bg-white/70" />
            Like This Website?
          </div>

          <h2
            class="max-w-4xl text-4xl font-black
                   tracking-[-0.04em] text-white
                   sm:text-5xl lg:text-7xl"
          >
            Put a clear, modern site
            to work for your business.
          </h2>

          <p
            class="mt-7 max-w-2xl text-lg leading-8 text-white/75"
          >
            This fictional brand demonstrates what a focused website can
            do for a real local business. Your version would be built
            around your services, customers, and identity.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <NuxtLink
              to="/contact"
              class="inline-flex w-full items-center justify-center
                     bg-white px-7 py-4 text-sm font-black
                     text-[var(--color-primary)]
                     transition hover:-translate-y-0.5
                     sm:w-auto"
            >
              Start Your Website
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="inline-flex w-full items-center justify-center
                     border border-white/30 px-7 py-4
                     text-sm font-bold text-white
                     transition hover:bg-white/10
                     sm:w-auto"
            >
              View the Inquiry Page
            </NuxtLink>
          </div>
        </div>

        <div
          class="border-l border-t border-white/20
                 lg:justify-self-end lg:min-w-[420px]"
        >
          <a
            v-for="item in contactItems"
            :key="item.label"
            :href="item.href"
            class="group flex items-center justify-between
                   border-b border-r border-white/20
                   px-6 py-5 text-white"
          >
            <div>
              <div
                class="text-[10px] font-bold uppercase
                       tracking-[0.2em] text-white/55"
              >
                {{ item.label }}
              </div>

              <div class="mt-1 font-bold">
                {{ item.value }}
              </div>
            </div>

            <span
              class="text-xl transition-transform
                     group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
