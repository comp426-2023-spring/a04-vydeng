export function rps(shot) {
    const moves = ["rock", "paper", "scissors"]
    let opponent = moves[Math.floor(Math.random() * moves.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opponent};
    }
    
    let user = shot.toLowerCase();

    if (!moves.includes(user)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opponent === user) {
        result = "tie"
    }
    else if (user === "rock" && opponent === "scissors" || user === "scissors" && opponent === "paper" || user === "paper" && opponent === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: user,
            opponent: opponent,
            result: result };
}

export function rpsls(shot) {
    const moves = ["rock", "paper", "scissors", "lizard", "spock"]
    let opponent = moves[Math.floor(Math.random() * moves.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opponent};
    }
    
    let user = shot.toLowerCase();

    if (!moves.includes(user)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opponent === user) {
        result = "tie"
    }
    else if (user === "rock" && opponent === "scissors" || user === "scissors" && opponent === "paper" || user === "paper" && opponent === "rock") {
        result = "win"
    }
    else if (user === "rock" && opponent === "lizard" || user === "lizard" && opponent === "spock" || user === "spock" && opponent === "scissors" || user === "scissors" && opponent === "lizard" || user === "lizard" && opponent === "paper" || user === "paper" && opponent === "spock" || user === "spock" && opponent === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: user,
            opponent: opponent,
            result: result };
}