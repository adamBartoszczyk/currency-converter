{
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

    const calculateResult = () => {
        const currencyFormElement = document.querySelector(".js-currencyForm");
        const currencyToElement = document.querySelector(".js-currencyTo");
        const amountElement = document.querySelector(".js-amount");
        const totalElement = document.querySelector(".js-total");
        const amount = +amountElement.value;
        const currencyForm = currencyFormElement.value;
        const currencyTo = currencyToElement.value;
        const currencyFormChoose = chooseCurrency(currencyForm);
        const currencyToChoose = chooseCurrency(currencyTo);
       
        const result = (amount * currencyFormChoose) / currencyToChoose;
        totalElement.value = result.toFixed(2);
        amountElement.focus();
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResult();
        });
    }
    
    init();
}