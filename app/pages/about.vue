<script setup lang="ts">
useSeoMeta({
  title: 'About This Demo',
  description: 'Learn how this fictional business website demonstrates a focused online presence for local service companies.',
})

const principles = [
  {
    number: '01',
    title: 'Clear Positioning',
    text: 'Visitors can understand the business, its services, and its value within a few seconds.',
  },
  {
    number: '02',
    title: 'Confident Design',
    text: 'Strong typography, original branding, and useful imagery create credibility without visual clutter.',
  },
  {
    number: '03',
    title: 'Simple Actions',
    text: 'Focused calls to action help interested customers know exactly where to go next.',
  },
]
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <section class="relative overflow-hidden bg-[var(--color-bg)] pt-24 lg:pt-32">
        <div
          class="pointer-events-none absolute right-[-10%] top-[-40%] size-[800px]
                 rounded-full bg-[var(--color-primary)] opacity-[0.07] blur-[150px]"
        />
        <div class="relative mx-auto max-w-[1440px] px-6 pb-20 lg:px-10 lg:pb-28">
          <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div
                class="mb-6 flex items-center gap-3 text-xs font-bold uppercase
                       tracking-[0.24em] text-[var(--color-primary)]"
              >
                <span class="h-px w-8 bg-[var(--color-primary)]" />
                About This Demo
              </div>
              <h1
                class="max-w-4xl text-5xl font-black leading-[0.92]
                       tracking-[-0.055em] sm:text-6xl lg:text-8xl"
              >
                A business website
                <span class="block text-[var(--color-primary)]">without the noise.</span>
              </h1>
            </div>
            <div class="max-w-xl lg:justify-self-end">
              <p class="text-lg leading-8 text-[var(--color-text-muted)]">
                Northline Equipment is a fictional identity created to show
                how a straightforward website can make a specialist business
                feel established, capable, and easy to contact.
              </p>
              <p class="mt-5 leading-7 text-[var(--color-text-muted)]">
                The name, logo, copy, and interface are demonstration content.
                A real project would be shaped around your business and your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div class="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div class="grid gap-px bg-[var(--color-border)] lg:grid-cols-3">
            <article
              v-for="principle in principles"
              :key="principle.number"
              class="bg-[var(--color-bg)] p-8 lg:p-10"
            >
              <div class="text-xs font-black text-[var(--color-primary)]">
                {{ principle.number }}
              </div>
              <h2 class="mt-8 text-3xl font-black tracking-[-0.035em]">
                {{ principle.title }}
              </h2>
              <p class="mt-4 leading-7 text-[var(--color-text-muted)]">
                {{ principle.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[var(--color-bg)]">
        <div
          class="mx-auto grid max-w-[1440px] gap-10 px-6 py-20
                 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-24"
        >
          <div>
            <div
              class="text-xs font-bold uppercase tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              Your Business, Your Identity
            </div>
            <h2 class="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] lg:text-5xl">
              Need a simple website that feels like yours?
            </h2>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex w-full items-center justify-center bg-[var(--color-primary)]
                   px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5
                   hover:opacity-90 sm:w-auto"
          >
            Start a Project <span class="ml-3">→</span>
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
