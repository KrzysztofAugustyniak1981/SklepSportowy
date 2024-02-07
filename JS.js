
/* Products */
let product = [
    ["Piłka nożna","outside",98.00,"FootballBall.jpg",0],
    ["Piłka do koszykówki","outside",89.00,"BasketBall.jpg",0],
    ["Deskorolka","outside",151.00,"Deskorolka.jpg",0],
    ["Hankle ciężkie","inside",122.99,"Hankle.jpg",0],
    ["Hankle lekkie","inside",69.99,"HankleLekkie.jpg",0],
    ["Skuter wodny","water",3698.00,"JetSki.jpg",0],
    ["Kamizelka Ratunkowa","water",139.00,"KamizelkaRatunkowa.jpg",0],
    ["Kajak","water",870.00,"Kayak.jpg",0],
    ["Łuk sportowy","outside",240.00,"Łuk.jpg",0],
    ["Maska z płetwami","water",695.00,"MaskaPłetwy.jpg",0],
    
];
let length = product.length;
let cartPrice = 0;
let cartPriceRe = 0;
/* Elements */
const productList = document.getElementById("Products");
const cartPlace = document.getElementById("cart");
const cartOverlay = document.getElementById("cartView");
const buttonGroup = document.getElementById("Products");


/* Function */
function wszystkoInput() {
    clear();
    let i = length -1;
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

let buttonGroupPressed = e => {
    let isButton = e.target.nodeName === 'BUTTON';
    if(!isButton) {
        return
    } let buying = e.target.id;
    let buyingProduct = buying.replace(/\D/g, "");
    if (buying.length < 11) {
        let changeProdukt =  product[buyingProduct][4];
        if (changeProdukt>0) {
            product[buyingProduct][4]--;
            console.log(product[buyingProduct][4]);
        }
        
    } else if (buying.length > 10) {
        
        product[buyingProduct][4]++;
        console.log(product[buyingProduct][4]);
    } cartRefresh()
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
function cartRefresh() {
    let i = 0;
    cartPrice = 0;
    fresh();
    function fresh() {
    if (length>i) {
        cartPriceRe = product[i][2] * product[i][4];
        cartPrice += cartPriceRe;
        i++;
        fresh();
    }
    cartPlace.innerHTML = cartPrice + "Pln";
};}

function openModal() {
    document.getElementById('overlay').style.display = 'flex';
    cartOverlay.innerHTML = '';
    let i = 0;
    let productInCart = 0;
    while (i < length) {
        if (product[i][4]>0) {
            productInCart = product[i][4] * product[i][2];
            cartOverlay.innerHTML +=
            '<div class="text-center row"><div class="my-1 col-3"><span class="fw-bold">' + product[i][0] +
            '</span></div><div class="my-1 col-2">' + product[i][2] + 
            '</div><div class="my-1 col-2"><button id="addProduct' + i + '">+</button> x ' + product[i][4] +
            ' szt. <button id="deduct' + i + '">-</button></div><div class="my-1 col-1">razem:</div><div class="my-1 col-1">' + productInCart + 'Pln</div><br></div>'
        }
        i++;
    }
    cartOverlay.innerHTML += '<div class="text-end fw-bold">Kwota do zapłaty : ' + cartPrice + '</div>'
};

function closeModal() {
    document.getElementById('overlay').style.display = 'none';

}



buttonGroup.addEventListener("click", buttonGroupPressed);
cartOverlay.addEventListener("click", buttonGroupPressed);
cartOverlay.addEventListener("click", openModal);