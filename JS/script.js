let howMuch = document.querySelector(".js-howMuch");
let total = document.querySelector(".js-total");
let currencyForm = document.querySelector(".js-currencyForm");
let currencyTo = document.querySelector(".js-currencyTo");
let form = document.querySelector(".js-form");

let PLN = 1.00;
let USD = 4.77;
let EUR = 4.72;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let currencyFormChoose;
    let currencyToChoose;
    let howMuchElement = +howMuch.value;
    let result;

    switch (currencyForm.value) {
        case "pln":
            currencyFormChoose = PLN;
            break;
        case "usd":
            currencyFormChoose = USD;
            break;
        case "eur":
            currencyFormChoose = EUR;
            break;
    };

    switch (currencyTo.value) {
        case "pln":
            currencyToChoose = PLN;
            break;
        case "usd":
            currencyToChoose = USD;
            break;
        case "eur":
            currencyToChoose = EUR;
            break;
    };
    
    result = (howMuchElement * currencyFormChoose) / currencyToChoose;
    total.value = result.toFixed(2);
    howMuch.focus();
});