//Get all the countries from Asia continent /region using Filter function
const URL = "https://restcountries.com/v3.1/all";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload = function () {
  let countryData = JSON.parse(this.response);
  const asia = countryData.filter((a) => {
    if (a.region === "Asia") {
      return a.region;
    }
  })
  console.log(asia);
}

