<template>
  <div>
    <AppHeader variant="solid" />

    <main>
      <!-- ============================================================
           ABOUT HERO
           ============================================================ -->
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
                 px-6 pb-14 lg:px-10 lg:pb-16"
        >
          <div
            class="grid gap-10
                   lg:grid-cols-[1.05fr_0.95fr]
                   lg:items-center"
          >
            <div>
              <div
                class="mb-6 flex items-center gap-3
                       text-xs font-bold uppercase
                       tracking-[0.24em]
                       text-[var(--color-primary)]"
              >
                <span
                  class="h-px w-8
                         bg-[var(--color-primary)]"
                />

                About JV Equipment
              </div>

              <h1
                class="max-w-4xl text-5xl font-black
                       leading-[0.92] tracking-[-0.055em]
                       sm:text-6xl lg:text-8xl"
              >
                Material handling

                <span
                  class="block text-[var(--color-primary)]"
                >
                  since 1976.
                </span>
              </h1>
            </div>

            <div
              class="max-w-xl
                     lg:justify-self-end"
            >
              <p
                class="text-lg leading-8
                       text-[var(--color-text-muted)]"
              >
                JV Equipment is a family-owned equipment dealership
                serving businesses across South Texas and northern
                Mexico with equipment sales, rentals, service,
                and parts.
              </p>

              <p
                class="mt-5 leading-7
                       text-[var(--color-text-muted)]"
              >
                For five decades, the business has grown around a
                straightforward idea: know the equipment, support
                the customer, and keep their operation moving.
              </p>
            </div>
          </div>

          <!-- Simple history facts -->
          <div
            class="mt-10 grid
                   border-l border-t
                   border-[var(--color-border)]
                   sm:grid-cols-3"
          >
            <div
              class="border-b border-r
                     border-[var(--color-border)]
                     p-6"
            >
              <div
                class="text-4xl font-black
                       text-[var(--color-primary)]"
              >
                1976
              </div>

              <div
                class="mt-2 text-xs font-bold uppercase
                       tracking-[0.16em]
                       text-[var(--color-text-muted)]"
              >
                Established
              </div>
            </div>

            <div
              class="border-b border-r
                     border-[var(--color-border)]
                     p-6"
            >
              <div class="text-4xl font-black">
                50
              </div>

              <div
                class="mt-2 text-xs font-bold uppercase
                       tracking-[0.16em]
                       text-[var(--color-text-muted)]"
              >
                Years in Material Handling
              </div>
            </div>

            <div
              class="border-b border-r
                     border-[var(--color-border)]
                     p-6"
            >
              <div class="text-2xl font-black">
                South Texas + Mexico
              </div>

              <div
                class="mt-2 text-xs font-bold uppercase
                       tracking-[0.16em]
                       text-[var(--color-text-muted)]"
              >
                Regional Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================
           COMPANY / HISTORY IMAGE
           ============================================================ -->
      <section
        class="border-y border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto grid max-w-[1440px]
                 gap-12 px-6 py-20
                 lg:grid-cols-[1.15fr_0.85fr]
                 lg:items-center
                 lg:px-10 lg:py-24"
        >
          <!--
            Temporary image.

            Ideally replace this with the original full-resolution
            JV image or professional photography supplied by JV.
          -->
          <div
            class="relative overflow-hidden
                   bg-[var(--color-bg)]"
          >
            <img
              src="/images/about/jve-history.webp"
              alt="JV Equipment"
              class="aspect-[16/9] w-full
                     object-cover"
            >
          </div>

          <div>
            <div
              class="flex items-center gap-3
                     text-xs font-bold uppercase
                     tracking-[0.24em]
                     text-[var(--color-primary)]"
            >
              <span
                class="h-px w-8
                       bg-[var(--color-primary)]"
              />

              Built Over Five Decades
            </div>

            <h2
              class="mt-5 max-w-2xl
                     text-4xl font-black
                     tracking-[-0.045em]
                     sm:text-5xl"
            >
              Experience that stays
              close to the work.
            </h2>

            <p
              class="mt-6 max-w-xl leading-7
                     text-[var(--color-text-muted)]"
            >
              JV Equipment supports customers from equipment
              selection through the working life of the machine.
              Sales, rentals, service, and parts all operate as
              pieces of the same material handling business.
            </p>

            <p
              class="mt-5 max-w-xl leading-7
                     text-[var(--color-text-muted)]"
            >
              With locations serving Edinburg, Laredo, and Reynosa,
              JV Equipment works with operations on both sides of
              the border.
            </p>
          </div>
        </div>
      </section>

      <!-- ============================================================
           WHAT JV DOES
           ============================================================ -->
      <section class="bg-[var(--color-bg)]">
        <div
          class="mx-auto max-w-[1440px]
                 px-6 py-20 lg:px-10 lg:py-24"
        >
          <div
            class="grid gap-10
                   lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <div
                class="text-xs font-bold uppercase
                       tracking-[0.2em]
                       text-[var(--color-primary)]"
              >
                One Equipment Partner
              </div>

              <h2
                class="mt-3 max-w-xl
                       text-4xl font-black
                       tracking-[-0.04em]
                       lg:text-5xl"
              >
                Equipment is only
                part of the job.
              </h2>

              <p
                class="mt-5 max-w-xl leading-7
                       text-[var(--color-text-muted)]"
              >
                Whether you need a machine, a temporary rental,
                a repair, or a replacement part, JV Equipment
                supports the equipment behind your operation.
              </p>
            </div>

            <div
              class="grid
                     border-l border-t
                     border-[var(--color-border)]
                     sm:grid-cols-2"
            >
              <NuxtLink
                to="/equipment"
                class="group border-b border-r
                       border-[var(--color-border)]
                       p-7 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div
                  class="text-xs font-black
                         text-[var(--color-primary)]"
                >
                  01
                </div>

                <div
                  class="mt-4 flex items-center
                         justify-between gap-4"
                >
                  <h3 class="text-2xl font-black">
                    Equipment
                  </h3>

                  <span
                    class="text-[var(--color-primary)]
                           transition-transform
                           group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </NuxtLink>

              <NuxtLink
                to="/rentals"
                class="group border-b border-r
                       border-[var(--color-border)]
                       p-7 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div
                  class="text-xs font-black
                         text-[var(--color-primary)]"
                >
                  02
                </div>

                <div
                  class="mt-4 flex items-center
                         justify-between gap-4"
                >
                  <h3 class="text-2xl font-black">
                    Rentals
                  </h3>

                  <span
                    class="text-[var(--color-primary)]
                           transition-transform
                           group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </NuxtLink>

              <NuxtLink
                to="/service"
                class="group border-b border-r
                       border-[var(--color-border)]
                       p-7 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div
                  class="text-xs font-black
                         text-[var(--color-primary)]"
                >
                  03
                </div>

                <div
                  class="mt-4 flex items-center
                         justify-between gap-4"
                >
                  <h3 class="text-2xl font-black">
                    Service
                  </h3>

                  <span
                    class="text-[var(--color-primary)]
                           transition-transform
                           group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </NuxtLink>

              <NuxtLink
                to="/parts"
                class="group border-b border-r
                       border-[var(--color-border)]
                       p-7 transition
                       hover:bg-[var(--color-surface)]"
              >
                <div
                  class="text-xs font-black
                         text-[var(--color-primary)]"
                >
                  04
                </div>

                <div
                  class="mt-4 flex items-center
                         justify-between gap-4"
                >
                  <h3 class="text-2xl font-black">
                    Parts
                  </h3>

                  <span
                    class="text-[var(--color-primary)]
                           transition-transform
                           group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================
           SIMPLE ENDING
           ============================================================ -->
      <section
        class="border-t border-[var(--color-border)]
               bg-[var(--color-surface)]"
      >
        <div
          class="mx-auto grid max-w-[1440px]
                 gap-8 px-6 py-16
                 lg:grid-cols-[1fr_auto]
                 lg:items-center
                 lg:px-10 lg:py-20"
        >
          <div>
            <div
              class="text-xs font-bold uppercase
                     tracking-[0.2em]
                     text-[var(--color-primary)]"
            >
              JV Equipment
            </div>

            <h2
              class="mt-3 text-3xl font-black
                     tracking-[-0.04em]
                     sm:text-4xl"
            >
              The Dealership Without Borders®
            </h2>
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
            Contact JV Equipment

            <span class="ml-3">
              →
            </span>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
