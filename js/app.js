$(document).ready(function () {

    // GET CoinList & put in a variable
    let coinList = ["XRP", "BTC", "LTC", "BCH", "ETH"];
    let fromCurrency, toCurrency;
    /*
    $.get(
        "https://min-api.cryptocompare.com/data/all/coinlist",
        JSON,
        function(data){
            coinList = data;
            console.log("GET CoinList complete.");
            //console.log(coinList);
            console.log(coinList.Data);
        }
    );
    */

    $('#from').on('change', function () {
        fromCurrency = this.value;
        console.log("fromCurrency=" + fromCurrency);

        if (fromCurrency && toCurrency) {
            getPrice();
        }
    });

    $('#to').on('change', function () {
        toCurrency = this.value;
        console.log("toCurrency=" + toCurrency);

        if (fromCurrency && toCurrency) {
            getPrice();
        }
    });

    function getPrice() {
        console.log("Got both currencies. Ready to call Price API.")
        let url = "https://min-api.cryptocompare.com/data/price?fsym=" + fromCurrency + "&tsyms=" + toCurrency;
        console.log(url);
        $.get(
            url,
            JSON,
            function (data) {
                console.log(data);
                console.log(data[toCurrency]);
                updateInputAmountRight(data[toCurrency]);
            }
        )
    }

    function updateInputAmountRight(valueToCurrency) {
        let amountLeft = $('input#amount_left').val();
        console.log("amountLeft=" + amountLeft);
        let amountRight = amountLeft * valueToCurrency;
        console.log("amountRight=" + amountRight);
        $('input#amount_right').val(amountRight);
    }
});