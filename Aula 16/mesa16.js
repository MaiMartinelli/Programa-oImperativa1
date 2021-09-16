/* Grupo: Elissandro Maciel
Gustavo Brock
Herbert Santos
Maiara Martinelli
Marcos Araújo*/

let fizzbuzz = (a, b) => {
    for (let i = 1; i <= 100; i++) {
        if (a % i == 0 && b % i == 0) {
            console.log("O número " + i + " é fizzbuzz");
        } else if (b % i == 0) {
            console.log("O número " + i + " é buzz");
        } else if (a % i == 0) {
            console.log( "O número " + i + " é fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(25, 88);
