<script setup lang="ts">
const rentalTypes = [
  'Forklift',
  'Warehouse',
  'Aerial',
  'Specialty',
]

const rentalDurations = [
  '1 Day',
  '1 Week',
  '1 Month',
  'Longer',
  'Not Sure',
]

const rentalCategories = [
  {
    number: '01',
    title: 'Forklifts',
    description:
      'Electric and internal combustion equipment for everyday material handling.',
    image: '/images/equipment/models/forklift.webp',
  },
  {
    number: '02',
    title: 'Warehouse Equipment',
    description:
      'Reach trucks, pallet equipment, and narrow aisle solutions.',
    image: '/images/equipment/models/forklift.webp',
  },
  {
    number: '03',
    title: 'Aerial Equipment',
    description:
      'Equipment for elevated maintenance, installation, and project work.',
    image: '/images/equipment/models/forklift.webp',
  },
  {
    number: '04',
    title: 'Specialty Equipment',
    description:
      'Specialized equipment for jobs that need more than a standard forklift.',
    image: '/images/equipment/models/forklift.webp',
  },
]
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- Hero -->
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
          class="relative mx-auto grid max-w-[1440px]
                 gap-12 px-6 pb-16
                 lg:grid-cols-[0.9fr_1.1fr]
                 lg:items-start lg:px-10 lg:pb-24"
        >
          <!-- Hero copy -->
          <div>
            <div
              class="mb-6 flex items-center gap-3
                     text-xs font-bold uppercase
                     tracking-[0.24em]
                     text-[var(--color-primary)]"
            >
              <span class="h-px w-8 bg-[var(--color-primary)]" />
              Equipment Rentals
            </div>

            <h1
              class="max-w-3xl text-5xl font-black
                     leading-[0.92] tracking-[-0.055em]
                     sm:text-6xl xl:text-8xl"
            >
              Need equipment?

              <span class="block text-[var(--color-primary)]">
                Let’s get to work.
              </span>
            </h1>

            <p
              class="mt-7 max-w-xl text-lg leading-8
                     text-[var(--color-text-muted)]"
            >
              Tell us what you need, how long you need it, and
              what the job looks like. Northline can help match
              the right rental equipment to the work.
            </p>

            <div
              class="mt-10 grid max-w-xl grid-cols-2
                     border-l border-t
                     border-[var(--color-border)]"
            >
              <div
                class="border-b border-r
                       border-[var(--color-border)] p-5"
              >
                <div
                  class="text-[10px] font-bold uppercase
                         tracking-[0.18em]
                         text-[var(--color-text-muted)]"
                >
                  Experience
                </div>

                <div class="mt-2 font-black">
                  Flexible Terms
                </div>
              </div>

              <div
                class="border-b border-r
                       border-[var(--color-border)] p-5"
              >
                <div
                  class="text-[10px] font-bold uppercase
                         tracking-[0.18em]
                         text-[var(--color-text-muted)]"
                >
                  Support
                </div>

                <div class="mt-2 font-black">
                  Service + Parts
                </div>
              </div>
            </div>
          </div>

          <!-- Rental request form -->
          <div
            class="border border-[var(--color-border)]
                   bg-[var(--color-surface)] p-6
                   sm:p-8 lg:p-10"
          >
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.22em]
                     text-[var(--color-primary)]"
            >
              Request Rental Equipment
            </div>

            <h2
              class="mt-3 text-3xl font-black
                     tracking-[-0.035em]"
            >
              Tell us what you need.
            </h2>

            <p
              class="mt-3 max-w-xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Give us the basics and we’ll have the right person
              follow up.
            </p>

            <form
              class="mt-8 grid gap-5"
              @submit.prevent
            >
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="grid gap-2">
                  <span
                    class="text-xs font-bold uppercase
                           tracking-[0.14em]"
                  >
                    Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    autocomplete="name"
                    class="min-h-12 border
                           border-[var(--color-border)]
                           bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)]
                           outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>

                <label class="grid gap-2">
                  <span
                    class="text-xs font-bold uppercase
                           tracking-[0.14em]"
                  >
                    Company
                  </span>

                  <input
                    type="text"
                    name="company"
                    autocomplete="organization"
                    class="min-h-12 border
                           border-[var(--color-border)]
                           bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)]
                           outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <label class="grid gap-2">
                  <span
                    class="text-xs font-bold uppercase
                           tracking-[0.14em]"
                  >
                    Phone
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    class="min-h-12 border
                           border-[var(--color-border)]
                           bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)]
                           outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>

                <label class="grid gap-2">
                  <span
                    class="text-xs font-bold uppercase
                           tracking-[0.14em]"
                  >
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    autocomplete="email"
                    class="min-h-12 border
                           border-[var(--color-border)]
                           bg-[var(--color-bg)]
                           px-4 text-[var(--color-text)]
                           outline-none transition
                           focus:border-[var(--color-primary)]"
                  >
                </label>
              </div>

              <!-- Equipment type -->
              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  What do you need?
                </legend>

                <div class="flex flex-wrap gap-2 xl:flex-nowrap">
                  <label
                    v-for="type in rentalTypes"
                    :key="type"
                    class="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="equipment_type"
                      :value="type"
                      class="peer sr-only"
                    >

                    <span
                      class="inline-flex whitespace-nowrap border
                             border-[var(--color-border)]
                             px-4 py-3 text-sm font-bold
                             text-[var(--color-text-muted)]
                             transition
                             hover:border-[var(--color-primary)]
                             peer-checked:border-[var(--color-primary)]
                             peer-checked:bg-[var(--color-primary)]
                             peer-checked:text-white"
                    >
                      {{ type }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <!-- Duration -->
              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  How long?
                </legend>

                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="duration in rentalDurations"
                    :key="duration"
                    class="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="duration"
                      :value="duration"
                      class="peer sr-only"
                    >

                    <span
                      class="inline-flex border
                             border-[var(--color-border)]
                             px-4 py-3 text-sm font-bold
                             text-[var(--color-text-muted)]
                             transition
                             hover:border-[var(--color-primary)]
                             peer-checked:border-[var(--color-primary)]
                             peer-checked:bg-[var(--color-primary)]
                             peer-checked:text-white"
                    >
                      {{ duration }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Tell us about the job
                </span>

                <textarea
                  name="details"
                  rows="5"
                  placeholder="Equipment, application, location, dates, or anything else that would help."
                  class="border border-[var(--color-border)]
                         bg-[var(--color-bg)]
                         px-4 py-3 text-[var(--color-text)]
                         outline-none transition
                         placeholder:text-[var(--color-text-muted)]
                         focus:border-[var(--color-primary)]"
                />
              </label>

              <button
                type="submit"
                class="mt-2 inline-flex w-full
                       items-center justify-center
                       bg-[var(--color-primary)]
                       px-7 py-4 text-sm font-bold
                       text-white transition
                       hover:-translate-y-0.5
                       hover:opacity-90
                       sm:w-auto sm:justify-self-start"
              >
                Request Rental

                <span class="ml-3">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- What we rent -->
      <section
        class="border-y border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto max-w-[1800px]
                 px-6 py-20 lg:px-12 lg:py-24 2xl:px-16"
        >
          <div
            class="grid gap-8
                   lg:grid-cols-[1fr_0.7fr]
                   lg:items-end"
          >
            <div>
              <div
                class="flex items-center gap-3
                       text-xs font-bold uppercase
                       tracking-[0.24em]
                       text-[var(--color-primary)]"
              >
                <span class="h-px w-8 bg-[var(--color-primary)]" />
                Rental Equipment
              </div>

              <h2
                class="mt-5 max-w-3xl
                       text-4xl font-black
                       tracking-[-0.045em]
                       sm:text-5xl"
              >
                What can we help you rent?
              </h2>
            </div>

            <p
              class="max-w-xl leading-7
                     text-[var(--color-text-muted)]
                     lg:justify-self-end"
            >
              Not sure which category fits? Send the request anyway.
              The job matters more than knowing the model number.
            </p>
          </div>

          <div
            class="mt-12 grid
                   border-l border-t
                   border-[var(--color-border)]
                   md:grid-cols-2"
          >
            <article
              v-for="category in rentalCategories"
              :key="category.number"
              class="group relative min-h-[300px]
                     overflow-hidden
                     border-b border-r
                     border-[var(--color-border)]
                     p-7 sm:p-8"
            >
              <img
                :src="category.image"
                :alt="category.title"
                class="rental-card-image absolute bottom-0 right-[4%]
                       hidden max-h-[260px] max-w-[48%]
                       object-contain transition duration-500
                       group-hover:scale-[1.04] 2xl:block"
              >

              <div class="relative z-10 2xl:max-w-[46%]">
                <div
                  class="text-xs font-black
                         text-[var(--color-primary)]"
                >
                  {{ category.number }}
                </div>

                <h3
                  class="mt-4 text-2xl font-black
                         tracking-[-0.03em]"
                >
                  {{ category.title }}
                </h3>

                <p
                  class="mt-3 leading-7
                         text-[var(--color-text-muted)]"
                >
                  {{ category.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Compact trust section -->
      <section class="bg-[var(--color-bg)]">
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
              Rental Support
            </div>

            <h2
              class="mt-3 max-w-3xl
                     text-4xl font-black
                     tracking-[-0.04em]
                     lg:text-5xl"
            >
              Equipment backed by
              50 years of experience.
            </h2>

            <p
              class="mt-5 max-w-2xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Sales, rentals, service, and parts all live under
              one roof. When you need help, you have a material
              handling company to call.
            </p>
          </div>

          <NuxtLink
            to="/contact"
            class="inline-flex w-full
                   items-center justify-center
                   border border-[var(--color-border)]
                   px-7 py-4 text-sm font-bold
                   transition
                   hover:border-[var(--color-primary)]
                   sm:w-auto"
          >
            Request a Rental
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
