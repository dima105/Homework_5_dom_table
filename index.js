fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    const products = data.products; 
    const div = document.querySelector('.wrapper');
    div.classList.add('gy-3'); 

    products.forEach(data => {

      const cardContainer = document.createElement('div');
      cardContainer.classList.add('col-md-3');

      const productCard = document.createElement('div');
      productCard.classList.add('card');
      productCard.classList.add('border-light');
      productCard.classList.add('h-100');

      const img = document.createElement(`img`);
      img.setAttribute('src', data.thumbnail);
      img.setAttribute('alt', `Image of product`);
      img.style.objectFit = 'cover';
      img.style.height = '150px';

      const bodyProductCard = document.createElement('div');
      bodyProductCard.classList.add('card-body');

      const title = document.createElement('h4');
      title.classList.add('card-title');
      title.textContent = `${data.title}`;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = `${data.description}`;

      const footerProductCard = document.createElement('div');
      footerProductCard.classList.add('card-footer');
      footerProductCard.classList.add('d-flex');
      footerProductCard.classList.add('justify-content-around');

      const price = document.createElement('div');
      price.textContent = `Price : ${data.price}$`;

      const rating = document.createElement('div');
      rating.textContent = `Rating : ${data.rating}`;

      bodyProductCard.append(title);
      bodyProductCard.append(description); 
      
      footerProductCard.append(price);
      footerProductCard.append(rating);

      productCard.append(img);
      productCard.append(bodyProductCard);
      productCard.append(footerProductCard); 

      cardContainer.append(productCard);

      div.append(cardContainer);
      
    });
  });