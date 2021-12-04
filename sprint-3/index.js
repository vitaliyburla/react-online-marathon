//Task 1
function getMin(arr) {
    return Math.min.apply(this, arr);
}

//Task 2
function mapCreator(keys, values) {
    const map = new Map();
    for (let i = 0; i < keys.length; i++) {
        if (typeof values[i] == 'string') {
            map.set(keys[i], values[i]);
        }
    }
    return map;
}

//Task 3
const Checker = require('./Checker.js');

class Movie {
    constructor(name, category, startShow) {
        this.name = name;
        this.category = category;
        this.startShow = startShow;
    }
    watchMovie() {
        return `I watch the movie ${this.name}!`;
    }
}

const movie1 = new Movie('Titanic', 'drama', 1997);
const movie2 = new Movie('Troya', 'historical', 2004);

//Task 4
const Checker = require('./Checker.js');

class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this._fullName;
    }
    nameIncludes(data) {
        return this.showFullName().includes(data) ? true : false;
    }
    static studentBuilder() {
        return new this('Ihor Kohut', 'qc');
    }
    set direction(direction) {
        this._direction = direction;
    }
    get direction() {
        return this._direction;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

//Task 5
const product = function () {
    return [].reduce.call(
        arguments,
        function (res, elem) {
            return res * elem;
        },
        this.product
    );
};

const contextObj = {
    product: 10,
};

const getProduct = product.bind(contextObj, 2, 3);

//Task 6
class Distributor {
    constructor() {
        this.products = {};
    }

    addProduct(id, name) {
        this.products[id] = name;
    }

    removeProduct(id) {
        delete this.products[id];
    }
}

const localDistributor = new Distributor();

class MyProduct {
    constructor(name) {
        this.id = Symbol(name);
        this.name = name;
    }

    distribute(distributor) {
        distributor.addProduct(this.id, this.name);
    }
}
