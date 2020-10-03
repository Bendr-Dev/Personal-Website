<script lang="ts">
  import { onMount } from "svelte";

  // Lifecycle hook
  onMount(() => {
    // HTML Elements
    const aboutSection: HTMLElement = document.getElementById("aboutLink");
    const experienceSection: HTMLElement = document.getElementById(
      "experienceLink"
    );
    const skillSection: HTMLElement = document.getElementById("skillLink");
    const contactSection: HTMLElement = document.getElementById("contactLink");

    // Object that holds name/HTML element for each section
    const linkMap: { [key: string]: HTMLElement } = {
      aboutLink: aboutSection,
      experienceLink: experienceSection,
      skillLink: skillSection,
      contactLink: contactSection,
    };

    /**
     * Loops through object and removes styling from non-matching
     * names.
     *
     * @param name [string]: Name of key to keep styling.
     */
    const removeOtherStyles = (name: string): void => {
      for (const link in linkMap) {
        if (link !== name) {
          linkMap[link].style.color = "";
        }
      }
    };

    // Watches for click, then applies appropiate styling
    for (const link in linkMap) {
      linkMap[link].addEventListener("click", () => {
        linkMap[link].style.color = "var(--accent-color)";
        removeOtherStyles(link);
      });
    }
  });
</script>

<style>
  nav {
    width: 100%;
    background-color: var(--default-primary-color);
    display: none;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    position: fixed;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-left: 2rem;
    font-weight: 300;
  }

  .title {
    display: flex;
    align-items: center;
    color: var(--text-icons);
  }

  .list {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .item {
    align-self: center;
    margin: 1rem;
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

  @media (max-width: 1024px) {
    div.list {
      display: none;
    }

    div.title {
      width: 100%;
      justify-content: center;
    }

    h1 {
      margin-left: 0rem;
    }
  }

  @media (max-width: 600px) {
    div > h1 {
      font-size: 32px;
    }

    nav {
      height: 4rem;
    }
  }
</style>

<nav>
  <!-- Title -->
  <div class="title">
    <h1>Brandon Endres</h1>
  </div>
  <!-- Navigation list -->
  <div class="list">
    <div class="item"><a id="aboutLink" href="#about">About</a></div>
    <div class="item">
      <a id="experienceLink" href="#experiences">Experiences</a>
    </div>
    <div class="item"><a id="skillLink" href="#skills">Skills</a></div>
    <div class="item"><a id="contactLink" href="#contact">Contact</a></div>
  </div>
</nav>
