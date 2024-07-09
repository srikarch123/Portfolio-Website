declare module 'typewriter-effect/dist/core' {
    interface Options {
      loop?: boolean;
      delay?: number;
    }
  
    class Typewriter {
      constructor(selector: string | HTMLElement, options?: Options);
      typeString(text: string): Typewriter;
      pauseFor(duration: number): Typewriter;
      start(): Typewriter;
    }
  
    export default Typewriter;
  }
  