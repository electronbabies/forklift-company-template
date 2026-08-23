<template>
  <section
    class="relative overflow-hidden border-y
           border-[var(--color-border)]
           bg-[var(--color-surface)]"
  >
    <!-- Background 50 -->
    <div
      class="pointer-events-none absolute -right-8 top-1/2
             -translate-y-1/2 select-none
             text-[clamp(22rem,40vw,42rem)] font-black
             leading-none tracking-[-0.08em]
             text-white/[0.018]"
      aria-hidden="true"
    >
      50
    </div>

    <div
      class="relative mx-auto max-w-[1440px]
             px-6 py-24 lg:px-10 lg:py-32"
    >
      <div
        class="grid gap-16
               lg:grid-cols-[0.75fr_1.25fr]
               lg:items-center lg:gap-24"
      >
        <!-- Number -->
        <div class="text-center lg:text-left">
          <div
            class="mb-5 flex items-center justify-center gap-3
                   text-xs font-bold uppercase tracking-[0.24em]
                   text-[var(--color-primary)]
                   lg:justify-start"
          >
            <span class="h-px w-8 bg-[var(--color-primary)]" />
            Since 1976
          </div>

          <div
            class="text-[clamp(9rem,18vw,16rem)] font-black
                   leading-[0.72] tracking-[-0.08em]
                   text-[var(--color-primary)]"
          >
            50
          </div>

          <div
            class="mt-6 text-xl font-black uppercase
                   tracking-[0.16em]"
          >
            Years of Experience
          </div>
        </div>

        <!-- Story -->
        <div class="text-center lg:text-left">
          <h2
            class="max-w-4xl text-4xl font-black
                   tracking-[-0.04em]
                   sm:text-5xl lg:text-6xl"
          >
            Experience you can
            <span class="text-[var(--color-primary)]">
              put to work.
            </span>
          </h2>

          <p
            class="mx-auto mt-8 max-w-2xl text-lg leading-8
                   text-[var(--color-text-muted)]
                   lg:mx-0"
          >
            Since 1976, JV Equipment has helped businesses find,
            maintain, and support the equipment that keeps their
            operations productive.
          </p>

          <p
            class="mx-auto mt-5 max-w-2xl leading-7
                   text-[var(--color-text-muted)]
                   lg:mx-0"
          >
            Five decades in material handling means understanding
            that the right solution is about more than the machine.
            It's about uptime, support, service, and having a team
            you can call when you need them.
          </p>

          <!-- Facts -->
          <div
            class="mx-auto mt-12 grid max-w-md border-l border-t
                   border-[var(--color-border)]
                   sm:max-w-none sm:grid-cols-3
                   lg:mx-0"
          >
            <div
              class="border-b border-r
                     border-[var(--color-border)] p-6"
            >
              <div
                class="text-2xl font-black
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
                     border-[var(--color-border)] p-6"
            >
              <div
                class="text-2xl font-black
                       text-[var(--color-primary)]"
              >
                Sales + Rentals
              </div>

              <div
                class="mt-2 text-xs font-bold uppercase
                       tracking-[0.16em]
                       text-[var(--color-text-muted)]"
              >
                Equipment
              </div>
            </div>

            <div
              class="border-b border-r
                     border-[var(--color-border)] p-6"
            >
              <div
                class="text-2xl font-black
                       text-[var(--color-primary)]"
              >
                Service + Parts
              </div>

              <div
                class="mt-2 text-xs font-bold uppercase
                       tracking-[0.16em]
                       text-[var(--color-text-muted)]"
              >
                Support
              </div>
            </div>
          </div>

          <NuxtLink
            to="/about"
            class="mt-10 inline-flex items-center justify-center gap-3
                   text-sm font-bold
                   lg:justify-start"
          >
            About JV Equipment

            <span
              class="text-[var(--color-primary)]"
              aria-hidden="true"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
