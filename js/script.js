const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      this.isTired = 1;
      console.log(`${this.name} needs a nap. Zzz…`);
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play!`);
        this.sleep();
      } else {
        console.log(`Yay ${name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "Rabbit");
const baxter = createPet("Baxter", "Hamster");
const cleo = createPet("Cleo", "Rat");
const fran = createPet("Fran", "Turtle");

console.log(sora, clover, baxter, cleo, fran);

clover.sleep();
baxter.play();

console.log(clover);
console.log(baxter);
