<script setup lang="ts">
const contactReasons = [
  'Equipment',
  'Rentals',
  'Service',
  'Parts',
  'Something Else',
]
</script>

<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- Contact hero + form -->
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
                 gap-12 px-6 pb-20
                 lg:grid-cols-[0.9fr_1.1fr]
                 lg:items-start lg:px-10 lg:pb-28"
        >
          <!-- Contact copy -->
          <div>
            <div
              class="mb-6 flex items-center gap-3
                     text-xs font-bold uppercase
                     tracking-[0.24em]
                     text-[var(--color-primary)]"
            >
              <span class="h-px w-8 bg-[var(--color-primary)]" />

              Contact JV Equipment
            </div>

            <h1
              class="max-w-3xl text-5xl font-black
                     leading-[0.92] tracking-[-0.055em]
                     sm:text-6xl lg:text-8xl"
            >
              How can we

              <span class="block text-[var(--color-primary)]">
                help?
              </span>
            </h1>

            <p
              class="mt-7 max-w-xl text-lg leading-8
                     text-[var(--color-text-muted)]"
            >
              Have a question, need help finding the right department,
              or just want to talk to someone at JV Equipment?
              Start here.
            </p>

            <div
              class="mt-10 grid max-w-xl
                     border-l border-t
                     border-[var(--color-border)]"
            >
              <a
                href="tel:+17048932878"
                class="group flex items-center justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-5 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div>
                  <div
                    class="text-[10px] font-bold uppercase
                           tracking-[0.18em]
                           text-[var(--color-text-muted)]"
                  >
                    Call
                  </div>

                  <div class="mt-2 font-black">
                    (704) 893-2878
                  </div>
                </div>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="mailto:info@jvequipment.com"
                class="group flex items-center justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-5 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div>
                  <div
                    class="text-[10px] font-bold uppercase
                           tracking-[0.18em]
                           text-[var(--color-text-muted)]"
                  >
                    Email
                  </div>

                  <div class="mt-2 font-black">
                    Contact JV Equipment
                  </div>
                </div>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <!-- Contact form -->
          <div
            class="border border-[var(--color-border)]
                   bg-[var(--color-surface)]
                   p-6 sm:p-8 lg:p-10"
          >
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.22em]
                     text-[var(--color-primary)]"
            >
              Send a Message
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
              We’ll get your message to the right person.
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

              <fieldset>
                <legend
                  class="mb-3 text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  What can we help with?
                </legend>

                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="reason in contactReasons"
                    :key="reason"
                    class="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="contact_reason"
                      :value="reason"
                      class="peer sr-only"
                    >

                    <span
                      class="inline-flex border
                             border-[var(--color-border)]
                             px-4 py-3
                             text-sm font-bold
                             text-[var(--color-text-muted)]
                             transition
                             hover:border-[var(--color-primary)]
                             peer-checked:border-[var(--color-primary)]
                             peer-checked:bg-[var(--color-primary)]
                             peer-checked:text-white"
                    >
                      {{ reason }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <label class="grid gap-2">
                <span
                  class="text-xs font-bold uppercase
                         tracking-[0.14em]"
                >
                  Message
                </span>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="How can JV Equipment help?"
                  class="border border-[var(--color-border)]
                         bg-[var(--color-bg)]
                         px-4 py-3
                         text-[var(--color-text)]
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
                       px-7 py-4
                       text-sm font-bold text-white
                       transition
                       hover:-translate-y-0.5
                       hover:opacity-90
                       sm:w-auto sm:justify-self-start"
              >
                Send Message

                <span class="ml-3">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Department shortcuts -->
      <section
        class="border-y border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto max-w-[1440px]
                 px-6 pb-24 pt-16
                 lg:px-10 lg:pb-32 lg:pt-20"
        >
          <div
            class="grid gap-8
                   lg:grid-cols-[0.8fr_1.2fr]
                   lg:items-center"
          >
            <div>
              <div
                class="text-xs font-bold uppercase
                       tracking-[0.2em]
                       text-[var(--color-primary)]"
              >
                Looking for something specific?
              </div>

              <h2
                class="mt-3 text-3xl font-black
                       tracking-[-0.04em]
                       sm:text-4xl"
              >
                Go straight to the right department.
              </h2>
            </div>

            <div
              class="grid
                     border-l border-t
                     border-[var(--color-border)]
                     sm:grid-cols-2"
            >
              <NuxtLink
                to="/rentals"
                class="group flex items-center
                       justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-6 transition
                       hover:bg-[var(--color-bg)]"
              >
                <span class="font-black">
                  Rentals
                </span>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </NuxtLink>

              <NuxtLink
                to="/service"
                class="group flex items-center
                       justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-6 transition
                       hover:bg-[var(--color-bg)]"
              >
                <span class="font-black">
                  Service
                </span>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </NuxtLink>

              <NuxtLink
                to="/parts"
                class="group flex items-center
                       justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-6 transition
                       hover:bg-[var(--color-bg)]"
              >
                <span class="font-black">
                  Parts
                </span>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </NuxtLink>

              <NuxtLink
                to="/equipment"
                class="group flex items-center
                       justify-between
                       border-b border-r
                       border-[var(--color-border)]
                       p-6 transition
                       hover:bg-[var(--color-bg)]"
              >
                <span class="font-black">
                  Equipment
                </span>

                <span
                  class="text-[var(--color-primary)]
                         transition-transform
                         group-hover:translate-x-1"
                >
                  →
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
