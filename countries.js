/**
 * RESTCountries
 */

/**
 * Création du tableau
 */
const createTable = (countries) =>
{
     // Création d'une balise (<body)
     const body = document.querySelector('body');
     
     // Creation d'un tableau HTML
     const table = document.createElement('table');   
     table.classList.add('table');

     countries.forEach(country =>
     {         
         // Création une ligne de tableau (<tr>)
         const ligne = document.createElement('tr');

         // Création une colonne de tableau (<td>)
         const drapeau = document.createElement('td');

         // Créer une image (<img src="" alt="">)
         const img = document.createElement('img');
         img.classList.add('w-50');
         img.src = country.flags.svg;
         img.alt = "Drapeau du pays";

         // Ajoute l'image dans la colonne "drapeau"            
         drapeau.append(img);

         // Création une colonne de tableau (<td>)
         const capital = document.createElement('td');
         capital.innerText = country.capital;

         // Création une colonne de tableau (<td>)
         const population = document.createElement('td');
         population.innerText = country.population;

         // Ajoute les cplonnes à la ligne
         ligne.appendChild(drapeau);
         ligne.appendChild(capital);
         ligne.appendChild(population);

         // Ajoute la ligne au tableau
         table.appendChild(ligne);
    });
    // Ajoute le tableau au body
    body.appendChild(table);
};

/**
 * Affiche tous les pays
 */
let allCountries = () =>
{
    // Démarrage un texte de chargement
    const load = document.querySelector('#load');
    load.classList.remove('d-none');

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries =>
            {
                // Efface le texte de chargement
                load.classList.add('d-none');
                
                console.log(countries);
                
                // Appelle la fonction permettant de créer le tableau HTML
                createTable(countries);
            })
    .catch(error => alert(error));
}

// Fonction affiche tous les pays
allCountries();

// Faire la recherche par le capital
const input = document.querySelector('#search');

// Ecouteur d'évènement sur le champs écoutant les changements
input.addEventListener('input', () =>
{
    // console.log(input.value);
    const search = input.value;

    // API recherchant via capitale
    fetch(`https://restcountries.com/v3.1/capital/${search}`)
        .then(response => response.json())
        .then(capitals =>
            {          
                // Supprime le tableau HTML existant
                const table = document.querySelector('table');

                // Si la table HTML existe, on la suprime
                if (table)
                    {
                        table.remove();
                    }

                // console.log(capitals);
                if (capitals.message === "Page Not Found")
                    {
                        // Le champs est vide
                        allCountries();
                    }
                else if (capitals.status === 404)
                    {
                        // Aucun pays trouvé
                    }
                else 
                    {
                        // Pays trouvé
                        // Récréer un nouveau tableau HTML avec les nouveaux résultats
                        createTable(capitals);
                    }                      
            })   
    .catch(error => alert(error)); 
});