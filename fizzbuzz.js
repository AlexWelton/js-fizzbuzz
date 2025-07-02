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
        "Format : \n" +
        "<number> reverse\n" +
        "<number> regex <regex> <insertion> <appendOnMiss>\n" +
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
            case "regex":
                let matchingRule = response.split(" ")[2];
                let toInsert = response.split(" ")[3];
                let appendOnMiss = response.split(" ")[4];
                rules.set(num,["regex", matchingRule, toInsert, appendOnMiss]);
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
                switch (rule[0]) {

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
                    case "regex":
                        let matchingRule = rule[1];
                        let toInsert = rule[2];
                        let appendOnMiss = rule[3];
                        let pos = 0;

                        let found = false;

                        while (pos < components.length) {
                            let regex = new RegExp("^" + matchingRule + "$");
                            if (regex.test(components[pos])) {
                                let head = components.slice(0, pos);
                                let tail = components.slice(pos);
                                components = head.concat([toInsert]).concat(tail);
                                found = true;
                                break;
                            }
                            pos += 1;
                        }
                        if (found === false && appendOnMiss === 'true') {
                            components.push(toInsert);
                        }
                        break;
                    default:
                        break;
                }
            }
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
