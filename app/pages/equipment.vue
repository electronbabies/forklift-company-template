<script setup lang="ts">
const categories = [
  'All Equipment',
  'Forklifts',
  'Warehouse',
  'Aerial',
  'Floor Care',
  'Specialty',
]

const equipment = [
  {
    brand: 'Bobcat',
    model: 'B25X-7 Plus',
    category: 'Forklifts',
    type: 'Electric Counterbalance',
    capacity: '5,000 lb',
    power: 'Electric',
    image: '/images/equipment/models/bobcat-b25x7-plus.webp',
  },
  {
    brand: 'Bobcat',
    model: 'B30X-7 Plus',
    category: 'Forklifts',
    type: 'Electric Counterbalance',
    capacity: '6,000 lb',
    power: 'Electric',
    image: '/images/equipment/models/bobcat-b30x7-plus.webp',
  },
  {
    brand: 'Crown',
    model: 'SC Series',
    category: 'Forklifts',
    type: 'Counterbalance Forklift',
    capacity: 'Up to 4,000 lb',
    power: 'Electric',
    image: '/images/equipment/models/crown-sc-series.webp',
  },
  {
    brand: 'Crown',
    model: 'RR Series',
    category: 'Warehouse',
    type: 'Reach Truck',
    capacity: 'Up to 4,500 lb',
    power: 'Electric',
    image: '/images/equipment/models/crown-rr-series.webp',
  },
  {
    brand: 'Genie',
    model: 'GS Series',
    category: 'Aerial',
    type: 'Scissor Lift',
    capacity: 'Varies by model',
    power: 'Electric',
    image: '/images/equipment/models/genie-gs-series.webp',
  },
  {
    brand: 'PowerBoss',
    model: 'Industrial Floor Care',
    category: 'Floor Care',
    type: 'Sweeper / Scrubber',
    capacity: 'Commercial',
    power: 'Multiple options',
    image: '/images/equipment/models/powerboss-floor-care.webp',
  },
]

const activeCategory = ref('All Equipment')

const filteredEquipment = computed(() => {
  if (activeCategory.value === 'All Equipment') {
    return equipment
  }

  return equipment.filter(
    item => item.category === activeCategory.value,
  )
})
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- Page hero -->
      <section
        class="relative overflow-hidden bg-[var(--color-bg)]
               pt-24 lg:pt-32"
      >
        <div
          class="pointer-events-none absolute right-[-10%] top-[-40%]
                 size-[800px] rounded-full
                 bg-[var(--color-primary)] opacity-[0.07]
                 blur-[150px]"
        />

        <div
          class="relative mx-auto max-w-[1440px]
                 px-6 pb-16 lg:px-10 lg:pb-24"
        >
          <div
            class="grid gap-10
                   lg:grid-cols-[1.15fr_0.85fr]
                   lg:items-end"
          >
            <div>
              <div
                class="mb-6 flex items-center gap-3
                       text-xs font-bold uppercase
                       tracking-[0.24em]
                       text-[var(--color-primary)]"
              >
                <span class="h-px w-8 bg-[var(--color-primary)]" />
                Equipment
              </div>

              <h1
                class="max-w-4xl text-5xl font-black
                       leading-[0.92] tracking-[-0.055em]
                       sm:text-6xl lg:text-8xl"
              >
                The right machine

                <span class="block text-[var(--color-primary)]">
                  for the job.
                </span>
              </h1>
            </div>

            <p
              class="max-w-xl text-lg leading-8
                     text-[var(--color-text-muted)]
                     lg:justify-self-end"
            >
              From everyday warehouse equipment to specialized
              material handling solutions, JV Equipment can help
              match the right machine to your operation.
            </p>
          </div>
        </div>
      </section>

      <!-- Category navigation -->
      <section
        class="border-y border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div class="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div class="flex gap-2 overflow-x-auto py-5">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="shrink-0 border px-5 py-3
                     text-xs font-bold uppercase
                     tracking-[0.12em] transition"
              :class="
                activeCategory === category
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-text)]'
              "
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <!-- Equipment catalog -->
      <section class="bg-[var(--color-bg)]">
        <div
          class="mx-auto max-w-[1440px]
                 px-6 py-16 lg:px-10 lg:py-24"
        >
          <div
            class="mb-10 flex flex-col gap-5
                   border-b border-[var(--color-border)]
                   pb-8
                   sm:flex-row sm:items-end
                   sm:justify-between"
          >
            <div>
              <div
                class="text-xs font-bold uppercase
                       tracking-[0.2em]
                       text-[var(--color-primary)]"
              >
                {{ activeCategory }}
              </div>

              <h2
                class="mt-3 text-4xl font-black
                       tracking-[-0.04em]
                       lg:text-5xl"
              >
                Equipment Catalog
              </h2>
            </div>

            <div class="text-sm text-[var(--color-text-muted)]">
              {{ filteredEquipment.length }} models shown
            </div>
          </div>

          <div>
            <article
              v-for="(item, index) in filteredEquipment"
              :key="`${item.brand}-${item.model}`"
              class="group grid gap-8
                     border-b border-[var(--color-border)]
                     py-10
                     md:grid-cols-[0.95fr_1.05fr]
                     md:items-center
                     lg:gap-14 lg:py-12"
            >
              <!-- Product image -->
              <div
                class="relative flex min-h-[220px]
                       items-center justify-center
                       overflow-hidden
                       bg-[var(--color-surface)]
                       p-6
                       sm:min-h-[260px]
                       lg:min-h-[300px]"
                :class="
                  index % 2 === 1
                    ? 'md:order-2'
                    : ''
                "
              >
                <div
                  class="pointer-events-none absolute
                         left-1/2 top-1/2
                         size-[72%]
                         -translate-x-1/2
                         -translate-y-1/2
                         rounded-full
                         bg-[var(--color-primary)]
                         opacity-[0.06]
                         blur-[80px]"
                />

                <img
                  :src="item.image"
                  :alt="`${item.brand} ${item.model}`"
                  class="relative z-10
                         max-h-[190px] w-full
                         object-contain
                         transition duration-500
                         group-hover:scale-[1.035]
                         sm:max-h-[225px]
                         lg:max-h-[250px]"
                >
              </div>

              <!-- Product details -->
              <div
                class="flex flex-col justify-center
                       md:px-3 lg:px-6"
                :class="
                  index % 2 === 1
                    ? 'md:order-1'
                    : ''
                "
              >
                <div
                  class="flex items-center gap-3
                         text-xs font-black uppercase
                         tracking-[0.2em]
                         text-[var(--color-primary)]"
                >
                  <span>
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>

                  <span class="h-px w-6 bg-[var(--color-primary)]" />

                  {{ item.brand }}
                </div>

                <h3
                  class="mt-4 text-4xl font-black
                         tracking-[-0.045em]
                         sm:text-5xl"
                >
                  {{ item.model }}
                </h3>

                <div
                  class="mt-2 text-base font-bold
                         text-[var(--color-text-muted)]"
                >
                  {{ item.type }}
                </div>

                <div
                  class="mt-7 grid max-w-xl grid-cols-2
                         border-l border-t
                         border-[var(--color-border)]"
                >
                  <div
                    class="border-b border-r
                           border-[var(--color-border)]
                           p-4"
                  >
                    <div
                      class="text-[10px] font-bold uppercase
                             tracking-[0.18em]
                             text-[var(--color-text-muted)]"
                    >
                      Capacity
                    </div>

                    <div class="mt-2 font-black">
                      {{ item.capacity }}
                    </div>
                  </div>

                  <div
                    class="border-b border-r
                           border-[var(--color-border)]
                           p-4"
                  >
                    <div
                      class="text-[10px] font-bold uppercase
                             tracking-[0.18em]
                             text-[var(--color-text-muted)]"
                    >
                      Power
                    </div>

                    <div class="mt-2 font-black">
                      {{ item.power }}
                    </div>
                  </div>
                </div>

                <div
                  class="mt-7 flex flex-col gap-4
                         sm:flex-row sm:items-center"
                >
                  <NuxtLink
                    to="/contact"
                    class="inline-flex w-full items-center
                           justify-center
                           bg-[var(--color-primary)]
                           px-6 py-3
                           text-sm font-bold text-white
                           transition
                           hover:-translate-y-0.5
                           hover:opacity-90
                           sm:w-auto"
                  >
                    Request a Quote
                  </NuxtLink>

                  <button
                    type="button"
                    class="inline-flex items-center
                           justify-center gap-3
                           text-sm font-bold
                           sm:justify-start"
                  >
                    View Details

                    <span
                      class="text-[var(--color-primary)]
                             transition-transform
                             group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Assistance -->
      <section
        class="border-t border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto grid max-w-[1440px]
                 gap-10 px-6 py-20
                 lg:grid-cols-[1fr_auto]
                 lg:items-center
                 lg:px-10 lg:py-24"
        >
          <div>
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              Not sure what you need?
            </div>

            <h2
              class="mt-3 max-w-3xl text-4xl
                     font-black tracking-[-0.04em]
                     lg:text-5xl"
            >
              Let experience help you choose
              the right equipment.
            </h2>

            <p
              class="mt-5 max-w-2xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Tell us about your application, environment, and
              workload. JV Equipment can help narrow down the
              equipment that makes sense for your operation.
            </p>
          </div>

          <NuxtLink
            to="/contact"
            class="inline-flex w-full items-center
                   justify-center
                   bg-[var(--color-primary)]
                   px-7 py-4
                   text-sm font-bold text-white
                   transition
                   hover:-translate-y-0.5
                   hover:opacity-90
                   sm:w-auto"
          >
            Talk to JV Equipment
            <span class="ml-3">→</span>
          </NuxtLink>
        </div>
      </section>
    </main>

    <HomeContact />
    <AppFooter />
  </div>
</template>
