//Print the country that uses US dollars as currency
const URL = "https://restcountries.com/v3.1/all";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload = function () {
  let countryData = JSON.parse(this.response);
  for (i = 0; i < countryData.length; i++) {
    const currencies = countryData[i].currencies;
  if (currencies && currencies.hasOwnProperty("USD")) {
      console.log(countryData[i].name.common );
    }
  }
};