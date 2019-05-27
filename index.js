const animals = [
  'Bird',
  'Cat',
  'Mammal',
  'Dog',
  'Bear',
  'Lion',
  'Fish',
  'Wolf',
  'Tiger',
  'Turtle',
  'Elephant',
  'Frog',
  'Fox',
  'Monkey',
  'Horse'
]

var RandomAnimal = {
  getOne() {
    var maximum = animals.length - 1;
    var minimum = 0;
    var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;;
    return animals[randomNumber]
  }
}

module.exports = randomAnimal;
