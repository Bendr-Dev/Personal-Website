<script lang="ts">
  import SkillItem from "./SkillItem.svelte";
</script>

<style>
  #skills {
    display: flex;
    width: 100%;
    height: 75vh;
    background-color: var(--text-icons);
    align-items: center;
    flex-direction: column;
    padding: 5rem 0;
  }

  .title {
    color: var(--accent-color);
    text-align: center;
    font-size: 32px;
  }

  .title h2 {
    font-weight: 100;
  }

  .content {
  }
</style>

<section id="skills">
  <div class="title">
    <h2>Skills</h2>
  </div>
  <div class="content">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Test</label>
    <SkillItem ratingValue={30} />
  </div>
</section>
