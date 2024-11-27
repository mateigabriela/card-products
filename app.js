const container = document.getElementById("container");

function adaugaProdus(produs) {
    container.innerHTML += 
    `<div class="product">
    <img src=${produs.poza} width=${produs.latime}>
    <h2 class="name">${produs.nume}</h2>
    <p class="text">${produs.descriere}</p>
    <h2>${produs.pret}</h2>
    <div>  ${'<i class="fa-solid fa-star fa-xl" style="color: #ffa53d;"></i>'.repeat(produs.steleGalbene)}
    ${'<i class="fa-solid fa-star fa-xl" style="color: #000000;"></i>'.repeat(produs.steleNegre)}
    </div>
    <div class="down" style="background-color: ${produs.culoare} ;">
    <p>Buy Now</p>
    </div>
    </div>`
}


function afiseazaToateProdusele(produse) {
    for(let i=0; i<produse.length; i++){
        adaugaProdus(produse[i]);
    }
}

produse = [
    {
        poza: 'https://th.bing.com/th/id/R.70a06b971f3d32d1b85f844038823308?rik=fgO1mLK%2b%2fr8Vkw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0040%2f4396%2f4531%2fproducts%2f51vQ0u2pGqL._SL1100_1024x1024.jpg%3fv%3d1616492206&ehk=opceLhIJo5RI9tYYBEbFimfDrX0ga1uuJ3xjH%2fgsv5Y%3d&risl=&pid=ImgRaw&r=0',
        nume: 'Earphone',
        descriere: 'Lorem ipsum, dolor sit  dolor odio recusandae incidunt excepturi quos!',
        pret: '$40.00',
        steleGalbene: 3,
        steleNegre: 2,
        culoare: '#3d3e6c',
        latime: '145px',
    },

    {
        poza: 'https://skmei-ir.com/wp-content/uploads/2021/08/skmei-watch-model-1290-2.jpg',
        nume: 'Watch',
        descriere: 'Lorem ipsum, dolor sit  dolor odio recusandae incidunt excepturi quos!',
        pret: '$70.84',
        steleGalbene: 4,
        steleNegre: 1,
        culoare: '#0b0b0b',
        latime: '145px',
    },

    {
        poza: 'https://th.bing.com/th/id/OIP.znODEBfTIw58p9gPN6gmCAHaGc?rs=1&pid=ImgDetMain',
        nume: 'Mobile',
        descriere: 'Lorem ipsum, dolor sit  dolor odio recusandae incidunt excepturi quos!',
        pret: '$100.84',
        steleGalbene: 5,
        steleNegre: 0,
        culoare: '#ffa04c',
        latime: '170px',

    }
]

afiseazaToateProdusele(produse);