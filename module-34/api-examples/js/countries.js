function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => displayCountry(data))
}
loadCountry()

const displayCountry = (countrys) =>{
    const countryContainer = document.getElementById('countrys')
     countrys.forEach(country => {
        //  console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        
        countryContainer.appendChild(div);
    });
} 

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/{name}${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))

}

const displayCountryDetails = country => {
    console.log(country); 
    const countryDiv = document.getElementById('contry-details');
    countryDiv.innerHTML= `
    <h3>${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}
