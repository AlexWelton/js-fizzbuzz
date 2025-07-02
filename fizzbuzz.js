const prompt = require('prompt-sync')();

// This is our main function
function fizzbuzz() {
    let max = prompt('Maximum number? >> ');
    let rules;

    if (prompt(`Custom Rules? >> `).toLowerCase() === "y") {
        rules = getRules();
    }
    else {
        rules = [3,5,7,9,11,13,17];
    }

    fizzbuzzUpTo(max,rules);

}

function getRules() {
    let response = prompt('Enter rule to activate ("n" to finish) >> ');
    let rules = [];
    while (response !== 'n') {
        rules.push(parseInt(response));
        console.log("Rules active = ".concat(rules.toString()));
        response = prompt('Enter rule to activate ("n" to finish) >> ');
    }
    return rules;
}

function fizzbuzzUpTo(max, rules) {

    for (let i = 1; i <= max; i++) {
        let components = [];

        if (i % 3 === 0 && rules.indexOf(3) !== -1) {
            components.push('Fizz');
        }
        if (i % 5 === 0 && rules.indexOf(5) !== -1) {
            components.push('Buzz');
        }
        if (i % 7 === 0 && rules.indexOf(7) !== -1) {
            components.push('Bang');
        }
        if (i % 11 === 0 && rules.indexOf(11) !== -1) {
            components = ['Bong'];
        }
        if (i % 13 === 0 && rules.indexOf(13) !== -1) {
            let pos = 0;
            let bFound = false;

            while (pos < components.length) {
                if (components[pos][0] === 'B') {
                    let head = components.slice(0, pos);
                    let tail = components.slice(pos);
                    components = head.concat(["Fezz"]).concat(tail);
                    bFound = true;
                    break;
                }
                pos += 1;
            }
            if (bFound === false) {
                components.push('Fezz');
            }
        }
        if (i % 17 === 0 && rules.indexOf(17) !== -1) {
            let rev = [];
            for (let j = components.length - 1; j >= 0; j--) {
                rev.push(components[j]);
            }
            components = rev;
        }

        if (components.length === 0) {
            console.log(i);
        } else {
            let out = '';
            for (let j = 0; j < components.length; j++) {
                out += components[j];
            }
            console.log(out);
        }

    }
}

// Now, we run the main function:
fizzbuzz();
