<script lang="ts">
  export let ratingValue;
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const rating = tweened(0, {
    duration: 1500,
    easing: cubicOut,
  });

  rating.set(ratingValue / 100);
</script>

<style>
  progress[value] {
    /* Reset appereance */
    appearance: none;

    display: block;
    height: 1.5rem;
    width: 100%;
    border: none;

    color: var(--accent-color);
  }

  progress::-webkit-progress-bar {
    border-radius: 5px;
    background-color: var(--light-primary-color);
  }

  progress::-webkit-progress-value {
    background-color: var(--accent-color);
    border-radius: 5px;
  }

  progress::-moz-progress-bar {
    border-radius: 5px;
    background-color: var(--light-primary-color);
  }

  progress::-moz-progress-value {
    background-color: var(--accent-color);
    border-radius: 5px;
  }
</style>

<progress value={$rating} />
