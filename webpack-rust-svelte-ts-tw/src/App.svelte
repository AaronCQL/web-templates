<script lang="ts">
  import { onMount } from "svelte";

  const greeting: string = "Webpack + Rust + Svelte + TypeScript + Tailwind";

  onMount(
    async (): Promise<void> => {
      const { greet } = await import("../pkg");
      greet();
    }
  );
</script>

<style lang="postcss">
  .custom-style {
    @apply text-red-600 text-2xl my-4;
  }
</style>

<div class="flex flex-col justify-center items-center min-h-screen">
  <h1 class="custom-style">{greeting}</h1>
  <p>Edit <code class="text-red-800">src/App.svelte</code> to start</p>
</div>
