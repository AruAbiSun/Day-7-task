//Print the following details name, capital, flag, using forEach function
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = function () {
    let countryData = JSON.parse(this.response);
    countryData.forEach((a) => {
        console.log(a.name, a.capital, a.flag);
    });

}