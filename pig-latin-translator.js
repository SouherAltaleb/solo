// Regeln:
// 	1.	Wenn das Wort mit einem Vokal (a, e, i, o, u) beginnt → füge “way” am Ende hinzu.
// 	2.	Wenn das Wort mit einem Konsonanten beginnt → verschiebe den ersten Buchstaben ans Ende und füge “ay” hinzu.
// 	3.	Wenn das Wort mit zwei Konsonanten beginnt → verschiebe beide an das Ende und füge “ay” hinzu.

// Eingbae vom Terminal nehemen
const input = process.argv.slice(2).join(" "); // join (" ") verbindet die Argumente wieder zu einem String mit Leerzeichen.
// Überprüft, ob eine Eingabe vorhanden ist
if (!input) {
  console.log("Bitte gib einen Satz ein.");
  process.exit(1);
}

// Funktion zur Umwandlung eines Wortes in Pig Latin
function toPigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lower = word.toLowerCase(); // wort in kleinbuchtsaben umwandeln

  // Wenn das Wort mit einem Vokal beginnt
  if (vowels.includes(lower[0])) {
    // prüft, ob das Wort mit einem Vokal beginnt
    return word + "way";
  }

  // Wenn das Wort mit zwei Konsonanten beginnt
  if (!vowels.includes(lower[0]) && !vowels.includes(lower[1])) {
    return word.slice(2) + word.slice(0, 2) + "ay"; // child → ild + ch + ay = ildchay.
  }

  // Wenn das Wort mit einem Konsonanten beginnt
  return word.slice(1) + word[0] + "ay"; // pig → ig + p + ay = igpay.
}

// Wendet die Funktion auf jedes Wort an
const translated = input.split(" ").map(toPigLatin).join(" ");

// Ausgabe des Ergebnisses
console.log("Original:", input);
console.log("Pig Latin:", translated);
