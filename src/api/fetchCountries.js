const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name) {
    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => response.json())
    .catch(error => console.log(error));
}
