<script lang="ts">
  export let ratingValue: number;
</script>

<style>
  div {
    width: 100%;
    height: 1.5rem;
    border-radius: 5px;
    background-color: var(--light-primary-color);
  }

  div > div {
    background-color: var(--accent-color);
    border-radius: 5px;
    height: 1.5rem;
  }
</style>

<div>
  <div style="width:{ratingValue}%" />
</div>
