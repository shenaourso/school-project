interface Greeting {
  name: string;
}

const greet = (name: string): Greeting => ({ name });

export const greetings = (names: string[]): string[] => names.map((name) => `Hello, ${greet(name).name}`);
