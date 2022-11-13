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

      bodyProductCard.append(title);
      bodyProductCard.append(description);
      bodyProductCard.append(footerProductCard);  
      
      footerProductCard.append(price);
      footerProductCard.append(rating);

      productCard.append(img);
      productCard.append(bodyProductCard); 

      cardContainer.append(productCard);

      div.append(cardContainer);
      
    });
  });