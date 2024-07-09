// ITERATION 1

// Suspects Array
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://static.wikia.nocookie.net/cluedo/images/4/4b/Mayor_Green_%282023%29_by_Hasbro.jpeg/revision/latest/scale-to-width-down/1000?cb=20231130084741',
    color: 'green'
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'https://static.wikia.nocookie.net/cluedo/images/a/a4/Orchid_Mobile.jpg/revision/latest?cb=20201202181031',
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://static.wikia.nocookie.net/cluedo/images/5/5c/Professor_Plum_%282023%29_by_Hasbro.jpeg/revision/latest/scale-to-width-down/1000?cb=20231130084751',
    color: 'purple'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://static.wikia.nocookie.net/cluedo/images/d/d9/Miss_Scarlett_%282023%29_by_Hasbro.jpeg/revision/latest/scale-to-width-down/1000?cb=20231130084725',
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',  
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://static.wikia.nocookie.net/cluedo/images/c/c6/Solicitor_Peacock_%282023%29_by_Hasbro.jpeg/revision/latest/scale-to-width-down/1000?cb=20231130084747',
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.wikia.nocookie.net/cluedo/images/6/6e/Colonel_Mustard_%282023%29_by_Hasbro.jpeg/revision/latest/scale-to-width-down/1000?cb=20231130084730',
    color: 'yellow'
  }
];

// Rooms Array

const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'Spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' }
];

// Weapons Array
const weaponsArray = [
  { name: 'rope', weight: 10 },
  { name: 'knife', weight: 8 },
  { name: 'candlestick', weight: 2 },
  { name: 'dumbbell', weight: 30 },
  { name: 'poison', weight: 2 },
  { name: 'axe', weight: 15 },
  { name: 'bat', weight: 13 },
  { name: 'trophy', weight: 25 },
  { name: 'pistol', weight: 20 }
];


// ITERATION 2

// Random selector function
function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Create the mystery function
function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
}


// Reveal the mystery function
function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

// Example usage:
const mystery = pickMystery();
console.log(revealMystery(mystery));


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
