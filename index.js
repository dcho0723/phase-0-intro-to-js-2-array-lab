// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push(name);
}

const destructivelyPrependCat = (aCat) => {
    cats.unshift(aCat);
}

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}

const appendCat = (aCat) => {
    const newCats = [...cats, aCat];
    return newCats;
}

const prependCat = (aCat) => {
    const newCats = [aCat, ...cats];
    return newCats;
}

const removeLastCat = () => {
    const newCats = cats.slice(0, -1);
    return newCats;
}

const removeFirstCat = () => {
    const newCats = cats.slice(1);
    return newCats;
}