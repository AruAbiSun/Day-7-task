//Print the total population of countries using reduce function
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = function () {
    let countryData = JSON.parse(this.response);
    countryData.reduce((a, b)=>{
        console.log(a + b.population)
    })
}