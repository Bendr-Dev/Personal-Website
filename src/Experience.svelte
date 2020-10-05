<script lang="ts">
</script>

<style>
  .experience {
    display: flex;
    width: 100%;
    height: auto;
    background-color: var(--light-primary-color);
    flex-direction: column;
    padding: 5rem 0;
  }

  .title {
    color: var(--dark-primary-color);
    text-align: center;
    font-size: 32px;
  }

  .title h2 {
    font-weight: 100;
  }

  .content {
    margin: 1rem 5rem;
    display: grid;
    /* Convert to grid for responsiveness */
    grid-template-areas:
      "left left right right"
      "left left right right"
      "left left right right"
      "left left right right";
    column-gap: 10rem;
  }

  .title-header {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-header * {
    margin: 0.5rem 0;
    font-weight: 100;
    color: var(--primary-text-color);
    font-size: 16px;
    text-align: center;
  }

  .title-header h3 {
    font-weight: 600;
    font-size: 18px;
  }

  .title-header h4 > span {
    font-style: italic;
  }

  img {
    border-radius: 50%;
    border: 3px solid var(--dark-primary-color);
    width: 210px;
    height: 210px;
    text-align: center;
    line-height: 210px;
    align-self: center;
  }

  .left-block {
    display: flex;
    flex-direction: column;
    grid-area: left;
  }

  .item {
    display: flex;
    flex-direction: row;
  }

  .right-block {
    line-height: 1.6;
    font-weight: 200;
    grid-area: right;
  }

  .text-box {
    height: 540px;
    max-height: 540px;
    color: var(--primary-text-color);
  }

  @media (max-width: 1308px) {
    .right-block {
      display: none;
    }
    .content {
      margin: 0;
      margin-top: 5rem;
      column-gap: 0;
      display: flex;
      flex-direction: column;
    }

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    }

    .title-header * {
      width: 100%;
    }

    .title-header h3 {
      margin-top: 1rem;
      font-size: 14px;
    }

    .title-header h4,
    .title-header span {
      font-size: 12px;
    }
    .title-header {
      margin: 0 1rem;
    }

    svg {
      margin: auto;
      display: none;
    }

    svg line {
      visibility: hidden;
    }
  }

  @media (max-width: 1568px) {
    ul {
      display: none;
    }
  }
</style>

<section class="experience" id="experiences">
  <!-- Title of section -->
  <div class="title">
    <h2>Experiences</h2>
  </div>
  <!-- Content of section -->
  <div class="content">
    <!-- Roadmap style following all my educational and professional experiences to date -->
    <!-- Left hand side has visuals and titles of each work-place/school I've been -->
    <div class="left-block">
      <div class="item">
        <img src="img/fl-poly.jpg" alt="Florida Poly" />
        <div class="title-header">
          <h3>Bachelor of Science - Computer Engineering</h3>
          <h4>
            Florida Polytechnic University, <span>expected May 2021</span>
          </h4>
          <h4>Lakeland, Florida</h4>
        </div>
      </div>
      <svg height="324" width="216">
        <line
          x1="108"
          y1="324"
          x2="108"
          y2="0"
          style="stroke:rgb(69,90,100);stroke-width:3px" />
      </svg>
      <div class="item">
        <img src="img/smg-logo.jpg" alt="Scotts-MiracleGro" />
        <div class="title-header">
          <h3>Cloud Applications Developer Intern</h3>
          <h4>
            The Scotts Miracle-Gro Company, <span>May - August 2019</span>
          </h4>
          <h4>Marysville, Ohio</h4>
        </div>
      </div>
      <svg height="324" width="216">
        <line
          x1="108"
          y1="324"
          x2="108"
          y2="0"
          style="stroke:rgb(69,90,100);stroke-width:3px" />
      </svg>
      <div class="item">
        <img src="img/smg-logo.jpg" alt="Scotts-MiracleGro" />
        <div class="title-header">
          <h3>Cloud Applications Developer Intern</h3>
          <h4>
            The Scotts Miracle-Gro Company, <span>May - August 2020</span>
          </h4>
          <h4>Marysville, Ohio</h4>
        </div>
      </div>
      <svg height="324" width="216">
        <line
          x1="108"
          y1="324"
          x2="108"
          y2="0"
          style="stroke:rgb(69,90,100);stroke-width:3px" />
      </svg>
    </div>
    <!-- Right hand side goes into more details about each experience -->
    <div class="right-block">
      <div class="text-box">
        <p>
          Attending Florida Polytechnic University has been an amazing
          experience. It has allowed me to meet a lot of diverse people who I've
          come close with. Florida Poly's small close community has been perfect
          for me. It allowed me to express my passion for Rocket League and I
          was able to meet similiar peers who also expressed that same passion.
          Most importantly Florida Poly guided me to finding what I love doing
          most, thanks to my peers and the amazing faculty staff I've met here.
          They took what I love studying and provided me with all the resources
          to help me succeed and grow.
        </p>
      </div>
      <div class="text-box">
        <p>
          My first internship was at the Scotts Miracle-Gro Company. The
          circumstances surrounding my presence there was a unique one. I was
          one of the four cloud application interns selected to work on an
          internal application. I met my manager through Rocket League and when
          he saw my passion for programming he gave me a shot interning for his
          team. It was a challenging-but very rewarding internship, as it was an
          awakening for myself. Being thousands of miles from home for three
          months and living in a place I've never been before where I knew
          no-one was an eye-opener. The family culture that embraces Scotts
          combined with the amazing people working there was comforting and made
          me feel like I belonged there.
        </p>
        <ul>
          <li>
            Worked as front-end application developer to create quality
            assurance platform for $5B+ Revenue company supporting 45 production
            facilities.
          </li>
          <li>
            Implemented UI automation process to simplify gathering sales data
            for Canadian facilities.
          </li>
          <li>
            Interacted with business partners in order to gather requirements to
            efficiently create solutions for these business processes.
          </li>
          <li>Technologies used: Ionic, Angular, Firebase, and JS/HTML/CSS.</li>
        </ul>
      </div>
      <div class="text-box">
        <p>
          After my first internship at Scotts, I was offered a spot for next
          summer. Once again, my circumstances being here was a unique one. I
          had actually lined up another internship at a software development
          company locally in Tampa, Florida. However, due to COVID-19 they
          closed all their internship positions. Scotts did not close their
          internship slots but made them remote. Being able to come back
          (remotely) was a blessing in disguise. I was the only cloud
          application intern so I got to work directly with full-time associates
          on another internal application! As a developer it was at this point I
          felt I was making great strides in not only learning, but applying
          skills I had been rapidly attaining. Even with being far away from the
          team and my mentor here, I was still able to learn so much and have so
          much fun in these unique circumstances.
        </p>
        <ul>
          <li>
            Worked as full-stack developer on resource management and data
            collection application for on premise R&D, as well as 20+ college
            campuses.
          </li>
          <li>
            Developed side-by-side with full-time associates on sales
            application that processes over $400 million in sales every year.
          </li>
          <li>
            Technologies used include: Angular, Flask, Google Cloud Platform,
            Electron, and JS/HTML/CSS.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
