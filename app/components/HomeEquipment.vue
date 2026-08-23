<script setup lang="ts">
const brands = [
  'Bobcat',
  'Crown',
  'Genie',
  'UniCarriers',
  'Landoll',
  'Robopac',
  'PowerBoss',
]

const pairedBrands = brands.slice(0, -1)
const finalBrand = brands.at(-1)

const categories = [
  {
    number: '01',
    title: 'Forklifts',
    description:
      'Electric and internal combustion forklifts for warehouses, distribution centers, manufacturing, and demanding material handling applications.',
    image: '/images/equipment/category-forklifts.webp',
    to: '/equipment',
  },
  {
    number: '02',
    title: 'Warehouse Equipment',
    description:
      'Reach trucks, pallet equipment, narrow aisle solutions, and equipment designed to make better use of every square foot.',
    image: '/images/equipment/category-warehouse.webp',
    to: '/equipment',
  },
  {
    number: '03',
    title: 'Specialty Equipment',
    description:
      'Aerial equipment, floor care, stretch wrapping, and specialized solutions for operations that need more than a forklift.',
    image: '/images/equipment/category-specialty.webp',
    to: '/equipment',
  },
]
</script>

<template>
  <section class="bg-[var(--color-bg)]">
    <div class="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
      <!-- Intro -->
      <div
        class="grid gap-10 border-b border-[var(--color-border)]
               pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
      >
        <div>
          <div
            class="mb-5 flex items-center gap-3 text-xs font-bold
                   uppercase tracking-[0.24em]
                   text-[var(--color-primary)]"
          >
            <span class="h-px w-8 bg-[var(--color-primary)]" />
            Equipment
          </div>

          <h2
            class="max-w-4xl text-4xl font-black tracking-[-0.04em]
                   sm:text-5xl lg:text-6xl"
          >
            Built for the way
            <span class="text-[var(--color-primary)]">
              you work.
            </span>
          </h2>
        </div>

        <p
          class="max-w-lg text-base leading-7
                 text-[var(--color-text-muted)] lg:justify-self-end"
        >
          From everyday warehouse workhorses to specialized material
          handling equipment, JVE helps match the right machine to
          the job.
        </p>
      </div>

      <!-- Brands -->
      <div class="py-12">
        <div
          class="mb-7 text-[10px] font-bold uppercase
                 tracking-[0.24em] text-[var(--color-text-muted)]"
        >
          Equipment from leading manufacturers
        </div>

        <!-- Mobile / tablet -->
        <div class="lg:hidden">
          <div class="grid grid-cols-2">
            <div
              v-for="brand in pairedBrands"
              :key="brand"
              class="flex min-h-24 items-center justify-center
                     border-b border-r border-[var(--color-border)]
                     px-5 text-center text-lg font-black
                     tracking-[-0.02em]
                     text-[var(--color-text-muted)]
                     transition
                     odd:border-l
                     first:border-t
                     [&:nth-child(2)]:border-t
                     hover:bg-[var(--color-surface)]
                     hover:text-[var(--color-text)]"
            >
              {{ brand }}
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="flex min-h-24 w-1/2 items-center justify-center
                     border-x border-b border-[var(--color-border)]
                     px-5 text-center text-lg font-black
                     tracking-[-0.02em]
                     text-[var(--color-text-muted)]
                     transition
                     hover:bg-[var(--color-surface)]
                     hover:text-[var(--color-text)]"
            >
              {{ finalBrand }}
            </div>
          </div>
        </div>

        <!-- Desktop -->
        <div class="hidden grid-cols-7 lg:grid">
          <div
            v-for="brand in brands"
            :key="brand"
            class="flex min-h-24 items-center justify-center
                   border-y border-r border-[var(--color-border)]
                   px-5 text-center text-lg font-black
                   tracking-[-0.02em]
                   text-[var(--color-text-muted)]
                   transition
                   first:border-l
                   hover:bg-[var(--color-surface)]
                   hover:text-[var(--color-text)]"
          >
            {{ brand }}
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div
        class="mt-8 grid gap-px bg-[var(--color-border)]
               lg:grid-cols-3"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.title"
          :to="category.to"
          class="group relative min-h-[500px] overflow-hidden
                 bg-[var(--color-surface)]"
        >
          <img
            :src="category.image"
            :alt="category.title"
            class="absolute inset-0 size-full object-cover
                   opacity-40 transition duration-500
                   group-hover:scale-[1.035]
                   group-hover:opacity-50"
          >

          <div
            class="absolute inset-0
                   bg-gradient-to-t from-[var(--color-bg)]
                   via-[var(--color-bg)]/55 to-transparent"
          />

          <div
            class="absolute inset-x-0 bottom-0 z-10 p-8
                   lg:p-10"
          >
            <div
              class="mb-6 text-xs font-bold tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              {{ category.number }}
            </div>

            <h3
              class="text-3xl font-black tracking-[-0.03em]
                     lg:text-4xl"
            >
              {{ category.title }}
            </h3>

            <p
              class="mt-4 max-w-sm leading-7
                     text-[var(--color-text-muted)]"
            >
              {{ category.description }}
            </p>

            <div
              class="mt-8 flex items-center gap-3 text-sm font-bold"
            >
              View Equipment

              <span
                class="transition-transform duration-300
                       group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
