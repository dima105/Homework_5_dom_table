
let products = 0;
let totalPrice = 0;
let arrayOfItems = [];


fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);

    products = data.products; 
    const div = document.querySelector('.wrapper');
    div.classList.add('gy-3'); 

    products.forEach(data => {

      const cardContainer = document.createElement('div');
      cardContainer.classList.add('col-md-3');
      cardContainer.setAttribute('id', data.id);

      const productCard = document.createElement('div');
      productCard.classList.add('card');
      productCard.classList.add('border-light');
      productCard.classList.add('h-100');

      const img = document.createElement(`img`);
      img.setAttribute('src', data.thumbnail);
      img.setAttribute('alt', data.title);
      img.style.objectFit = 'cover';
      img.style.height = '180px';

      const bodyProductCard = document.createElement('div');
      bodyProductCard.classList.add('card-body');
      bodyProductCard.classList.add('d-flex');
      bodyProductCard.classList.add('flex-column');

      const title = document.createElement('h4');
      title.classList.add('card-title');
      title.textContent = `${data.title}`;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.classList.add('flex-fill'); 
      description.textContent = `${data.description}`;

      const footerProductCard = document.createElement('div');
      footerProductCard.classList.add('card-footer');
      footerProductCard.classList.add('d-flex');
      footerProductCard.classList.add('justify-content-around');

      const price = document.createElement('div');
      price.textContent = `Price : ${data.price}$`;

      const rating = document.createElement('div');
      rating.textContent = `Rating : ${data.rating}`;

      const buttonAddToCart = document.createElement('a');
      buttonAddToCart.classList.add('btn');
      buttonAddToCart.classList.add('btn-primary');
      buttonAddToCart.classList.add('mt-2');
      buttonAddToCart.textContent = 'Add to cart';

      bodyProductCard.append(title);
      bodyProductCard.append(description);
      bodyProductCard.append(footerProductCard); 
      bodyProductCard.append(buttonAddToCart); 
      
      footerProductCard.append(price);
      footerProductCard.append(rating);

      productCard.append(img);
      productCard.append(bodyProductCard); 

      cardContainer.append(productCard);

      div.append(cardContainer);

      const buttonCart = document.querySelector('.buttonCart');
      buttonCart.textContent = 'You cart - ' + totalPrice + '.00$'; 

      buttonAddToCart.onclick = function addPrice(Element) {
        totalPrice += data.price;
        return  buttonCart.textContent = 'You cart - ' + totalPrice + '.00$'; 
      }

      buttonCart.onclick = function openCart(Element) {
        const shoppingCart = document.querySelector('.shoppingCart');

        if(shoppingCart.style.display === `block` ){
          shoppingCart.style.display = `none`; 
        }else {
          shoppingCart.style.display = `block`; 
        }
      }
    });
  });

  function findItems(Element) {
    let valueofSearch = document
    .getElementsByName("q")[0].value
    .toLowerCase()
    .trim();
   
    products.forEach(data => {
      let descriptionValue = data.description
      .toLowerCase()
      .indexOf(valueofSearch);

      let titleValue = data.title
      .toLowerCase()
      .indexOf(valueofSearch);

      let currentDiv = document.getElementById(data.id);

      if (descriptionValue >= 0 || titleValue >= 0) {
        currentDiv.style.display = `block`; 
      }else {
        currentDiv.style.display = `none`; 
      }
    });
 }