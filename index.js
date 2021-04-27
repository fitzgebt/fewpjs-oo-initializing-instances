// Write your code here
class Breakfast {
    constructor(meal, drink) {
        this.food = meal
        this.drink = drink
    }
}

class Lunch {
    constructor(app, meal, drink) {
        this.salad = app;
        this.soup = meal
        this.drink = drink
    }

}

class Dinner {
    constructor(salad, soup, food, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = food
        this._dessert = dessert
    }

}