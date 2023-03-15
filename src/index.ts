class Person {
  speak(name?: string): string {
    return `Hello, ${name?.toUpperCase() ?? 'Fulano'}!`
  }
}

const person = new Person();

person.speak('Matheus');
person.speak();
