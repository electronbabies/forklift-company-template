<script setup lang="ts">
useSeoMeta({
  title: 'Start a Project',
  description: 'Share the basics of the simple business website you need.',
})

const websiteGoals = [
  'New Website',
  'Website Refresh',
  'Landing Page',
  'Not Sure Yet',
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
        <div
          class="relative mx-auto grid max-w-[1440px] gap-12 px-6 pb-20
                 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-10 lg:pb-28"
        >
          <div>
            <div
              class="mb-6 flex items-center gap-3 text-xs font-bold uppercase
                     tracking-[0.24em] text-[var(--color-primary)]"
            >
              <span class="h-px w-8 bg-[var(--color-primary)]" />
              Start a Project
            </div>
            <h1
              class="max-w-3xl text-5xl font-black leading-[0.92]
                     tracking-[-0.055em] sm:text-6xl xl:text-8xl"
            >
              Your business.
              <span class="block text-[var(--color-primary)]">Clearly online.</span>
            </h1>
            <p class="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
              Share a little about what you do and what your website needs to
              accomplish. No technical brief required.
            </p>
            <div
              class="mt-10 border-l-2 border-[var(--color-primary)] pl-5
                     text-sm leading-6 text-[var(--color-text-muted)]"
            >
              This form is a front-end demo and does not submit yet. Connect it
              to your preferred form service before launch.
            </div>
          </div>

          <div class="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
            <div class="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Project Details
            </div>
            <h2 class="mt-3 text-3xl font-black tracking-[-0.035em]">Tell us what you need.</h2>

            <form class="mt-8 grid gap-5" @submit.prevent>
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="grid gap-2">
                  <span class="text-xs font-bold uppercase tracking-[0.14em]">Name</span>
                  <input
                    type="text"
                    name="name"
                    autocomplete="name"
                    class="min-h-12 border border-[var(--color-border)] bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)] outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>
                <label class="grid gap-2">
                  <span class="text-xs font-bold uppercase tracking-[0.14em]">Business</span>
                  <input
                    type="text"
                    name="business"
                    autocomplete="organization"
                    class="min-h-12 border border-[var(--color-border)] bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)] outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>
              </div>

              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-[0.14em]">Email</span>
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  class="min-h-12 border border-[var(--color-border)] bg-[var(--color-bg)]
                         px-4 text-[var(--color-text)] outline-none transition
                         focus:border-[var(--color-primary)]"
                >
              </label>

              <fieldset>
                <legend class="mb-3 text-xs font-bold uppercase tracking-[0.14em]">
                  What are you looking for?
                </legend>
                <div class="flex flex-wrap gap-2">
                  <label v-for="goal in websiteGoals" :key="goal" class="cursor-pointer">
                    <input type="radio" name="website_goal" :value="goal" class="peer sr-only">
                    <span
                      class="inline-flex border border-[var(--color-border)] px-4 py-3 text-sm
                             font-bold text-[var(--color-text-muted)] transition
                             hover:border-[var(--color-primary)] peer-checked:border-[var(--color-primary)]
                             peer-checked:bg-[var(--color-primary)] peer-checked:text-white"
                    >
                      {{ goal }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-[0.14em]">About the project</span>
                <textarea
                  name="details"
                  rows="6"
                  placeholder="What does your business do, and what should the website help customers do?"
                  class="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3
                         text-[var(--color-text)] outline-none transition
                         placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
                />
              </label>

              <button
                type="submit"
                class="mt-2 inline-flex w-full items-center justify-center bg-[var(--color-primary)]
                       px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5
                       hover:opacity-90 sm:w-auto sm:justify-self-start"
              >
                Send Inquiry <span class="ml-3">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
