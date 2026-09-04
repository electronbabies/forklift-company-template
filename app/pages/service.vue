<script setup lang="ts">
const serviceTypes = [
  {
    number: '01',
    title: 'Preventive Maintenance',
    description:
      'Routine maintenance to help reduce downtime and keep equipment operating reliably.',
  },
  {
    number: '02',
    title: 'Repairs',
    description:
      'Troubleshooting and repair support when equipment is not operating as it should.',
  },
  {
    number: '03',
    title: 'Diagnostics',
    description:
      'Help identifying equipment issues and determining the right next step.',
  },
  {
    number: '04',
    title: 'Urgent Service',
    description:
      'Fast support when downtime is affecting your operation.',
  },
]

const equipmentTypes = [
  'Forklift',
  'Warehouse',
  'Aerial',
  'Floor Care',
]

const urgencyOptions = [
  'Routine',
  'Soon',
  'Urgent',
  'Equipment Down',
]
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- Hero + service request -->
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
              Equipment Service
            </div>

            <h1
              class="max-w-3xl text-5xl font-black
                     leading-[0.92] tracking-[-0.055em]
                     sm:text-6xl xl:text-8xl"
            >
              Keep your equipment

              <span class="block text-[var(--color-primary)]">
                working.
              </span>
            </h1>

            <p
              class="mt-7 max-w-xl text-lg leading-8
                     text-[var(--color-text-muted)]"
            >
              Maintenance, repairs, diagnostics, and service support
              to help keep downtime from slowing your operation.
            </p>

            <div
              class="mt-10 flex flex-col gap-4
                     sm:flex-row"
            >
              <a
                href="#service-request"
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
                Call Service
              </a>

              <a
                href="#service-request"
                class="inline-flex w-full items-center
                       justify-center
                       border border-[var(--color-border)]
                       px-7 py-4
                       text-sm font-bold
                       transition
                       hover:border-[var(--color-primary)]
                       sm:w-auto"
              >
                Request Service
              </a>
            </div>

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
                  Field Ready
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

          <!-- Service request form -->
          <div
            id="service-request"
            class="border border-[var(--color-border)]
                   bg-[var(--color-surface)] p-6
                   sm:p-8 lg:p-10"
          >
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.22em]
                     text-[var(--color-primary)]"
            >
              Request Service
            </div>

            <h2
              class="mt-3 text-3xl font-black
                     tracking-[-0.035em]"
            >
              Tell us what’s going on.
            </h2>

            <p
              class="mt-3 max-w-xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Give us the basics and we’ll get your request to the
              right person.
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

              <!-- Equipment -->
              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Equipment
                </legend>

                <div class="flex flex-wrap gap-2 xl:flex-nowrap">
                  <label
                    v-for="type in equipmentTypes"
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

              <!-- Urgency -->
              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  How urgent is it?
                </legend>

                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="option in urgencyOptions"
                    :key="option"
                    class="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="urgency"
                      :value="option"
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
                      {{ option }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Manufacturer / Model
                </span>

                <input
                  type="text"
                  name="equipment"
                  placeholder="If known"
                  class="min-h-12 border
                         border-[var(--color-border)]
                         bg-[var(--color-bg)]
                         px-4 text-[var(--color-text)]
                         outline-none transition
                         placeholder:text-[var(--color-text-muted)]
                         focus:border-[var(--color-primary)]"
                >
              </label>

              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  What’s happening?
                </span>

                <textarea
                  name="details"
                  rows="5"
                  placeholder="Describe the issue, maintenance needed, error message, or anything else that would help."
                  class="border border-[var(--color-border)]
                         bg-[var(--color-bg)]
                         px-4 py-3 text-[var(--color-text)]
                         outline-none transition
                         placeholder:text-[var(--color-text-muted)]
                         focus:border-[var(--color-primary)]"
                ></textarea>
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
                Request Service
                <span class="ml-3">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Service types -->
      <section
        class="border-y border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto max-w-[1440px]
                 px-6 py-20 lg:px-10 lg:py-24"
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
                Service Support
              </div>

              <h2
                class="mt-5 max-w-3xl
                       text-4xl font-black
                       tracking-[-0.045em]
                       sm:text-5xl"
              >
                What can we help with?
              </h2>
            </div>

            <p
              class="max-w-xl leading-7
                     text-[var(--color-text-muted)]
                     lg:justify-self-end"
            >
              From routine maintenance to unexpected downtime,
              Northline helps keep equipment productive.
            </p>
          </div>

          <div
            class="mt-12 grid
                   border-l border-t
                   border-[var(--color-border)]
                   md:grid-cols-2"
          >
            <article
              v-for="item in serviceTypes"
              :key="item.number"
              class="border-b border-r
                     border-[var(--color-border)]
                     p-7 sm:p-8"
            >
              <div
                class="text-xs font-black
                       text-[var(--color-primary)]"
              >
                {{ item.number }}
              </div>

              <h3
                class="mt-4 text-2xl font-black
                       tracking-[-0.03em]"
              >
                {{ item.title }}
              </h3>

              <p
                class="mt-3 max-w-md leading-7
                       text-[var(--color-text-muted)]"
              >
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Real company / trust section -->
      <section class="bg-[var(--color-bg)]">
        <div
          class="mx-auto grid max-w-[1440px]
                 gap-12 px-6 py-20
                 lg:grid-cols-[1fr_1fr]
                 lg:items-center
                 lg:px-10 lg:py-24"
        >
          <!-- Placeholder for future technician photography -->
          <div
            class="relative min-h-[360px]
                   overflow-hidden
                   bg-[var(--color-surface)]"
          >
            <div
              class="absolute inset-0
                     flex items-center justify-center
                     px-8 text-center
                     text-sm font-bold uppercase
                     tracking-[0.18em]
                     text-[var(--color-text-muted)]"
            >
              Service technician photography
            </div>
          </div>

          <div>
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              Experience You Can Call
            </div>

            <h2
              class="mt-3 max-w-3xl
                     text-4xl font-black
                     tracking-[-0.04em]
                     lg:text-5xl"
            >
              Service built around
              keeping work in motion.
            </h2>

            <p
              class="mt-5 max-w-2xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Northline supports customers with equipment
              knowledge, service experience, and the parts needed
              to help keep operations moving.
            </p>

            <div
              class="mt-8 flex flex-col gap-4
                     sm:flex-row"
            >
              <a
                href="#service-request"
                class="inline-flex w-full
                       items-center justify-center
                       bg-[var(--color-primary)]
                       px-7 py-4 text-sm font-bold
                       text-white transition
                       hover:-translate-y-0.5
                       hover:opacity-90
                       sm:w-auto"
              >
                Call Service
              </a>

              <a
                href="#service-request"
                class="inline-flex w-full
                       items-center justify-center
                       border border-[var(--color-border)]
                       px-7 py-4 text-sm font-bold
                       transition
                       hover:border-[var(--color-primary)]
                       sm:w-auto"
              >
                Request Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
