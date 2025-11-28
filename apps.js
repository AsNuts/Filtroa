const prendak = [
    {
        prendakIzena: "Korrika",
        prezioa: 80,
        img: "img/running.jpg" , 
        kategoria: "zapatilak",
    },
    {
        prendakIzena: "Futbola",
        prezioa: 120,
        img: "img/futbol.jpg" , 
        kategoria: "zapatilak",
    },
    {
        prendakIzena: "Txandal",
        prprezioaice: 45,
        img: "img/chandal.jpg" , 
        kategoria: "galtzak",
    },
    {
        prendakIzena: "Bakero",
        prezioa: 80,
        img: "img/baquero.jpg" , 
        kategoria: "galtzak",
    },
    {
        prendakIzena: "RealSociedad Kamiseta",
        prezioa: 110,
        img: "img/kamiseta.jpg" , 
        kategoria: "kamiseta",
    },
    {
        prendakIzena: "Polo",
        prezioa: 80,
        img: "img/polo.jpg" , 
        kategoria: "kamiseta",
    },
    {
        prendakIzena: "Alkandora",
        prezioa: 55,
        img: "img/camisa.jpg" , 
        kategoria: "kamiseta",
    },
    {
        prendakIzena: "Txamarra Akoltxatua",
        prezioa: 90,
        img: "img/acolchado.jpg" , 
        kategoria: "txamarra",
    },
    {
        prendakIzena: "Txamarra",
        prezioa: 95,
        img: "img/abrigo.jpg" , 
        kategoria: "txamarra",
    },
]

const displayPrendak = (prendakToShow) => {
    const dendaPrendak = document.getElementById("dendaPrendak")

    dendaPrendak.innerHTML = ""
    prendakToShow.forEach(prendak => {
        const div = document.createElement("div")
        div.className = 'prendaKontainerra'
        div.innerHTML = `
        <img src="${prendak.img}" alt="algun-alt">
        <h3>${prendak.prendaktIzena}</h3>
        <p class="prezioa"> $ ${prendak.prezioa}</p>
        <button>Karritora gehitu</button>
        `
        dendaPrendak.append(div)
    });
}

const filtroPrendak = (kategoria) => {
  const prendakToShow = prendak.filter(prendak => prendak.kategoria === kategoria)
  displayPrendak(productsToShow)
}

const zapatilak = document.getElementById('zapatilak');
const galtzak = document.getElementById('galtzak');
const kamiseta = document.getElementById('kamiseta');
const txamarra = document.getElementById('txamarra');
const denak = document.getElementById('dena');

zapatilak.addEventListener('click', () => {
  filtroPrendak('zapatilak');
});


galtzak.addEventListener('click', () => {
  filtroPrendak('galtzak');
});

kamiseta.addEventListener('click', () => {
  filtroPrendak('kamiseta');
});

txamarra.addEventListener('click', () => {
  filtroPrendak('txamarra');
});

denak.addEventListener('click', () => {
  displayPrendak(prendak)
});

displayPrendak(prendak)