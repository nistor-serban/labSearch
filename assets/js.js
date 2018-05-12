fetch('./db/masini.json')

    .then(function (response) {
        return response.json();

    })
    .then(function (masini) {
        console.log(masini)
    })