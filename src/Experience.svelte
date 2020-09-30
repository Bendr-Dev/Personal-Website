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
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .education-header {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .education-header * {
    margin: 0.5rem 0;
    font-weight: 100;
    color: var(--primary-text-color);
    font-size: 16px;
  }

  .education-header h4 {
    font-weight: 600;
    font-size: 18px;
  }

  .education-header h5 > span {
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
    min-width: 50%;
  }

  .item {
    display: flex;
    flex-direction: row;
  }

  .right-block {
    margin-left: 3rem;
    line-height: 1.6;
    font-weight: 200;
  }

  .text-box {
    height: 432px;
    max-height: 432px;
    overflow-y: hidden;
  }

  @media (max-width: 799px) {
    svg line {
      visibility: hidden;
    }

    .item {
      flex-direction: column;
    }
  }
</style>

<section class="experience" id="experiences">
  <!-- Title of section -->
  <div class="title">
    <h2>Experiences ...</h2>
  </div>
  <!-- Content of section -->
  <div class="content">
    <!-- Roadmap style following all my educational and professional experiences to date -->
    <article>
      <!-- Left hand side has visuals and titles of each work-place/school I've been -->
      <div class="left-block">
        <div class="item">
          <img src="../../Florida-Poly-Icon.jpg" alt="Florida Poly" />
          <div class="education-header">
            <h4>Bachelor of Science - Computer Engineering</h4>
            <h5>
              Florida Polytechnic University, <span>expected May 2021</span>
            </h5>
            <h5>Lakeland, Florida</h5>
          </div>
        </div>
        <svg height="216" width="216">
          <line
            x1="108"
            y1="216"
            x2="108"
            y2="0"
            style="stroke:rgb(69,90,100);stroke-width:3px" />
        </svg>
        <div class="item">
          <img src="../../scotts.jpg" alt="Scotts-MiracleGro" />
          <div class="education-header">
            <h4>Cloud Applications Developer Intern</h4>
            <h5>
              The Scotts Miracle-Gro Company, <span>May - August 2019</span>
            </h5>
            <h5>Marysville, Ohio</h5>
          </div>
        </div>
        <svg height="216" width="216">
          <line
            x1="108"
            y1="216"
            x2="108"
            y2="0"
            style="stroke:rgb(69,90,100);stroke-width:3px" />
        </svg>
        <div class="item">
          <img src="../../scotts.jpg" alt="Scotts-MiracleGro" />
          <div class="education-header">
            <h4>Cloud Applications Developer Intern</h4>
            <h5>
              The Scotts Miracle-Gro Company, <span>May - August 2020</span>
            </h5>
            <h5>Marysville, Ohio</h5>
          </div>
        </div>
        <svg height="216" width="216">
          <line
            x1="108"
            y1="216"
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
            experience. It has allowed me to meet a lot of diverse people who
            I've come close with. Florida Poly's small close community has been
            perfect for me. It allowed me to express my passion for Rocket
            League and I was able to meet similiar peers who also expressed that
            same passion. Most importantly Florida Poly guided me to finding
            what I love doing most, thanks to my peers and the amazing faculty
            staff I've met here. They took what I love studying and provided me
            with all the resources to help me succeed and grow.
          </p>
        </div>
        <div class="text-box">
          <p>
            My first internship was at the Scotts Miracle-Gro Company. The
            circumstances surrounding my presence there was a unique one. I was
            one of the four cloud application interns selected to work on an
            internal application. I met my manager through Rocket League and
            when he saw my passion for programming he gave me a shot interning
            for him. It was a challenging-but very rewarding internship, as it
            was an awakening for myself. Being thousands of miles from home for
            three months and living in a place I've never been before where I
            knew no-one was an eye-opener. The family culture that embraces
            Scotts combined with the amazing people working there was
            comforting.
          </p>
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
            application intern so I got to work directly with full-time
            associates on another internal application! As a developer it was at
            this point I felt I was making great strides in not only learning,
            but applying skills I had been rapidly attaining. Even with being
            far away from the team and my mentor here, I was still able to learn
            so much and have so much fun in these unique circumstances.
          </p>
        </div>
      </div>
    </article>
    <!-- Closing title -->
    <div class="title">
      <h2>... To Be Continued!</h2>
    </div>
  </div>
</section>
