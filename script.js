// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: 'Macbook Pro',
    price: 15999.00,
    rates: 12,
    image:
      'https://www.istore.co.za/media/catalog/product/i/p/iphone12_purple_pdp_image_2__wwen.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
  },
  {
    id: 2,
    name: 'Iphone 13 Pro',
    price: 14999,
    rates: 12,
    image:
      'https://www.applecafe.co.za/wp-content/uploads/2021/07/IPHONE-12-.jpg',
  },
  {
    id: 1,
    name: 'Iphone 6 C',
    price: 6000,
    rates: 7,
    image:
      'https://www.applecafe.co.za/wp-content/uploads/2021/07/7-PLUS-ALL-COLORS-2-300x300.jpg',
  },
  {
    id: 1,
    name: 'mfp Laptop',
    price: 23747,
    rates: 1,
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfEYshY2fi-d28CGkcSRKpihAit__qoqjFZ7ZhyrW-ZVlpQo_kcLtN6a9XLyN8eZKlgfE1x8x4nye6XN0rgwNNku9Gj6yVe9krDAnk4D2G&usqp=CAE',
  },
  {
    id: 1,
    name: 'epicdeals Laptop',
    price: 12399,
    rates: 1,
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpBgfbB9a0UGh5bQ-DQx3nW6jgvUIP3-fhoY0L4ZornN_n3ElgWXWXk0lW0XUpf788W6cHmsLcETbRatwbkK1Ja2c2ZB6XPsDYVwuSMx0F1E6oMYLd8mlZ&usqp=CAE',
  },
  {
    id: 1,
    name: 'samsung a23',
    price: 3699,
    rates: 5,
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7APzcS07t884wGyj_4PRjTd3EDGGyJ_EZkvaog5tm_Tb3SsqQitqgArADg7SDpwGD3xAPG6iDMNbc2LIN0GJcr6B5sEJljt_qVWMfyk9KB50M9dNKutHoIA&usqp=CAE',
  },
  {
    id: 1,
    name: 'samaung s22',
    price: 26999,
    rates: 4,
    image:
      'https://images.samsung.com/za/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg',
  },
  {
    id: 1,
    name: 'PS 4 Joystick',
    price: 4599,
    rates: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIDekTTfEwiruLH2iartoLeLdlzteoa-Tz1u2VtjzUR4xMsH4CLJANbK-iNXjv5gqnTZ45PY3SlrPJR2YlucaDAuRYRkwYri_-vNpM3_iMc7BQCy0oxYB3wg&usqp=CAE',
  },
]

// LINK JS TO HTML ELEME
const products = document.getElementById('products');
const spho = document.getElementById('spho')

let numberCount = 0;


function addAmanda() {

}


// DISPLAY PRODUCTS IN HOME PAGE
function homeDisplayProducts() {
    products.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${productsState[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${productsState[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(productsState[i].rates)}
              </div>
              <div class="product__price">R <span>${productsState[i].price}</span></div> 
                <button onclick="addAmanda()">+ ADD TO CART</button> 
          </div>
    
    `

  }
  
}


// CALL THE DISPLAY FUNCTION
homeDisplayProducts() 