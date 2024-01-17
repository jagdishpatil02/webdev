function count() {
    var counter = 0;
    return function incrementCounter() {
        counter++;
        console.log(counter);
    }
}

var increment = count();

increment();