<script lang="ts">
  import { faTimes } from "@fortawesome/fontawesome-free";
</script>

<style>
  .contact {
    display: flex;
    width: 100%;
    height: 50vh;
    background-color: var(--default-primary-color);
    align-items: center;
    flex-direction: column;
    padding: 5rem 0;
  }

  .title {
    width: 100%;
    color: var(--text-icons);
    text-align: center;
    font-size: 32px;
  }

  .title h2 {
    font-weight: 100;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content div:first-of-type {
    margin: 3rem 0;
  }

  .content div {
    margin-bottom: 3rem;
  }

  a,
  a:focus,
  a:visited,
  a:active,
  span {
    display: inline-block;
    text-decoration: none;
    color: var(--text-icons);
    font-weight: 100;
    font-size: 24px;
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>

<section class="contact" id="contact">
  <div class="title">
    <h2>Contact</h2>
  </div>
  <div class="content">
    <div><span>Phone: (813) 399-0434</span></div>
    <div><span>Email: 17bendres@gmail.com</span></div>
    <div>
      <a
        href="https://www.linkedin.com/in/brandon-endres/"
        target="_blank">LinkedIn Profile</a>
    </div>
    <div><a href="https://github.com/Bendr-Dev">GitHub Account</a></div>
  </div>
</section>
