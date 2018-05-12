const lista = document.getElementById('lista');
console.log(lista)

fetch('./db/masini.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (masini) {
        // console.log(masini)
        //parcurgem array-ul
        //sa luam fiecare obiect individula si sa ii postam vaoarea cheii in DOM
        for (let i = 0; i < 6; i++) {
            // lista.innerHTML = '<li class="list-group-item">NumeMasina <strong> Capacitate</strong></li>'
            console.log(masini[i].nume +' are capacitatea de: '+masini[i].capacitate );
            lista.innerHTML += `
            <li class="list-group-item">
                ` + masini[i].nume +` are capacitatea de: `+ masini[i].capacitate +`
            </li>  
            `
        }
    })