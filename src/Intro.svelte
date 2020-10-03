<script lang="ts">
  /**
   * Creates constellation canvas animation. Credit to Changhui Xu.
   * Link to repo: https://github.com/changhuixu/canvas-animation-demos/blob/master/src/examples/constellation.ts
   **/

  // Determine window size
  let windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const canvas = document.getElementById("intro");
</script>

<style>
  .intro {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: var(--default-primary-color);
  }
</style>

<div class="intro">
  <canvas
    id="intro"
    width={windowWidth}
    height={windowHeight}
    style="background-image: linear-gradient(-180deg, var(--dark-primary-color) 0%, var(--default-primary-color) 100%);">
    <div class="title">
      <h1>Brandon Endres</h1>
    </div>
  </canvas>
</div>
