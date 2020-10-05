<script lang="ts">
  import SkillItem from "./SkillItem.svelte";
</script>

<style>
  #skills {
    display: flex;
    width: 100%;
    height: auto;
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

  .title h2,
  h3 {
    font-weight: 100;
  }

  .title h3 {
    font-size: 24px;
    color: var(--primary-text-color);
  }

  .content {
    width: 100%;
    display: grid;
    grid-template-areas: "lSkill rSkill";
  }

  .lSkill,
  .rSkill {
    margin: 0 3rem;
  }

  .skill {
    margin: 1rem 0;
  }

  label {
    font-size: 18px;
    font-weight: 100;
    color: var(--primary-text-color);
  }

  @media (max-width: 799px) {
    .lSkill,
    .rSkill {
      margin: 0 1.5rem;
    }

    .skill {
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .title h3 {
      font-size: 18px;
      color: var(--primary-text-color);
    }

    .content {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<section id="skills">
  <div class="title">
    <h2>Skills</h2>
    <h3>
      Languages, Frameworks, Tools and Technologies I've become comfortable with
    </h3>
  </div>
  <div class="content">
    <div class="lSkill">
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>HTML</label>
        <SkillItem ratingValue={90} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>CSS</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>JavaScript</label>
        <SkillItem ratingValue={90} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>TypeScript</label>
        <SkillItem ratingValue={90} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Node</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Express</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>GitHub</label>
        <SkillItem ratingValue={90} />
      </div>
    </div>
    <div class="rSkill">
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Angular</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>React</label>
        <SkillItem ratingValue={70} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Svelte</label>
        <SkillItem ratingValue={60} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Firebase</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Flask</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Python</label>
        <SkillItem ratingValue={80} />
      </div>
      <div class="skill">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Java</label>
        <SkillItem ratingValue={80} />
      </div>
    </div>
  </div>
</section>
