//  Schere – Stein – Papier Spiel 🪨 ✂️ 📄

// Lies die Eingabe des Spielers aus der Kommandozeile // Get player's move from command line arguments
const playerChoice = process.argv[2]?.toLowerCase();
const choices = ["rock", "paper", "scissors"]; // Mögliche Optionen
const computerChoice = choices[Math.floor(Math.random() * choices.length)]; //  Zufällige Wahl des Computers

// Eingabe überprüfen
if (!choices.includes(playerChoice)) {
  console.log("Bitte gib 'rock', 'paper' oder 'scissors' ein.");
  process.exit(1);
}

// Gewinner bestimmen
let result = "";

// Regeln definieren
const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Ergebnisse vergleichen
if (playerChoice === computerChoice) {
  result = "Unentschieden!";
} else if (rules[playerChoice] === computerChoice) {
  result = "Du hast gewonnen!";
} else {
  result = "Du hast verloren!";
}

// Ergebnis anzeigen
console.log(`Du hast gewählt: ${playerChoice}`);
console.log(`Computer hat gewählt: ${computerChoice}`);
console.log(`Ergebnis: ${result}`);
