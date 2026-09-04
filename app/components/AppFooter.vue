<template>
  <footer
    class="border-t border-[var(--color-border)] bg-[var(--color-footer-bg)]
           text-[var(--color-footer-text)] [--logo-muted:var(--color-footer-muted)]"
  >
    <div
      class="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10
             sm:flex-row sm:items-end sm:justify-between lg:px-10"
    >
      <div>
        <BrandLogo />
        <p class="mt-5 max-w-md text-sm leading-6 text-[var(--color-footer-muted)]">
          A fictional equipment-company website created to demonstrate a
          focused, modern web presence for service businesses.
        </p>
      </div>

      <div class="sm:text-right">
        <div
          class="text-[10px] font-bold uppercase tracking-[0.2em]
                  text-[var(--color-footer-accent)]"
        >
          Website Demo
        </div>
        <p class="mt-2 text-sm text-[var(--color-footer-muted)]">
          Need a simple site like this for your business?
        </p>
        <NuxtLink to="/contact" class="mt-3 inline-flex font-bold">
          Start a project <span class="ml-2 text-[var(--color-footer-accent)]">→</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
