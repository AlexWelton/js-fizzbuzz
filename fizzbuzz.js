// This is our main function
function fizzbuzz() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`Max number?`, max => {
        fizzbuzzUpTo(max);
        rl.close();
    });
}

// function getRules() {
//   rl.question(`Add new rule? Y/N >>`, response => {
//     if (response.lower() == 'y') {
//       let rule = addRule();
//       return getRules().append(rule);
//     } else {
//       return [];
//     }
//     rl.close();
//   });
// }

// function addRule() {
//   rl.question('New Rule (Format : number|string) >>', response => {
//     let number = response.split('|')[0];
//     let string = response.split('|')[1];
//     return new Set([number, string]);
//     rl.close();
//   });
// }

function fizzbuzzUpTo(max) {
    for (let i = 1; i <= max; i++) {
        let string = '';

        if (i % 3 === 0) {
            string += 'Fizz';
        }
        if (i % 5 === 0) {
            string += 'Buzz';
        }
        if (i % 7 === 0) {
            string += 'Bang';
        }
        if (i % 11 === 0) {
            string = 'Bong';
        }
        if (i % 13 === 0) {
            let pos = 0;
            let bFound = false;
            while (pos < string.length) {
                if (string[pos] === 'B') {
                    string = string.slice(0, pos) + 'Fezz' + string.slice(pos);
                    bFound = true;
                    break;
                }
                pos += 1;
            }
            if (bFound === false) {
                string += 'Fezz';
            }
        }
        if (i % 17 === 0) {
            let rev = '';
            for (let j = string.length - 1; j >= 0; j--) {
                rev += string.charAt(j);
            }
            string = rev;
        }

        if (string === '') {
            console.log(i);
        } else console.log(string);
    }
}

// Now, we run the main function:
fizzbuzzUpTo(100);
