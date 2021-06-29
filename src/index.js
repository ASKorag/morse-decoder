const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(exp) {
  let newExp = exp

  const dozens = Math.ceil(newExp.length / 10)

  let message = []

  for (let i = 0; i < dozens; i++) {
    let letter = ''
    let subStr = newExp.slice(i * 10, (i + 1) * 10)
    letter = getLetter(subStr, MORSE_TABLE)

    message.push(letter)
  }

  return message.join('')
}

function getLetter(exp, morseTable) {
  if (exp === '**********') {
    return ' '
  } else {
    let letterCode = []

    for (let k = 0; k < 5; k++) {
      let substr = exp.slice(k * 2, (k + 1) * 2)

      if (substr === '10') {
        letterCode.push('.')
      } else if (substr === '11') {
        letterCode.push('-')
      }
    }

    return morseTable[letterCode.join('')]
  }
}

module.exports = {
  decode,
}
