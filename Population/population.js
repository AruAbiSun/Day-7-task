//Get all the countries with a population of less than 2 lakhs using Filter function
const URL = "https://restcountries.com/v3.1/all";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload = function(){
    let countryData = JSON.parse(this.response);
    const pop = countryData.filter((a) => {
        if (a.population < 200000) {
            return a.population;
        }
    }
    );
    console.log(pop)
}