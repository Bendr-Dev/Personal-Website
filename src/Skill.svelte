<script lang="ts">
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
    display: flex;
    justify-content: space-around;
  }

  .skillbox {
    width: 100%;
    margin: 3rem;
    border: 3px solid var(--accent-color);
    border-radius: 5px;
    position: relative;
  }

  .skillbox > span:first-of-type {
    position: absolute;
    top: -12px;
    color: var(--accent-color);
    font-size: 22px;
    margin: 0 1rem;
    padding: 0 0.5rem;
    background-color: var(--text-icons);
  }

  .skillbox div {
    margin: 1rem;
    padding: 1rem;
  }

  .skillbox div > span {
    display: block;
    line-height: 1.8;
    font-size: 22px;
    font-weight: 400;
  }

  @media (max-width: 1199px) {
    .content {
      display: flex;
      flex-direction: column;
    }

    .skillbox {
      margin: 2rem 0;
      width: calc(100% - 24px);
      align-self: center;
    }
  }

  @media (max-width: 799px) {
    .title h3 {
      font-size: 18px;
      color: var(--primary-text-color);
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    .skillbox {
      margin: 2rem 0;
      width: calc(100% - 24px);
      align-self: center;
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
    <div class="skillbox">
      <span>Languages</span>
      <div>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Python</span>
        <span>Java</span>
        <span>PHP</span>
      </div>
    </div>
    <div class="skillbox">
      <span>Frameworks</span>
      <div>
        <span>Angular</span>
        <span>React</span>
        <span>Svelte</span>
        <span>Express</span>
        <span>Flask</span>
      </div>
    </div>
    <div class="skillbox">
      <span>Tools</span>
      <div>
        <span>Node</span>
        <span>Git Bash</span>
        <span>GitHub / GitLab</span>
        <span>VS Code</span>
        <span>IntelliJ IDEA</span>
        <span>Postman</span>
      </div>
    </div>
    <div class="skillbox">
      <span>Databases</span>
      <div>
        <span>MongoDB</span>
        <span>Firebase</span>
        <span>MySQL</span>
      </div>
    </div>
  </div>
</section>
