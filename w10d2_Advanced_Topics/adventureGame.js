// this is code for a text based adventure game. it will be node based and used on the command line directly
// and so I need to use the readline module to get input from the user

// imports
const readline = require('readline');

// global variables
// this is the player object
var player = {
    name: "",
    location: [0,0],
    health: 100,
    items: []
};

// database
// two dimensional map array where the first index is east-west and the second index is north-south
var map = [
[
    {
        description: "You are in a dark room. There is a door to the north.",
        items: ["key"]
    }, // 0,0
    {
        description: "Garden: You are north of the dark room. There is a door to the south and a door to the east.",
        items: []
    }, // 0,1
    {
        description: "You are in a kitchen. There is a door to the west.",
        items: []
    }, // 0,2
],
[
    {}, // 1,0
    {}, // 1,1
    {}, // 1,2
],
[
    {}, // 2,0
    {}, // 2,1
    {}, // 2,2
]];

// set up the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// event loop that runs the game
// this is the main game loop
function gameLoop() {
    // output the description of the current location
    describeLocation();
    // ask the user for input
    rl.prompt();
}


// output a text description of the current location
function describeLocation() {
    // get the current location
    var location = map[player.location];
    // print the description
    console.log('location[0]', location[0]);
}


// set up the readline event handler
rl.on('line', (line) => {
    // process the line
    console.log(`You just typed ${line}`);
    // parse the line for an initial verb and noun
    var words = line.split(" ");
    var verb = words[0];
    var noun = words[1];

    // here is a datastructure for the verbs and nouns
    const actions = {
        "go": function (noun) {
            console.log(`You want to go ${noun}`);
            // change the player location based on which direction they want to go
            if (noun === "north") {
                // check for whether we are near the edge of the map
                if (player.location[1] === 2) {
                    console.log("You can't go that way");
                    return;
                }
                player.location[1] += 1;
            } else if (noun === "south") {
                // check for whether we are near the edge of the map
                if (player.location[1] === 0) {
                    console.log("You can't go that way");
                    return;
                }
                player.location[1] -= 1;
            } else if (noun === "east") {
                player.location[0] += 1;
            } else if (noun === "west") { 
                player.location[0] -= 1;
            } else {
                console.log(`I don't know how to go ${noun}`);
            }

        },
        "get": function (noun) {
            console.log(`You want to get ${noun}`);
        },
        "drop": function (noun) {
            console.log(`You want to drop ${noun}`);
        },
        "use": function (noun) {
            console.log(`You want to use ${noun}`);
        },
        "look": function (noun) {
            console.log(`You want to look ${noun}`);
        },
        "inventory": function (noun) {
            console.log(`You want to see your inventory`);
        }
    };

    // check to see if the verb is in the actions object
    if (actions.hasOwnProperty(verb)) {
        // if it is, then call the function
        actions[verb](noun);
    } else {
        // if it is not, then print an error message
        console.log(`I don't know how to ${verb}`);
    }
    
    // close the readline interface
    rl.close();
});


