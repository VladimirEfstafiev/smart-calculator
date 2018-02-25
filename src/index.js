class SmartCalculator {
    constructor(initialValue) {
        this._task =""+initialValue;
    }

    valueOf() {
        return eval(this._task);
    }

    add(number) {
        this._task+="+"+number;
        return this;
    }

    subtract(number) {
        this._task+="-"+number;
        return this;
    }

    multiply(number) {
        this._task+="*"+number;
        return this;
    }

    devide(number) {
        this._task+="/"+number;
        return this;
    }

    pow(number) {
        this._task+="**"+number;
        return this;
    }
}

module.exports = SmartCalculator;