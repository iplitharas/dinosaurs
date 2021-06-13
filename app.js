class Dino {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    get dino_fact() {
        return this.fact;
    }

    get dino_where() {
        return this.where;
    }

    get dino_when() {
        return this.when;
    }
}


class Human {
    constructor(name, feet, inches, weight, diet) {
        this.name = name;
        this.feet = feet;
        this.inches = inches;
        this.weight = weight;
        this.diet = diet;
    }

    debug = () => {
        console.log(this.name, this.feet, this.inches, this.weight, this.diet)
    }
}

function read_data() {

    function inner() {
        const form_name = document.getElementById('name').value;
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;

        return {form_name, feet, inches, weight, diet};

    }

    return inner()
}


const get_dinosaurs = () => {
    /**
     * Reads the json file and return dinosaurs.
     */
    let dinosaurs = []
    fetch('./dino.json')
        .then(response => response.json())
        .then(dino_data => {
            dino_data['Dinos'].map(item => {
                dinosaurs.push(new Dino(item.species, item.weight, item.height, item.diet,
                    item.where, item.when, item.fact))
            })

        })
    return dinosaurs
}

const get_human = () => {
    /**
     * Returns a new Human from the form data.
     */
    const form_data = read_data()
    return new Human(form_data.form_name, form_data.feet, form_data.inches, form_data.weight, form_data.diet)
}

const lbs_to_kg = lbs => (lbs /  2.205).toFixed(2);

const inches_to_meter = (inches) => ( inches / 39.37).toFixed(2);


// Create Dino Objects
const dinosaurs = get_dinosaurs()

// Create Human Object
const human = get_human()
human.debug()

// Use IIFE to get human data from form


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
