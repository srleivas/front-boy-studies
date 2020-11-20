const mainObject = {
    _value: 1,
    valueFunction: function(){return this._value++;},
    get value(){return this._value++},
    set value(value){
        if (value > this._value)
        {
            this._value = value;
        }
    }
}

console.log(mainObject.value, mainObject.value);

console.log(mainObject.valueFunction(), mainObject.valueFunction());