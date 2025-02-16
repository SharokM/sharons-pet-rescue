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
      this.isTired = 1;
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

// clover.sleep();
// baxter.play();

// console.log(clover);
// console.log(baxter);

clover.isTired = 8;
fran.isTired = 9;

const allPets = [sora, clover, baxter, cleo, fran];

// console.log(allPets);

const showPets = function (petArray) {
    pets.innerHTML = "";
    for (let pet of petArray) {
        let status = "ready to play!";
        if (pet.isTired >= 7) {
         status = "sleeping";
        };
        const li = document.createElement("li");
        li.innerHTML = `<pet-name>${pet.name}<pet-name> the ${pet.species} is ${status}`;
            pets.append(li);
    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets);
});