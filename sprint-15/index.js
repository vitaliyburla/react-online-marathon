//Task 1
const func = require('./Checker.js');

function overloadedFunc(
    a = [1, 2, 3],
    b = 2,
    c = (a, b) => (Array.isArray(a) ? a.map((x) => x * b) : a * b)
) {
    return c(a, b);
}

//Task 2
const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
    #maxSpeed;
    constructor(speed, warning) {
        this.#maxSpeed = 200;
        privateSpeed.set(this, speed);
        privateWarning.set(this, warning);
    }

    showCurrentSpeed() {
        console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
    }

    accelerate(value) {
        privateSpeed.set(this, privateSpeed.get(this) + value);
        this.showCurrentSpeed();
        if (privateSpeed.get(this) > this.#maxSpeed) {
            privateWarning.get(this)();
            privateSpeed.set(this, this.#maxSpeed);
            this.showCurrentSpeed();
        }
        privateSpeed.set(this, privateSpeed.get(this));
    }
}

//Task 3
const upperCase = (data) => data.toUpperCase();
const tripleExclaim = (data) => `${data}!!!`;
const split = (separator) => (data) => data.split(separator);
const join = (separator) => (data) => data.join(separator);
const copy = (data) => `${data} ${data}`;

const createComposition =
    (...args) =>
    (value) =>
        args.reduce((prev, curr) => curr(prev), value);

const result = createComposition(
    upperCase,
    tripleExclaim,
    split(/[\s_]/),
    join(' '),
    copy
);

//Task 4
class Plane {
    #model;
    #fuelSupply;
    #fuelConsumption;

    constructor(model, fuelSupply, fuelConsumption) {
        this.#model = model;
        this.#fuelSupply = fuelSupply;
        this.#fuelConsumption = fuelConsumption;
    }

    get getModel() {
        return this.#model;
    }

    get getFuelSupply() {
        return this.#fuelSupply;
    }

    get getFuelConsumption() {
        return this.#fuelConsumption;
    }

    calcFlightRange() {
        return (this.getFuelSupply / this.getFuelConsumption) * 100;
    }

    static sortFlightRange(planesArray) {
        const sortedArray = planesArray.sort(
            (a, b) => a.calcFlightRange() - b.calcFlightRange()
        );
        sortedArray.forEach((x) =>
            console.log(`${x.getModel}: ${x.calcFlightRange()}`)
        );
    }
}

class TransportPlane extends Plane {
    #cargo;
    #addTank;
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.#cargo = cargo;
        this.#addTank = addTank;
    }

    get getAddTank() {
        return this.#addTank;
    }

    calcFlightRange() {
        return (
            ((this.getFuelSupply + this.getAddTank) / this.getFuelConsumption) *
            100
        );
    }
}

class PassengerPlane extends Plane {
    #passengers;
    #refueling;
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this.#passengers = passengers;
        this.#refueling = refueling;
    }

    get getRefueling() {
        return this.#refueling;
    }

    calcFlightRange() {
        return (
            ((this.getFuelSupply + this.getRefueling) /
                this.getFuelConsumption) *
            100
        );
    }
}

class WarPlane extends Plane {
    #missiles;
    #aerodynamicsKoef;
    constructor(
        model,
        fuelSupply,
        fuelConsumption,
        missiles,
        aerodynamicsKoef
    ) {
        super(model, fuelSupply, fuelConsumption);
        this.#missiles = missiles;
        this.#aerodynamicsKoef = aerodynamicsKoef;
    }

    get getAerodynamicsKoef() {
        return this.#aerodynamicsKoef;
    }

    calcFlightRange() {
        return (
            ((this.getFuelSupply * this.getAerodynamicsKoef) /
                this.getFuelConsumption) *
            100
        );
    }
}

//Task 5
const pizzaMenu = {
    SIZE_S: { param: 'SIZE_S', price: 60, calorie: 300 },
    SIZE_M: { param: 'SIZE_M', price: 90, calorie: 450 },
    SIZE_L: { param: 'SIZE_L', price: 110, calorie: 600 },
    KIND_MEAT: { param: 'KIND_MEAT', price: 55, calorie: 230 },
    KIND_FISH: { param: 'KIND_FISH', price: 70, calorie: 150 },
    KIND_CHEESE: { param: 'KIND_CHEESE', price: 50, calorie: 200 },
    KIND_VEGETARIAN: { param: 'KIND_VEGETARIAN', price: 35, calorie: 50 },
    INGREDIENT_TOMATOES: {
        param: 'INGREDIENT_TOMATOES',
        price: 15,
        calorie: 5,
    },
    INGREDIENT_PEPPER: { param: 'INGREDIENT_PEPPER', price: 18, calorie: 5 },
    INGREDIENT_BACON: { param: 'INGREDIENT_BACON', price: 25, calorie: 40 },
    INGREDIENT_OLIVES: { param: 'INGREDIENT_OLIVES', price: 20, calorie: 0 },
};

class PizzaMaker {
    #size;
    #kind;
    #ingredients;

    constructor(size, kind) {
        this.#size = size;
        this.#kind = kind;
        this.#ingredients = [];
    }

    getSize() {
        return this.#size.param;
    }

    getKind() {
        return this.#kind.param;
    }

    getIngredients() {
        return this.#ingredients;
    }

    addIngredient(ingredient) {
        if (this.#ingredients.indexOf(ingredient) === -1) {
            this.#ingredients.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        } else {
            console.log('Such an ingredient already exists!');
        }
    }

    deleteIngredient(ingredient) {
        this.#ingredients = this.#ingredients.filter((i) => i !== ingredient);
        console.log(`${ingredient.param} has been deleted`);
    }

    calculatePrice() {
        return (
            this.#size.price +
            this.#kind.price +
            this.#ingredients.reduce((prev, curr) => prev + curr.price, 0)
        );
    }

    calculateCalories() {
        return (
            this.#size.calorie +
            this.#kind.calorie +
            this.#ingredients.reduce((prev, curr) => prev + curr.calorie, 0)
        );
    }
}
