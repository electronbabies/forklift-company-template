<template>
  <section
    class="relative overflow-hidden bg-[var(--color-bg)]
           pt-20 lg:min-h-[850px]"
  >
    <!-- Background atmosphere -->
    <div
      class="pointer-events-none absolute right-[-15%] top-[-25%]
             size-[900px] rounded-full
             bg-[var(--color-primary)] opacity-[0.08] blur-[140px]"
    />

    <div
      class="relative mx-auto grid max-w-[1440px]
             items-center px-6 py-20
             lg:min-h-[680px] lg:grid-cols-[1fr_1fr]
             lg:px-10 lg:py-24"
    >
      <!-- Copy -->
      <div class="relative z-20 max-w-2xl">
        <div
          class="mb-7 flex items-center gap-3 text-xs font-bold
                 uppercase tracking-[0.24em]
                 text-[var(--color-primary)]"
        >
          <span class="h-px w-8 bg-[var(--color-primary)]" />

          A Modern Equipment Partner
        </div>

        <h1
          class="text-[clamp(3.5rem,6vw,6rem)] font-black
                 leading-[0.9] tracking-[-0.055em]"
        >
          Keep your

          <span class="block text-[var(--color-primary)]">
            operation moving.
          </span>
        </h1>

        <p
          class="mt-8 max-w-xl text-lg leading-8
                 text-[var(--color-text-muted)] lg:text-xl"
        >
          A fictional equipment dealer with a clear, credible website
          built to turn local searches into real customer conversations.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <NuxtLink
            to="/equipment"
            class="inline-flex w-full items-center justify-center rounded-sm
                   bg-[var(--color-primary)] px-7 py-4
                   text-sm font-bold text-white transition
                   hover:-translate-y-0.5 hover:opacity-90
                   sm:w-auto"
          >
            Explore Equipment
            <span class="ml-3" aria-hidden="true">→</span>
          </NuxtLink>

          <a
            href="#contact"
            class="inline-flex w-full items-center justify-center rounded-sm
                   border border-[var(--color-border)] px-7 py-4
                   text-sm font-bold transition
                   hover:bg-[var(--color-surface)]
                   sm:w-auto"
          >
            Request a Quote
          </a>
        </div>

        <div
          class="mt-14 grid max-w-xl gap-5 border-t
                 border-[var(--color-border)] pt-7 min-[400px]:grid-cols-3 min-[400px]:gap-0"
        >
          <div>
            <div class="text-2xl font-black">
              24/7
            </div>

            <div
              class="mt-1 text-xs uppercase tracking-wider
                     text-[var(--color-text-muted)]"
            >
              Online
            </div>
          </div>

          <div
            class="min-[400px]:border-l min-[400px]:border-[var(--color-border)] min-[400px]:pl-6"
          >
            <div class="text-sm font-bold">
              Sales + Rentals
            </div>

            <div
              class="mt-1 text-xs text-[var(--color-text-muted)]"
            >
              Equipment solutions
            </div>
          </div>

          <div
            class="min-[400px]:border-l min-[400px]:border-[var(--color-border)] min-[400px]:pl-6"
          >
            <div class="text-sm font-bold">
              Service + Parts
            </div>

            <div
              class="mt-1 text-xs text-[var(--color-text-muted)]"
            >
              Keep fleets working
            </div>
          </div>
        </div>
      </div>

      <!-- Equipment visual: desktop only -->
      <div
        class="relative hidden min-h-[620px] lg:block"
      >
        <!-- Atmospheric glow -->
        <div
          class="absolute left-[10%] top-[15%] size-[80%]
                 rounded-full bg-[var(--color-primary)]
                 opacity-[0.10] blur-[110px]"
        />

        <!-- Ground shadow -->
        <div
          class="absolute bottom-[12%] left-[12%] h-12 w-[80%]
                 rounded-full bg-black/50 blur-3xl"
        />

        <img
          src="/images/equipment/bobcat-b25x7-plus-hero.webp"
          alt="Bobcat B25X-7 Plus electric forklift"
          class="absolute left-1/2 top-1/2 z-10
                 w-[118%] max-w-none
                 -translate-x-1/2 -translate-y-1/2
                 object-contain
                 drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
        >
      </div>
    </div>
  </section>
</template>
