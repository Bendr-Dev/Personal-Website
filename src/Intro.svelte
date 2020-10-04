<script lang="ts">
  import { onMount } from "svelte";

  /**
   * Creates constellation canvas animation.
   * Link to repo I based code off of: https://github.com/changhuixu/canvas-animation-demos/blob/master/src/examples/constellation.ts
   * Credit to Changhui Xu.
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

  /**
   * A debouncer to limit the amount of calls to a function
   * A higher order function, returns a closure
   * @param func: function being passed through
   * @param wait (number): delay to wait after last action
   */
  const debounce = (func, wait: number) => {
    let timeout;

    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Gets the user's window size
   **/
  const getWindowSize = debounce(() => {
    windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }, 250);

  // Configuration object for particle
  const config: {
    particleVelocity: number;
    particleRadius: number;
    particleColor: string;
  } = {
    particleVelocity: 0.1,
    particleRadius: 1.2,
    particleColor: "rgb(255, 152, 0)",
  };

  // Class for particle object
  class Particle {
    public x: number = 0;
    public y: number = 0;
    private velocityX: number = 0;
    private velocityY: number = 0;
    public readonly radius: number;

    constructor(config: {
      particleVelocity: number;
      particleRadius: number;
      particleColor: string;
    }) {
      this.velocityX =
        Math.random() < 0.5
          ? -config.particleVelocity
          : config.particleVelocity;
      this.velocityY =
        Math.random() < 0.5
          ? -config.particleVelocity
          : config.particleVelocity;
      this.radius = config.particleRadius;
    }

    // Randomize particle values
    randomize(canvasWidth: number, canvasHeight: number) {
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight;
      this.velocityX = Math.random() * 0.5;
      this.velocityY = Math.random() * 0.5;

      if (this.velocityX === 0) {
        this.velocityX = 0.1;
      }

      if (this.velocityY === 0) {
        this.velocityY = 0.1;
      }
    }

    // Calculates particle movement
    move(canvasWidth: number, canvasHeight: number) {
      // Checks if particle has reached edge of screen
      if (this.y < 0 || this.y > canvasHeight) {
        this.velocityX = this.velocityX;
        this.velocityY = -this.velocityY;
      }

      if (this.x < 0 || this.x > canvasWidth) {
        this.velocityX = -this.velocityX;
        this.velocityY = this.velocityY;
      }

      // Move the particle by velocity value
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  }

  // bind to canvas element
  let canvas: HTMLCanvasElement;

  onMount(() => {
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    window.addEventListener("resize", getWindowSize);

    const ctx = canvas.getContext("2d");
    let particles: Particle[] = [];

    ctx.fillStyle = config.particleColor;

    // Creates particles
    const drawparticles = (n: number) => {
      particles = [];
      for (let i = 0; i < n; i++) {
        const particle = new Particle(config);
        particle.randomize(windowWidth, windowHeight);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fill();
        particles.push(particle);
      }
      window.requestAnimationFrame(() => animate()) ||
        window.webkitRequestAnimationFrame(() => animate());
    };

    // Creates particle movement
    const animate = () => {
      ctx.clearRect(0, 0, windowWidth, windowHeight);
      ctx.fillStyle = config.particleColor;
      particles.forEach((particle) => {
        particle.move(windowWidth, windowHeight);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fill();
      });
      window.requestAnimationFrame(() => animate()) ||
        window.webkitRequestAnimationFrame(() => animate());
    };

    if (windowWidth > 376) {
      drawparticles(200);
    } else {
      drawparticles(100);
    }

    getWindowSize();
  });
</script>

<style>
  .intro {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: var(--default-primary-color);
  }

  .title {
    user-select: none;
    position: absolute;
    bottom: 10%;
    width: 100%;
    padding: 150px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    position: absolute;
    padding: 0;
    text-align: center;
  }

  .title h2 {
    font-weight: 100;
    color: var(--text-icons);
    font-size: 64px;
  }

  .title h6 {
    font-weight: 100;
    color: #ccc;
    font-size: 32px;
    font-style: italic;
  }

  @media (max-width: 576px) {
    .title h2 {
      font-size: 32px;
    }

    .title h6 {
      font-size: 24px;
    }
  }
</style>

<div class="intro">
  <canvas
    bind:this={canvas}
    id="intro"
    width={windowWidth}
    height={windowHeight}
    style="background-image: linear-gradient(-180deg, var(--dark-primary-color) 0%, var(--default-primary-color) 100%);" />
  <div class="title">
    <h2>- Brandon Endres -</h2>
    <h6>Software Developer</h6>
  </div>
</div>
