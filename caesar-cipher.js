// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

const text = process.argv[2];
const shift = parseInt(process.argv[3]); // parseInt: 3 string zu 3 nummer umwandeln

//  Überprüfe, ob beide Eingaben vorhanden sind
if (!text || isNaN(shift)) {
  console.log(" Bitte gib einen Text und eine Zahl ein.");
  process.exit();
}

//  Hauptfunktion
const caesarCipher = (text, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (const char of text) {
    // حلقة for…of تمرّ على كل حرف من النص الأصلي (text)
    const lower = char.toLowerCase(); // alle buchstaben klein
    if (alphabet.includes(lower)) {
      // wenn der Buchstabe ist schon in der alphabet
      const index = alphabet.indexOf(lower); // Buchstabensort (a ist 0, b:1 usw)
      const newIndex = (index + shift + 26) % 26; // neue Buchstabensort rechnen
      const newChar = alphabet[newIndex];
      result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      // wenn der Buchstabe nicht in der Gruppe alphabet oder eine zeichnung, bleibt ohne Veränderung
      result += char;
    }
  }

  return result;
};

// Ergebnis anzeigen
const encrypted = caesarCipher(text, shift);

console.log(`Original: ${text}`);
console.log(`Shift: ${shift}`);
console.log(`Encrypted: ${encrypted}`);
