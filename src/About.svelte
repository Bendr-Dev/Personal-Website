<script lang="ts">
</script>

<style>
  .about {
    display: flex;
    width: 100%;
    height: auto;
    background-color: var(--text-icons);
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
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }

  .content > div {
    width: calc(100% / 3);
  }

  .left-block {
    padding: 0rem 1rem 1rem 5rem;
  }

  .right-block {
    padding: 0rem 5rem 1rem 1rem;
  }

  p {
    margin-top: 0;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 200;
  }

  img {
    border-radius: 50%;
    border: 3px solid var(--accent-color);
    width: 210px;
    height: 210px;
    text-align: center;
    line-height: 210px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 799px) {
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
    }

    .content > div {
      width: 100%;
    }

    p {
      margin-top: 1rem;
      line-height: 1.6;
      font-weight: 200;
    }

    .left-block,
    .right-block {
      padding: 1rem 2rem;
    }

    img {
      border-radius: 50%;
      border: 3px solid var(--accent-color);
      min-width: 210px;
      min-height: 210px;
      text-align: center;
      line-height: 210px;
    }
  }
</style>

<section class="about" id="about">
  <div class="title">
    <h2>About Me!</h2>
  </div>
  <div class="content">
    <div>
      <div class="left-block">
        <p>
          I'm a passionate and self-driven developer. I place emphasis on
          teamwork and helping others to the best of my abilities. I believe
          work can be done faster and there are more opportunities to learn from
          others through teamwork.
        </p>

        <p>
          I'm currently studying computer engineering at Florida Polytechnic
          University, with a concentration of machine intelligence.
        </p>

        <p>
          I've gathered 6+ months of professional experience interning for a
          $5B+ revenue company developing applications for different areas of
          the business.
        </p>
      </div>
    </div>
    <div>
      <div class="center-block" />
      <img src="img/bendres.jpg" alt="My face" />
    </div>
    <div>
      <div class="right-block">
        <p>
          While writing code is awesome, I do enjoy other activites! I enjoy
          watching Wisconsin sport teams play, and I'm a avid hockey fan
          (#GoBolts) who has also played the sport. I love to do escape rooms,
          and have an interest for cooking.
        </p>

        <p>
          I enjoy video games, and I have a passion for Rocket League. I've
          played Rocket League at a collegiate level since my freshman year, and
          I've had so many great experiences playing in countless tournaments!
          Some of my favorite memories are getting the chance to travel to LSU
          and UNCC and playing in collegiate LAN tournaments.
        </p>

        <p>
          My senior year of my studies I've decided to start coaching our
          collegiate team so I can focus more on another passion (coding!) while
          still being apart of another activity I care about.
        </p>
      </div>
    </div>
  </div>
</section>
