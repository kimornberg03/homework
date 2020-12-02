// Skriv en while loop
// Som varje iteration (repetition) slumpar ett heltal mellan 0 och 10
// Om talet blir 6, avsluta loopen


// Exempel på output:
// 4
// 7
// 3
// 8
// 4
// 1
// 1
// 6

let x = 0

while (x != 6) {
    x = Math.floor(Math.random() * 11)
    console.log(x)
}

