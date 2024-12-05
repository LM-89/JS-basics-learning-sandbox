// Kintamojo sukurimas:
// 1. Iniciavimo zodelis: (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybes zenklas
// 4. Kintamojo verte (value)

console.log('labas rytas')


var vardas = 'Jhon'  // string (tekstas) duomenu tipas
let pavarde = 'Doe'  // string (tekstas) duomenu tipas
let miestas = `Vilnius`     // string (tekstas) duomenu tipas
let amzius = 30   //number (skaicius) duomenu tipas
let yraStudentas = true  //boolean (true/false) duomenu tipas camel case kintamojo rasymo tipas
const asmensKodas = 38903170932   //number (skaicius) duomenu tipas  nekintamas dydis, kurio pakeisti negalima



console.log(vardas)
console.log(typeof vardas)

console.log(pavarde)
console.log(typeof pavarde)

console.log(vardas, pavarde)

console.log(vardas, typeof vardas)
console.log(pavarde, typeof pavarde)

console.log(miestas)

console.log(amzius, typeof amzius)

console.log(yraStudentas, typeof yraStudentas)

console.log(asmensKodas, typeof asmensKodas)

console.log(amzius)     //kintamojo keitimas  buvo 30
amzius = 31             //kintamojo keitimas  keiciame i 31
console.log(amzius)     //kintamojo keitimas  gauname nauja reiksme 31


console.log('Hello, ' + vardas + ' ' + pavarde + '.')   //keliu kintamuju apjungimas i viena eilute (galimybe prideti skyrybos zenklus ir zodzius)
console.log("Hello, " + vardas + " " + pavarde + ".")   //keliu kintamuju apjungimas i viena eilute (galimybe prideti skyrybos zenklus ir zodzius)

console.log(`Hello, ${vardas} ${pavarde}.`)     //kai norime prideti kintamuosius i teksta


//Vardas: vardas pavarde (31 metu), adresas: miestas, asmens kodas: 38903170932.
console.log('Vardas: ' + vardas + ' ' + pavarde + ' (' + amzius + ' metu), adresas: ' + miestas + ', asmens kodas: ' + asmensKodas + '.')
console.log("Vardas: " + vardas + " " + pavarde + " (" + amzius + " metu), adresas: " + miestas + ", asmens kodas: " + asmensKodas + ".")

console.log(`Vardas: ${vardas} ${pavarde} (${amzius} metu), adresas: ${miestas}, asmens kodas: ${asmensKodas}.`)   //greiciausias budas iterpti kintamuosius i teksto eilute naudojant backtick kabutes