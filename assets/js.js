const lista = document.getElementById('lista');
// console.log(lista)

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
            // console.log(masini[i].nume +' are capacitatea de: '+masini[i].capacitate );
            lista.innerHTML += `
            <li class="list-group-item">
                ` + masini[i].nume +` are capacitatea de: `+ masini[i].capacitate +`
            </li>  
            `
        }
    })
    const searchBar = document.getElementById('searchBar')
    searchBar.addEventListener('keyup', function(event){
        // console.log(event.target.value)
        let term = event.target.value.toLowerCase();
        let items = document.getElementsByTagName('li')
        // console.log(items)
        Array.from(items).forEach(function(item) {
            console.log(item);
            let nameOfItem = item.firstElementChild.textContent;
        if(nameOfItem.toLowerCase().indexOf(term) = -1){
            item.style.display='none';
        } else{
            item.style.display='block';
        }
        })
        
    })
