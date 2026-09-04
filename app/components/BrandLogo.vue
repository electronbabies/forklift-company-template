<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>

<template>
  <span class="inline-flex items-center gap-3">
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Northline Equipment logo"
      class="size-11 shrink-0"
    >
      <rect width="48" height="48" rx="3" fill="var(--color-primary)" />
      <path
        d="M11 35V13l26 22V13"
        fill="none"
        stroke="white"
        stroke-width="5"
        stroke-linecap="square"
        stroke-linejoin="miter"
      />
      <path d="M11 13h10l16 14" fill="none" stroke="white" stroke-width="2" opacity=".65" />
    </svg>

    <span v-if="!compact" class="leading-none">
      <span class="block text-lg font-black tracking-tight">
        NORTHLINE
      </span>
      <span
        class="brand-logo-subtitle mt-1 block text-[10px] font-semibold
               uppercase tracking-[0.22em]"
      >
        Equipment Co.
      </span>
    </span>
  </span>
</template>
