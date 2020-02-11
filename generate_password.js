function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generatePassword(options) {
  //define element user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  let password = ''

  //create a box to store user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  //remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
  }

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  //start generating password
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }

  //return password
  return password
}

//export function 
module.exports = generatePassword