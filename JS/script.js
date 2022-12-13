{

    const howMuchElement = document.querySelector(".js-howMuch");
    const totalElement = document.querySelector(".js-total");
    const currencyFormElement = document.querySelector(".js-currencyForm");
    const currencyToElement = document.querySelector(".js-currencyTo");
    const formElement = document.querySelector(".js-form");





    const chooseCurrency = (currency) => {
        const PLN = 1.00;
        const USD = 4.77;
        const EUR = 4.72;

        switch (currency) {
            case "pln":
                return PLN;
            case "usd":
                return USD;
            case "eur":
                return EUR;
        };
    };

    const changeCurrencyToNumber = () => {

        const howMuch = +howMuchElement.value;
        const currencyForm = currencyFormElement.value;
        const currencyTo = currencyToElement.value;
        const currencyFormChoose = chooseCurrency(currencyForm);
        const currencyToChoose = chooseCurrency(currencyTo);

        const result = (howMuch * currencyFormChoose) / currencyToChoose;
        totalElement.value = result.toFixed(2);
    }




    const init = () => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            changeCurrencyToNumber();
        });
    }
    init()
}