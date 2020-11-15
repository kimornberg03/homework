
let animal = {species: "Bird", name: "Amazonas parrot", age: 4}


const interval = setInterval(incrementByOne,5000, animal);

setTimeout (incrementByOneVer2, 500, animal)


console.log(animal)

function incrementByOne(x) 
{
    x.age = x.age +1
    console.log(x)
    if (x.age > 8) {
        stopInterval()
    }
}

function incrementByOneVer2(x)
{
    x["age"] = x["age"] + 1
    console.log(x)
}


function stopInterval() {
    clearInterval(interval)
}