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

const DIG_TABLE = {
  10: '.',
  11: '-',
}

const LETTER_BASE = 10
const MORSE_CODE_BASE = 2

function decode(exp) {
  const symbolAmount = exp.length / LETTER_BASE

  let decodedMessage = []

  for (let i = 0; i < symbolAmount; i++) {
    let decodedLetter = ''
    let encryptedLetter = exp.slice(i * LETTER_BASE, (i + 1) * LETTER_BASE)
    decodedLetter = getLetter(encryptedLetter)
    decodedMessage.push(decodedLetter)
  }

  return decodedMessage.join('')
}

function getLetter(exp) {
  if (exp === '**********') {
    return ' '
  } else {
    let letterCode = []

    for (let i = 0; i < LETTER_BASE / MORSE_CODE_BASE; i++) {
      let substr = exp.slice(i * MORSE_CODE_BASE, (i + 1) * MORSE_CODE_BASE)

      letterCode.push(DIG_TABLE[substr])
    }

    return MORSE_TABLE[letterCode.join('')]
  }
}

module.exports = {
  decode,
}
