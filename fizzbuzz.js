const prompt = require('prompt-sync')();

// This is our main function
function fizzbuzz() {
    let max = prompt('Maximum number? >> ');
    let rules;

    if (prompt(`Custom Rules? >> `).toLowerCase() === "y") {
        rules = createRules();
    }
    else {
        rules = [3,5,7,9,11,13,17];
    }

    fizzbuzzUpTo(max,rules);

}

function createRules() {
    let question = "Add new rule ('n' to finish)" +
        "Format : <number> reverse\n" +
        "<number> replace <replacement>\n" +
        "<number> append <suffix>\n";
    console.log(question);
    let response = prompt(">> ");
    let rules = new Map();
    while (response !== 'n') {
        let num = response.split(" ")[0];
        let type = response.split(" ")[1];
        switch(type) {
            case "reverse":
                rules.set(num,["reverse"]);
                break;
            case "append":
                let suffix = response.split(" ")[2];
                rules.set(num,["append", suffix]);
                break;
            case "replace":
                let replacement = response.split(" ")[2];
                rules.set(num,["replace", replacement]);
                break;
            default:
                console.log("Invalid rule");
                break;
        }
        console.log("Rule Added!");
        response = prompt(">> ");
    }
    return rules;
}

function fizzbuzzUpTo(max, rules) {
    for (let i = 1; i <= max; i++) {
        let components = [];
        for (let [num, rule] of rules) {
            if (i % num === 0) {
                switch(rule[0]) {
                    case "reverse":
                        let rev = [];
                        for (let j = components.length - 1; j >= 0; j--) {
                            rev.push(components[j]);
                        }
                        components = rev;
                        break;
                    case "append":
                        let suffix = rule[1];
                        components.push(suffix);
                        break;
                    case "replace":
                        let replacement = rule[1];
                        components = [replacement];
                        break;
                    default:
                        break;
                }
            }
        }

        //
        // if (i % 13 === 0 && rules.indexOf(13) !== -1) {
        //     let pos = 0;
        //     let bFound = false;
        //
        //     while (pos < components.length) {
        //         if (components[pos][0] === 'B') {
        //             let head = components.slice(0, pos);
        //             let tail = components.slice(pos);
        //             components = head.concat(["Fezz"]).concat(tail);
        //             bFound = true;
        //             break;
        //         }
        //         pos += 1;
        //     }
        //     if (bFound === false) {
        //         components.push('Fezz');
        //     }
        // }

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
