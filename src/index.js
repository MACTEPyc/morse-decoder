const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const CODE_TO_MORSE = {
    '00': '',
    '10': '.',
    '11': '-',
}

function decode(expr) {
    let decodeMorse = '';
    for (let i = 0; i < expr.length / 10; i++) {
        let morseStr = '';
        subStr = expr.substr(i * 10, 10);
        if (subStr === '**********') {
            decodeMorse += ' ';
        } else {
            for (let j = 0; j < subStr.length / 2; j++) {
                morseStr += CODE_TO_MORSE[subStr.substr(j * 2, 2)];
            }
            decodeMorse += MORSE_TABLE[morseStr];  
        }
    }
    return decodeMorse;
}

module.exports = {
    decode
}