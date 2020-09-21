<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const aboutSection: HTMLElement = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    const skillSection = document.getElementById("skill");
    const contactSection = document.getElementById("contact");

    const linkMap: { [key: string]: HTMLElement } = {
      about: aboutSection,
      experience: experienceSection,
      skill: skillSection,
      contact: contactSection,
    };

    for (const link in linkMap) {
      linkMap[link].addEventListener("click", () => {
        // toggle link
      });
    }

    aboutSection.addEventListener("click", () => {
      aboutSection.style.color = "var(--accent-color)";
      experienceSection.style.color = "";
      skillSection.style.color = "";
      contactSection.style.color = "";
    });

    experienceSection.addEventListener("click", () => {
      experienceSection.style.color = "var(--accent-color)";
      aboutSection.style.color = "";
      skillSection.style.color = "";
      contactSection.style.color = "";
    });

    skillSection.addEventListener("click", () => {
      skillSection.style.color = "var(--accent-color)";
      aboutSection.style.color = "";
      experienceSection.style.color = "";
      contactSection.style.color = "";
    });

    contactSection.addEventListener("click", () => {
      contactSection.style.color = "var(--accent-color)";
      aboutSection.style.color = "";
      skillSection.style.color = "";
      experienceSection.style.color = "";
    });
  });
</script>

<style>
  nav {
    background-color: var(--default-primary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    color: var(--text-icons);
    padding: 1rem;
    font-size: 32px;
  }

  .list {
    width: 30%;
    display: flex;
    flex-direction: row;
  }

  .item {
    align-self: center;
    margin: 2rem;
  }

  .item > a {
    text-decoration: none;
    color: var(--primary-text-color);
  }

  .item > a:hover {
    color: #414141;
  }

  .item > a:active {
    color: var(--accent-color);
  }
</style>

<nav>
  <h1>Brandon Endres</h1>
  <!-- Link list -->
  <div class="list">
    <div class="item"><a id="about" href="#about">About</a></div>
    <div class="item">
      <a id="experience" href="#experiences">Experiences</a>
    </div>
    <div class="item"><a id="skill" href="#skills">Skills</a></div>
    <div class="item"><a id="contact" href="#contact">Contact</a></div>
  </div>
</nav>
