class SmartCalculator {
    constructor(initialValue) {
        this._store = initialValue;
        this._tasks = [];
        this._operations = {
            add: {
                priority: 2,
                doOperation: (a, b) => {
                    return a + b;
                },

            },
            subtract: {
                priority: 2,
                doOperation: (a, b) => {
                    return a - b;
                },

            },
            multiply: {
                priority: 1,
                doOperation: (a, b) => {
                    return a * b;
                },

            },
            devide: {
                priority: 1,
                doOperation: (a, b) => {
                    return a / b;
                },

            },
            pow: {
                priority: 0,
                doOperation: (a, b) => {
                    return Math.pow(a, b);
                },

            },
        }
    }

    valueOf() {
        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < this._tasks.length;) {
                let currOp = this._operations[this._tasks[k].task];
                if (currOp.priority == i) {
                    if (this._tasks[k - 1]) {
                        this._tasks[k - 1].number = currOp.doOperation(this._tasks[k - 1].number, this._tasks[k].number);
                    } else {
                        this._store = currOp.doOperation(this._store, this._tasks[k].number);
                    }
                    this._tasks.splice(k, 1);

                } else {
                    k++
                }
            }
        }
        return this._store;
    }

    add(number) {
        this._tasks.push({ task: "add", number: number });
        return this;
    }

    subtract(number) {
        this._tasks.push({ task: "subtract", number: number });
        return this;
    }

    multiply(number) {
        this._tasks.push({ task: "multiply", number: number });
        return this;
    }

    devide(number) {
        this._tasks.push({ task: "devide", number: number });
        return this;
    }

    pow(number) {
        this._tasks.push({ task: "pow", number: number });
        return this;
    }


}

module.exports = SmartCalculator;