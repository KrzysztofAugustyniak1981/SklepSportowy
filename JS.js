
/* Products */
let product = [
    ["Piłka nożna","outside",98.00,"FootballBall.jpg"],
    ["Piłka do koszykówki","outside",89.00,"BasketBall.jpg"],
    ["Deskorolka","outside",151.00,"Deskorolka.jpg"],
    ["Hankle ciężkie","inside",122.99,"Hankle.jpg"],
    ["Hankle lekkie","inside",69.99,"HankleLekkie.jpg"],
    ["Skuter wodny","water",3698.00,"JetSki.jpg"],
    ["Kamizelka Ratunkowa","water",139.00,"KamizelkaRatunkowa.jpg"],
    ["Kajak","water",870.00,"Kayak.jpg"],
    ["Łuk sportowy","outside",240.00,"Łuk.jpg"],
    ["Maska z płetwami","water",695.00,"MaskaPłetwy.jpg"],
    
];
let length = product.length;
/* inputs */
let productList = document.getElementById("Products");


/* get element */


/* Function */
function wszystkoInput() {
    let i = length -1;
    clear();
    OfferAll();

    function OfferAll() {
    if(i > -1) {
        productList.innerHTML +=
        '<div class="container my-4 col-md-5 mx-auto"><div class=""><img src="./Images/' +
        product[i][3] +
        '" class="img-fluid"></div><div class="text-center"><div class="fw-bold my-2">' +
        product[i][0] +
        '</div><div class="row justify-content-center"><div class="col-auto"><button id="addProduct' +
        i +
        '">+</button></div><div class="col-auto">' +
        product[i][2] +
        'Pln</div><div class="col-auto"><button id="deduct' + 
        i + 
        '">-</button></div></div></div></div>';
        i--;
        OfferAll()
    };};
    document.getElementById("myBtnAll").classList.add('active');
};

function DoDomuInput() {
    
    let i = length -1;
    clear();
    OfferInside();

    function OfferInside() {
    if(i>-1 && product[i][1]=="inside") {
        productList.innerHTML +=
        '<div class="container my-4 col-md-5 mx-auto"><div class=""><img src="./Images/' +
        product[i][3] +
        '" class="img-fluid"></div><div class="text-center"><div class="fw-bold my-2">' +
        product[i][0] +
        '</div><div class="row justify-content-center"><div class="col-auto"><button id="addProduct' +
        i +
        '">+</button></div><div class="col-auto">' +
        product[i][2] +
        'Pln</div><div class="col-auto"><button id="deduct' + 
        i + 
        '">-</button></div></div></div></div>';
        i--;
        console.log("lol1");
        OfferInside();
    } else if (i>-1) {
        i--;
        OfferInside();
    };};
    document.getElementById("doDomu").classList.add('active');
}

function DoWodyInput() {

    let i = length -1;
    clear();
    OfferWater();

    function OfferWater() {
    if(i>-1 && product[i][1]=="water") {
        productList.innerHTML +=
        '<div class="container my-4 col-md-5 mx-auto"><div class=""><img src="./Images/' +
        product[i][3] +
        '" class="img-fluid"></div><div class="text-center"><div class="fw-bold my-2">' +
        product[i][0] +
        '</div><div class="row justify-content-center"><div class="col-auto"><button id="addProduct' +
        i +
        '">+</button></div><div class="col-auto">' +
        product[i][2] +
        'Pln</div><div class="col-auto"><button id="deduct' + 
        i + 
        '">-</button></div></div></div></div>';
        i--;
        console.log("lol1");
        OfferWater();
    } else if (i>-1) {
        i--;
        OfferWater();
    };};
    document.getElementById("doWody").classList.add('active');
}

function NaDworzeInput() {

    let i = length -1;
    clear();
    OfferOutside();

    function OfferOutside() {
    if(i>-1 && product[i][1]=="outside") {
        productList.innerHTML +=
        '<div class="container my-4 col-md-5 mx-auto"><div class=""><img src="./Images/' +
        product[i][3] +
        '" class="img-fluid"></div><div class="text-center"><div class="fw-bold my-2">' +
        product[i][0] +
        '</div><div class="row justify-content-center"><div class="col-auto"><button id="addProduct' +
        i +
        '">+</button></div><div class="col-auto">' +
        product[i][2] +
        'Pln</div><div class="col-auto"><button id="deduct' + 
        i + 
        '">-</button></div></div></div></div>';
        i--;
        console.log("lol1");
        OfferOutside();
    } else if (i>-1) {
        i--;
        OfferOutside();
    };};
    document.getElementById("naDworze").classList.add('active');
}


function clear() {
    productList.innerHTML = "";
    if ( document.getElementById("myBtnAll").classList.contains('active'))
    document.getElementById("myBtnAll").classList.remove('active');
    if ( document.getElementById("doDomu").classList.contains('active'))
    document.getElementById("doDomu").classList.remove('active');
    if ( document.getElementById("doWody").classList.contains('active'))
    document.getElementById("doWody").classList.remove('active');
    if ( document.getElementById("naDworze").classList.contains('active'))
    document.getElementById("naDworze").classList.remove('active');
}


