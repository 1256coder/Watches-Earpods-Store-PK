function showSection(sectionId) {
    document.querySelectorAll('div[id$="-section"]').forEach(section => {
      section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
  }

function showPrice(itemName, price, imageUrl) {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>${itemName} - Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
          }
          .image-container img {
            width: 500px;
            height: auto;
            border-radius: 10px;
          }
          .text-container {
            flex: 1;
          }
          .text-container h1 {
            margin: 0;
            font-size: 3rem;
          }
          .text-container p {
            margin: 10px 0;
            font-size: 2rem;
            color: #00008B;
          }
          .description {
            margin-top: 20px;
            font-size: 1rem;
            color: #333;
          }
          .buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }
          .button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .button:hover {
            background-color: #0056b3;
          }
          .cart-button {
            background-color: #28a745; /* Green for Add to Cart */
          }
          .cart-button:hover {
            background-color: #218838;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="image-container">
            <img src="${imageUrl}" alt="${itemName}">
          </div>
          <div class="text-container">
            <h1>${itemName}</h1>
            <p><strong>Price:</strong> ${price}</p>
            <div class="buttons">
              <button class="button cart-button" onclick="addToCart('${itemName}', '${price}', '${imageUrl}')">Add to Cart</button>
              <button class="button buy-now" onclick="showPrice('${itemName}', '${price}', '${imageUrl}')">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="description">
          <h3>DESCRIPTION</h3>
          <p>Explore our top-quality products and experience the best value for your money. Each product is designed to meet your needs and exceed your expectations.</p>
        </div>
      </body>
    </html>
  `);
}


  // ===== Parallax Stars Hero =====
  function generateStarShadows(n) {
    var parts = [];
    for (var i = 0; i < n; i++) {
      parts.push(Math.floor(Math.random() * 2000) + 'px ' + Math.floor(Math.random() * 1600) + 'px #FFF');
    }
    return parts.join(', ');
  }

  function initStars() {
    var small = generateStarShadows(300);
    var medium = generateStarShadows(120);
    var big = generateStarShadows(60);
    document.getElementById('starsSmall').style.boxShadow = small;
    document.getElementById('starsSmallDup').style.boxShadow = small;
    document.getElementById('starsMedium').style.boxShadow = medium;
    document.getElementById('starsMediumDup').style.boxShadow = medium;
    document.getElementById('starsBig').style.boxShadow = big;
    document.getElementById('starsBigDup').style.boxShadow = big;
  }

  // ===== Flowing Menu directional hover =====
  function closestEdge(x, y, w, h) {
    var topDist = Math.pow(x - w / 2, 2) + Math.pow(y, 2);
    var bottomDist = Math.pow(x - w / 2, 2) + Math.pow(y - h, 2);
    return topDist < bottomDist ? 'top' : 'bottom';
  }

  function initFlowingMenu() {
    var items = document.querySelectorAll('.flow-item');
    items.forEach(function (item) {
      var marquee = item.querySelector('.flow-marquee');
      item.addEventListener('mouseenter', function (e) {
        var rect = item.getBoundingClientRect();
        var edge = closestEdge(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
        marquee.style.transition = 'none';
        marquee.style.transform = edge === 'top' ? 'translateY(-101%)' : 'translateY(101%)';
        marquee.offsetHeight; // force reflow
        marquee.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        requestAnimationFrame(function () {
          marquee.style.transform = 'translateY(0%)';
        });
      });
      item.addEventListener('mouseleave', function (e) {
        var rect = item.getBoundingClientRect();
        var edge = closestEdge(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
        marquee.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        marquee.style.transform = edge === 'top' ? 'translateY(-101%)' : 'translateY(101%)';
      });
    });
  }

  window.addEventListener('DOMContentLoaded', function () {
    initStars();
    initFlowingMenu();
  });
