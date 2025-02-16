function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDifficultySettings() {
    let difficulty;
    do {
        difficulty = prompt("Choisissez un niveau : Facile, Intermédiaire ou Difficile").toLowerCase();
    } while (!["facile", "intermédiaire", "difficile"].includes(difficulty));

    switch (difficulty) {
        case "facile":
            return { min: 1, max: 10, attempts: 5 };
        case "intermédiaire":
            return { min: 1, max: 50, attempts: 7 };
        case "difficile":
            return { min: 1, max: 100, attempts: 10 };
    }
}

function startGame() {
    const { min, max, attempts } = getDifficultySettings();
    const secretNumber = getRandomNumber(min, max);
    let remainingAttempts = attempts;

    while (remainingAttempts > 0) {
        let guess = parseInt(prompt(`Devinez le chiffre entre ${min} et ${max} (Tentatives restantes : ${remainingAttempts})`));

        if (isNaN(guess) || guess < min || guess > max) {
            alert(`Veuillez entrer un nombre valide entre ${min} et ${max}`);
            continue;
        }

        if (guess === secretNumber) {
            alert(`Bravo ! Vous avez trouvé le chiffre ${secretNumber} 🎉`);
            break;
        } else if (guess < secretNumber) {
            alert("Trop bas !");
        } else {
            alert("Trop haut !");
        }

        remainingAttempts--;
    }

    if (remainingAttempts === 0) {
        alert(`Dommage ! Le chiffre caché était 🗑️ ${secretNumber} 😢`);
    }

    if (confirm("Voulez-vous rejouer ?")) { // confirm trajaa True ken user hat OK sinon False
        startGame();
    }
}
