<script setup lang="ts">
const partTypes = [
  'Replacement Part',
  'Tires',
  'Battery / Charger',
  'Attachment',
]

const manufacturers = [
  'Bobcat',
  'Crown',
  'Genie',
  'UniCarriers',
  'Landoll',
  'Robopac',
  'PowerBoss',
  'Other',
  'Not Sure',
]

const partsSupport = [
  {
    number: '01',
    title: 'OEM Parts',
    description:
      'Manufacturer parts for supported equipment and applications.',
  },
  {
    number: '02',
    title: 'Aftermarket Parts',
    description:
      'Additional sourcing options when the application allows for them.',
  },
  {
    number: '03',
    title: 'Tires + Batteries',
    description:
      'Common wear items and power-system support for material handling equipment.',
  },
  {
    number: '04',
    title: 'Attachments + Accessories',
    description:
      'Equipment attachments and accessories to adapt machines to the work.',
  },
]
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- Hero + parts request -->
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
              Equipment Parts
            </div>

            <h1
              class="max-w-3xl text-5xl font-black
                     leading-[0.92] tracking-[-0.055em]
                     sm:text-6xl xl:text-8xl"
            >
              Get the part.

              <span class="block text-[var(--color-primary)]">
                Get back to work.
              </span>
            </h1>

            <p
              class="mt-7 max-w-xl text-lg leading-8
                     text-[var(--color-text-muted)]"
            >
              Tell us what you're working on and what you need.
              If you know the part number, great. If you don't,
              we'll help narrow it down.
            </p>

            <div
              class="mt-10 flex flex-col gap-4
                     sm:flex-row"
            >
              <a
                href="#parts-request"
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
                Call Parts
              </a>

              <a
                href="#parts-request"
                class="inline-flex w-full items-center
                       justify-center
                       border border-[var(--color-border)]
                       px-7 py-4
                       text-sm font-bold
                       transition
                       hover:border-[var(--color-primary)]
                       sm:w-auto"
              >
                Request Parts
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
                  Parts
                </div>

                <div class="mt-2 font-black">
                  OEM + Aftermarket
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
                  Expert Help
                </div>
              </div>
            </div>
          </div>

          <!-- Parts request form -->
          <div
            id="parts-request"
            class="border border-[var(--color-border)]
                   bg-[var(--color-surface)] p-6
                   sm:p-8 lg:p-10"
          >
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.22em]
                     text-[var(--color-primary)]"
            >
              Request Parts
            </div>

            <h2
              class="mt-3 text-3xl font-black
                     tracking-[-0.035em]"
            >
              What are you looking for?
            </h2>

            <p
              class="mt-3 max-w-xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Give us whatever information you have.
              You don't need to know every detail.
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

              <!-- Part type -->
              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  What do you need?
                </legend>

                <div class="flex flex-wrap gap-2 xl:flex-nowrap">
                  <label
                    v-for="type in partTypes"
                    :key="type"
                    class="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="part_type"
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

              <!-- Manufacturer -->
              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Manufacturer
                </span>

                <select
                  name="manufacturer"
                  class="min-h-12 border
                         border-[var(--color-border)]
                         bg-[var(--color-bg)]
                         px-4 text-[var(--color-text)]
                         outline-none transition
                         focus:border-[var(--color-primary)]"
                >
                  <option value="">
                    Select if known
                  </option>

                  <option
                    v-for="manufacturer in manufacturers"
                    :key="manufacturer"
                    :value="manufacturer"
                  >
                    {{ manufacturer }}
                  </option>
                </select>
              </label>

              <div class="grid gap-5 sm:grid-cols-2">
                <label class="grid gap-2">
                  <span
                    class="text-xs font-bold uppercase
                           tracking-[0.14em]"
                  >
                    Equipment Model
                  </span>

                  <input
                    type="text"
                    name="model"
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
                    Part Number
                  </span>

                  <input
                    type="text"
                    name="part_number"
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
              </div>

              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Tell us what you need
                </span>

                <textarea
                  name="details"
                  rows="5"
                  placeholder="Describe the part, equipment, issue, quantity, or anything else that would help."
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
                Request Parts
                <span class="ml-3">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Parts support -->
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
                Parts Support
              </div>

              <h2
                class="mt-5 max-w-3xl
                       text-4xl font-black
                       tracking-[-0.045em]
                       sm:text-5xl"
              >
                Parts for the equipment
                that keeps you moving.
              </h2>
            </div>

            <p
              class="max-w-xl leading-7
                     text-[var(--color-text-muted)]
                     lg:justify-self-end"
            >
              Have a part number? Send it.
              Have a machine and no idea which part failed?
              Send that instead.
            </p>
          </div>

          <div
            class="mt-12 grid
                   border-l border-t
                   border-[var(--color-border)]
                   md:grid-cols-2"
          >
            <article
              v-for="item in partsSupport"
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

      <!-- Compact availability / local support -->
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
              Local Parts Support
            </div>

            <h2
              class="mt-3 max-w-3xl
                     text-4xl font-black
                     tracking-[-0.04em]
                     lg:text-5xl"
            >
              Need help identifying the part?
            </h2>

            <p
              class="mt-5 max-w-2xl leading-7
                     text-[var(--color-text-muted)]"
            >
              Contact Northline with the manufacturer, model,
              part number, or whatever information you have.
              We'll start there.
            </p>
          </div>

          <a
            href="#parts-request"
            class="inline-flex w-full
                   items-center justify-center
                   border border-[var(--color-border)]
                   px-7 py-4 text-sm font-bold
                   transition
                   hover:border-[var(--color-primary)]
                   sm:w-auto"
          >
            Call Parts
          </a>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
