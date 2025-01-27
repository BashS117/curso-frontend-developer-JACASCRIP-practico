const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menucarritoicon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")

const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const menuicon = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container")

const productDetailContainer = document.querySelector("#productDetail")

menuemail.addEventListener("click", toggledesktopmenu);
menuicon.addEventListener("click", togglemobilemenu);
menucarritoicon.addEventListener(`click`, togglecarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside );

function toggledesktopmenu() { 

    const isasideclosed= shoppingCartContainer.classList.contains(`inactive`);

    if(!isasideclosed){
        shoppingCartContainer.classList.add(`inactive`);
       }

   desktopmenu.classList.toggle(`inactive`);
}

function togglemobilemenu(){  
    
    const isasideclosed= shoppingCartContainer.classList.contains(`inactive`);

    if(!isasideclosed){
        shoppingCartContainer.classList.add(`inactive`);
       }

       closeProductDetailAside();
         
    mobilemenu.classList.toggle(`inactive`);
}

const ismobilemenuclosed= mobilemenu.classList.contains(`inactive`);
const isasideclosed= shoppingCartContainer.classList.contains(`inactive`);

function togglecarritoaside(){
    const ismobilemenuclosed= mobilemenu.classList.contains(`inactive`);
   
   if(!ismobilemenuclosed){
    mobilemenu.classList.add(`inactive`);
   }
   
   const isProductDetailClosed= productDetailContainer.classList.contains(`inactive`);
   
   if(!isProductDetailClosed){
    productDetailContainer.classList.toggle(`inactive`);
   }
   


   shoppingCartContainer.classList.toggle(`inactive`)

 }

function openProductDetailAside(){
   shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
 }

 function closeProductDetailAside() {

    productDetailContainer.classList.add('inactive');  
 }



 const productList = [];
 productList.push({
    name: `bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`

})

 productList.push({
    name: `Pantalla`,
    price: 220,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`

})

 productList.push({
    name: `pc`,
    price: 520,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`

 })

//  <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>

 function renderProducts(arr){
    for ( product of arr){
        const productcard = document.createElement(`div`);
        productcard.classList.add(`product-card`);
    
        //product = {name, price , image}->product.image 
        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`, product.image);
        productImg.addEventListener('click', openProductDetailAside )

     
         
        const productinfo = document.createElement(`div`);
        productinfo.classList.add(`product-info`);
    
        const productinfodiv = document.createElement(`div`);
    
        
        const productprice  = document.createElement(`p`);
        productprice.innerText ='$' + product.price
        const productName = document.createElement(`p`);
        productName.innerText = product.name;
    
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productName);
    
        const productinfoFigure = document.createElement(`figure`);
        const productimgcart = document.createElement(`img`);
        productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productinfoFigure.appendChild(productimgcart);
    
    
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productinfo);
    
        cardsContainer.appendChild(productcard);
    
    
     }
 }

 renderProducts(productList);