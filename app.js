const button = document.getElementById("btn");

    // Create Dino Constructor
    class Dinosaur {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
}

    // Create Dino Objects
    // populate an array with dino data from the json file
    let dinoData = [];
    fetch('dino.json')
    .then(res => res.json())
    .then(data => {
        dinoData = data.Dinos.map(dino =>
            new Dinosaur(dino))
    })
    console.log(dinoData);
    

    // Create Human Class

    class Human {
        constructor(height, weight, diet) {
            this.height = height;
            this.weight = weight;
            this.diet = diet;
        }
    }

    // Use IIFE to get human data from form and create a human object
    const humanData = (
        function() {
            let name = getInputValue("name");
            let heightFeet = ParseFloat((getInputValue("feet")));
            let heightInches = ParseFloat((getInputValue("inches")));
            let height = heightFeet + heightInches;
            let diet = getInputValue("diet");

            return function () {
                currentHuman = new Human(this.name, this.height, this.diet);
                console.log(name);
            }
        }
    )();

        // when user clicks on the button, a human object with all the 
        // info in the form should be created.
        button.addEventListener("click", () => {
            console.log("clicked");
            humanData();
            console.log("clicked");
        })

    console.log(currentHuman);
    


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

