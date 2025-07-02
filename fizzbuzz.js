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
        let components = [];

        if (i % 3 === 0) {
            components.push('Fizz');
        }
        if (i % 5 === 0) {
            components.push('Buzz');
        }
        if (i % 7 === 0) {
            components.push('Bang');
        }
        if (i % 11 === 0) {
            components = ['Bong'];
        }
        if (i % 13 === 0) {
            let pos = 0;
            let bFound = false;
            while (pos < components.length) {
                if (components[pos] === 'B') {
                    components = components
                        .slice(0, pos)
                        .push('Fezz')
                        .concat(components.slice(pos));
                    bFound = true;
                    break;
                }
                pos += 1;
            }
            if (bFound === false) {
                components.push('Fezz');
            }
        }
        if (i % 17 === 0) {
            let rev = [];
            for (let j = components.length - 1; j >= 0; j--) {
                rev.push(components[j]);
            }
            components = rev;
        }

        if (components === []) {
            console.log(i);
        } else {
            let out = '';
            for (let j = 0; j < components.length; j++) {
                out += components[j];
            }
        }
    }
}

// Now, we run the main function:
fizzbuzzUpTo(120);
