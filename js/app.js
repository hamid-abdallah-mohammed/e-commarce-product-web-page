//  Selecting
const userCart = document.querySelector('.user-cart')
const cart = document.querySelector('.cart')

const openMenu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const closeMenu = document.querySelector('.closeMenu')


const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase')
const counter = document.querySelector('.counter')
let currentCounterValue = 0;


let firstShow = document.querySelector('.firstShow')
const nextShowImg = Array.from(document.querySelectorAll('.nextShow'))
const removeActive = document.querySelector('.remove')
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
let imageIndex = 0

// checkout price and delete & multiple price & delete price
const msgEmpty = document.querySelector('.msg-empty');
const cart_price_group = document.querySelector('.cart-price-group');
const checkoutBtn = document.querySelector('.btn-cart');
let currentPrice = 125;
const counterValue = document.querySelector('.counterValue');
const fullPrice = document.querySelector('.full-price');
const deletePrice = document.querySelector('.delete-price')

const counterCarts = document.querySelector('.counter-carts')
const addToCart = document.querySelector('.btn');

const overlay = document.querySelector('.overlay');
const lightbox = document.querySelector('.available-products');


//  adding events
userCart.addEventListener('click', () => {
   cart.classList.toggle('hidden')
})

openMenu.addEventListener('click', () => {
    nav.classList.toggle('test')
})

closeMenu.addEventListener('click', () => {
    nav.classList.toggle('test')
})

next.addEventListener('click', nextProduct);
previous.addEventListener('click', previousProduct);

decrease.addEventListener('click', decreaseAmount);
increase.addEventListener('click', increaseAmount);

addToCart.addEventListener('click', addingToCart)
deletePrice.addEventListener('click', deleteGotProducts)

// functions
function decreaseAmount(event){

    if(currentCounterValue <= 0){   
    } else{
        currentCounterValue--
        counter.innerHTML = currentCounterValue;
    }
    
}

function increaseAmount(event){
    currentCounterValue++
     counter.innerHTML = currentCounterValue
}

nextShowImg.forEach(nextImg => {
    nextImg.addEventListener('click', (event) => {
          firstShow.src = event.target.src.replace('-thumbnail', '')
         if(event){
            removeActive.classList.remove('active')
         } else{
            event.classList.add('active')
         }
    })
})

let arr = [
'/images/image-product-1.jpg',
'/images/image-product-1-thumbnail.jpg', 
'/images/image-product-2-thumbnail.jpg',
'/images/image-product-3-thumbnail.jpg', 
'/images/image-product-4-thumbnail.jpg']

function nextProduct(e){
    imageIndex++
    if(imageIndex > arr.length - 1){
        imageIndex = 0
    }
    firstShow.src = arr[imageIndex].replace('-thumbnail', '')

}

function previousProduct(e){
    imageIndex--
    if(imageIndex < 0){
        imageIndex = arr.length - 1
    }
    firstShow.src = arr[imageIndex].replace('-thumbnail', '')
}

function addingToCart(){
    //  counterCarts.innerHTML = currentCounterValue;
    if(currentCounterValue <= 0) {
        alert('You can not buy 0 products')
        counterCarts.style.display = 'none'
        msgEmpty.style.display = 'block'
        cart_price_group.style.display = 'none'
        checkoutBtn.style.display = 'none'
    }  
     
    if(currentCounterValue > 0 ){
        counterCarts.style.display = 'block'
        counterCarts.innerHTML = currentCounterValue
        msgEmpty.style.display = 'none'
        cart_price_group.style.display = 'flex'
        checkoutBtn.style.display = 'block'
        counterValue.innerHTML = currentCounterValue;
        counted()
    }
     

}


function counted(){
    // currentValue set it to the full price and parse it 
    let multipleValues =  currentCounterValue * currentPrice
    fullPrice.innerHTML = "$" + multipleValues;
}

function deleteGotProducts(){
      cart_price_group.style.display = 'none'
    checkoutBtn.style.display = 'none'
    counterCarts.style.display = 'none'
    msgEmpty.style.display = 'block'
}


 
// lightBox desktop working 
const overlayLightBox = document.querySelector('.overlay');
const firstLightBoxShow = document.querySelector('.firstLightBoxShow')
const closeLightBox = document.querySelector('.lightbox_close-icon');
const prevLightBox = document.querySelector('.prevLightBox');
const nexLightBox = document.querySelector('.nexLightBox')
const pickLightBox  = document.querySelectorAll('.pickLightBox')

var x = window.matchMedia("(max-width:1326px)")
function myFunction(x) {
    if (x.matches) { // If media query matches
      overlayLightBox.style.display = 'none'
    } 
  }
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



firstShow.addEventListener('click', (e) => {
    if(window.innerWidth >= 1350) {
        overlayLightBox.style.display = 'block'
    } else{
        overlayLightBox.style.display = 'none'
    }

})


nexLightBox.addEventListener('click', nextProduct)
nexLightBox.addEventListener('click', MoveToNext)
prevLightBox.addEventListener('click', previousProduct)
prevLightBox.addEventListener('click', MoveToPervImg)

function MoveToNext(e){
    imageIndex++
    if(imageIndex > arr.length - 1){
        imageIndex = 0
    }
    firstLightBoxShow.src = arr[imageIndex].replace('-thumbnail', '')

}



function MoveToPervImg(e){
    imageIndex--
    if(imageIndex < 0){
        imageIndex = arr.length - 1
    }
    firstLightBoxShow.src = arr[imageIndex].replace('-thumbnail', '')
}

pickLightBox.forEach(nextImg => {
    nextImg.addEventListener('click', (event) => {
          firstLightBoxShow.src = event.target.src.replace('-thumbnail', '')
         if(event){
            removeActive.classList.remove('active')
         } else{
            event.classList.add('active')
         }
                       })
})