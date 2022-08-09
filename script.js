//Get all the countries from Asia continent /region using Filter function

let restCountry = new XMLHttpRequest();

restCountry.open("GET", "https://restcountries.com/v2/all");

restCountry.onload = function () {

    let countryRest = JSON.parse(restCountry.response);
    let asianCoun = countryRest.filter((country) => {
        if (country.region == "Asia") {
            console.log(`Asian Continent Country Name : ${country.name}`);
        }
    });
    restCountry.onerror = function () {
        console.log("Something Went Wrong");

    }
}

restCountry.send();




//Get all the countries with a population of less than 2 lakhs using Filter function


let restCountry1 = new XMLHttpRequest();

restCountry1.open("GET", "https://restcountries.com/v2/all");

restCountry1.onload = function () {

    let countryRest1 = JSON.parse(restCountry1.response);
    let asianCoun1 = countryRest1.filter((country) => {
        if (country.population < 200000) {
            console.log(`Population lessthan 2Lakhs Country Name : ${country.name}`);
        }
    });

    restCountry1.onerror = function () {
        console.log("Something Went Wrong");

    }
}

restCountry1.send();

//Print the following details name, capital, flag using forEach function


let restCountry2 = new XMLHttpRequest();

restCountry2.open("GET", "https://restcountries.com/v2/all");

restCountry2.onload = function () {

    let countryRest2 = JSON.parse(restCountry2.response);
    let asianCoun2 = countryRest2.forEach((country) => {
        console.log(`Country Name : ${country.name},and Country Capital : ${country.capital}, Flag Details : ${country.flag}`);

    });
    restCountry2.onerror = function () {
        console.log("Something Went Wrong");

    }
}

restCountry2.send();


//Print the total population of countries using reduce function

let restCountry3 = new XMLHttpRequest();

restCountry3.open("GET", "https://restcountries.com/v2/all");

restCountry3.onload = function () {
    console.log(`Total Population of All countries :`);
    let countryRest3 = JSON.parse(restCountry3.response);
    let asianCoun3 = countryRest3.reduce((tot, country) => {
        return tot += parseInt(country.population);

    }, 0);
    console.log(asianCoun3);
    restCountry3.onerror = function () {
        console.log("Something Went Wrong");

    }
}
restCountry3.send();


//Print the country which uses US Dollars as currency.



let restCountry4 = new XMLHttpRequest();

restCountry4.open("GET", "https://restcountries.com/v2/all");

restCountry4.onload = function () {

    let countryRest4 = JSON.parse(restCountry4.response);
    let asianCoun4 = countryRest4.filter((country) => {
        for (let key in country.currencies) {
            if (country.currencies[key].code === "USD") {
                 console.log(`US Dollar used Country List : ${country.name}`);
            }
        }
    })
    restCountry4.onerror = function () {
        console.log("Something Went Wrong");

    }
}
restCountry4.send();