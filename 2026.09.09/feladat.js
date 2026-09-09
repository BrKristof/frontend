// Feladat:
/*
    Adott egy 5 elemű tömb, amely egész számokat tartalmaz: [36, -2, 112, 101, 22]
    1.) Adjon hozzá a tömbhöz 10 új, véletlen egész számot a [-100; +100] tartományról
     - Math.random()
     - Math.floor()
    2.) Szűrjük ki egy új tömbbe a pozitív és páros számokat
    3.) Döntsük el (igen/nem), hogy az új tömbben van-e 100-nál nagyobb szám
    4.) Határozzuk meg az új tömb legnagyobb értékű elemét
*/
let tomb = [36,-2,112,101,22]

function add(x,arr){
    let i = 0
    while ( i<= x){
        let rando = Math.floor(Math.random()*200-100)
        arr.push(rando)
        i++
    }
}
add(10,tomb)
console.log(tomb)

//2.
let nt = tomb.filter(s => s > 0 && s % 2 == 0)
console.log(nt)

//3.
console.log(nt.findIndex(t => t > 100) >= 0 ? 'van' : "nincs")



//4.
let high = tomb[0]
for(let e = 0; e < tomb.length; e++){
    if(tomb[e] > high){
        high = tomb[e]
    }
}
console.log(high)

Math.max(...tomb)