'use strict';

Product.allProducts = [];
var totalClicks = 0;

function Product(name, src) {
  this.liveClicks = 0;
  this.name = name;
  this.itemSrc = src;
  this.itemWidth = 250;
  this.timesRendered = 0;

  Product.allProducts.push(this);
};

Product.prototype.renderProducts = function() {
  var target = document.getElementById('list-of-products');
  var productHomeLi = document.createElement('li');

  var productImg = document.createElement('img');
  productImg.src = this.itemSrc;
  productImg.alt = this.name;
  productImg.width = this.itemWidth;
  productHomeLi.appendChild(productImg);

  var productTextP = document.createElement('p');
  productTextP.textContent = this.name;
  productHomeLi.appendChild(productTextP);

  target.appendChild(productHomeLi);
};

function handleClickOnProduct(event) {
  if (event.target.tagName === 'IMG') {
    totalClicks++;
    for (var prodIndex = 0; prodIndex < Product.allProducts.length; prodIndex++) {
      if (Product.allProducts[prodIndex].itemSrc === event.target.getAttribute('src')) {
        Product.allProducts[prodIndex].liveClicks++;
      }
    }
    displayProducts();

    if (totalClicks === 25) {
      listOfProducts.removeEventListener('click', handleClickOnProduct);
      displayFinalProducts();
    }
  }
};

function displayProducts() {
  var index1 = Math.floor(Math.random() * Product.allProducts.length);
  var index2 = Math.floor(Math.random() * Product.allProducts.length);
  var index3 = Math.floor(Math.random() * Product.allProducts.length);

  var newProduct1 = Product.allProducts[index1];
  var newProduct2 = Product.allProducts[index2];
  var newProduct3 = Product.allProducts[index3];

  var productList = document.getElementById('list-of-products');
  productList.innerHTML = '';
  newProduct1.renderProducts();
  newProduct2.renderProducts();
  newProduct3.renderProducts();

  newProduct1.timesRendered++;
  newProduct2.timesRendered++;
  newProduct3.timesRendered++;
};

function displayFinalProducts() {
  var target = document.getElementById('list-of-final-products')
  for (var i = 0; i < Product.allProducts.length; i++) {
    var finalDisplay = Product.allProducts[i].name + ' had ' + Product.allProducts[i].liveClicks + ' votes and has shown ' + Product.allProducts[i].timesRendered + ' times.'
    var productHomeLi = document.createElement('li');
    productHomeLi.textContent = finalDisplay;
    target.appendChild(productHomeLi);
  }
};

var listOfProducts = document.getElementById('list-of-products');
listOfProducts.addEventListener('click', handleClickOnProduct);

new Product('R2D2 Suitcase', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Toilet Paper/Ipad Stand Dispenser', 'img/bathroom.jpg');
new Product('Toe Boots', 'img/boots.jpg');
new Product('All Purpose Breakfast Appliance', 'img/breakfast.jpg');
new Product('Meatball Bubble Gum', 'img/bubblegum.jpg');
new Product('Hump Chair', 'img/chair.jpg');
new Product('Green Tentacle Face Alien', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon Meat', 'img/dragon.jpg');
new Product('Utensil Pen', 'img/pen.jpg');
new Product('Pet Swiffer Shoes', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('Shark Sleeping Bag', 'img/shark.jpg');
new Product('Baby Sweep', 'img/sweep.png');
new Product('Taun Taun Sleeping Bag', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Tentacle USB', 'img/usb.gif');
new Product('Not a Watering Can', 'img/water-can.jpg');
new Product('Egg Wine Glass', 'img/wine-glass.jpg');

