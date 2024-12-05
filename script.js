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


//Jhon `said`: "that's my car".
console.log("Jhon said: that's my car.")
console.log(`Jhon said: that's my car.`)
//console.log(Jhon `said`: "that's my car.")  pvz kai netinka viengubos '' kabutes, taip pat gali buti su dvigubomis jei tekste yra "". Gali buti ir su backtickais.

console.log(`Jhon \`said\`: "that's my car".`)   // backslash \ naudojamas kad ignoruoti pasikartojanti ir konfliktuojanti simboli ` ' "    
console.log(`Jhon\\ \`said\`: "that's my car".`)  //(kad atvaizduoti \, reikia deti dar viena \ (\\))
console.log(`Jhon\\ \\\`said\\\`: "that's my car".`)   //kad atvaizduoti \ ir ignoruotu backticka

// let d = new Date();
// alert("Today's date is " + d);

let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

// alert("Hello")  issokantis pranesimas/alertas svetaines lange (jei iskart neatvaizduoja, rr page)

// alert('Hello'); alert('World');


/*Rašyba svarbu
Kintamieji, pavadinti apple ir APPLE, yra du skirtingi kintamieji.*/



/* CAO kintamuju uzduotys:
1. Pratimas:*/
let name = 'Jonas';
let admin;
admin = name;
alert(admin);

/*    Sukurkite kintamąjį su mūsų planetos pavadinimu. Kaip pavadintumėte tokį kintamąjį?

Sukurkite kintamąjį, kad išsaugotumėte dabartinio svetainės lankytojo vardą. Kaip pavadintumėte tą kintamąjį?*/
let ourPlanetName = 'Earth';
console.log(ourPlanetName);

let currentUserName = 'Jonas';


/*const BIRTHDAY = '18.04.1982'; // padaryti birthday didziosiomis? TAIP NES TAI NIEKADA NEKINTANTI REIKSME!!

const AGE = someCode(BIRTHDAY); // padaryti age didziosiomis?   ne, nes tai kintanti reiksme(taciau const tipo nekintanti apskaiciavimo metu)!!*/

/*const BIRTHDAY = '17.03.1989';
const age = someCode(BIRTHDAY);*/
// "someCode" yra galimas js kodas, kuris apskaiciuoja amziu pagal gimimo data!