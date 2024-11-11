function startCalculator() {
    alert('Välkommen till min miniräknare!');

    let num1 = prompt("Ange ett första tal:");

    let num2 = prompt("Ange ett andra tal:");

    let operation = prompt("Ange vilket räknesätt du vill använda (+, -, *, /):");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result;

    if(operation === "+") {
        result = num1 + num2;
        alert("Resultatet i addition är: " + result + ", Om du vill göra en ny uträkning tryck bara på Starta Miniräknare igen");
    } else if (operation === "-") {
        result = num1 - num2;
        alert("Resultatet i subtraktion är: " + result + ", Om du vill göra en ny uträkning tryck bara på Starta Miniräknare igen" );
    } else if (operation === "*") {
        result = num1 * num2;
        alert("Resultatet i multiplikation är: " + result + ", Om du vill göra en ny uträkning tryck bara på Starta Miniräknare igen");
    } else if (operation === "/") {
        if (num2 !== 0) { 
            result = num1 / num2;
            alert("Resultatet av division är: " + result + ", Om du vill göra en ny uträkning tryck bara på Starta Miniräknare igen");
        } else {
            alert("Fel: Division med noll är inte tillåtet.");
        }
    } else {
        alert("Fel: Ogiltigt räknesätt. Vänligen använd +, -, * eller /.");
    }
}

startCalculator();
