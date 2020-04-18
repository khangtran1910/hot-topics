let container = document.querySelector('.container');
let url = 'partials/partial-1.html';

function handlePackage(response) {
    return response.text();
}

function handleData(data) {
    container.innerHTML= data;
}

fetch(url).then(handlePackage) .then(handleData);