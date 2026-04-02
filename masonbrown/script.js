console.log("JavaScript is connected!");

// Buttons and menu elements
const brunchButton = document.querySelector("#brunch-btn");
const lunchButton = document.querySelector("#lunch-btn");
const dinnerButton = document.querySelector("#dinner-btn");
const menuDisplay = document.querySelector("#menu-display");
const menuTitle = document.querySelector("#menu-title");

// Menu items
const brunchItems = `
  <div class="menu-card">
    <h3>Buttermilk Soufflé Pancakes</h3>
    <p>Delicately aerated pancakes with cultured butter, maple gastrique, and seasonal berries</p>
  </div>
  <div class="menu-card">
    <h3>Heritage Eggs & Applewood Bacon</h3>
    <p>Farm-raised eggs prepared to order, accompanied by crisp applewood-smoked bacon and chive-infused butter</p>
  </div>
  <div class="menu-card">
    <img src="images/brunchpic1.png" alt="Pancakes">
  </div>
`;

const lunchItems = `
  <div class="menu-card">
    <h3>Dry-Aged Beef Burger</h3>
    <p>House-ground dry-aged beef, brioche bun, aged cheddar, heirloom tomato, and truffle aioli</p>
  </div>
  <div class="menu-card">
    <h3>Pommes Frites</h3>
    <p>Hand-cut potatoes, twice-fried to perfection, finished with sea salt and served with garlic confit aioli</p>
  </div>
  <div class="menu-card">
    <h3>Garden Salad</h3>
    <p>Seasonal greens, shaved vegetables, toasted seeds, and a light champagne vinaigrette</p>
  </div>
  <div class="menu-card">
    <img src="images/lunchpic1.png" alt="Lunch Dish">
  </div>
  <div class="menu-card">
    <h3>Pan-Seared Atlantic Salmon with Saffron Risotto</h3>
    <p>Perfectly seared salmon fillet with crispy golden skin and flaky pink interior, accompanied by creamy saffron risotto Milanese, grilled asparagus, roasted cherry tomatoes, and lemon beurre blanc sauce.</p>
  </div>
  <div class="menu-card">
    <img src="images/salmonlunch.png" alt="Lunch Dish">
  </div>
`;

const dinnerItems = `
  <div class="menu-card">
    <h3>Pan-Seared Filet Mignon</h3>
    <p>Prime beef filet, finished with herb butter, served alongside roasted seasonal vegetables</p>
  </div>
  <div class="menu-card">
    <h3>Pommes Purée</h3>
    <p>Silken mashed potatoes enriched with European butter and finished with a touch of cream</p>
  </div>
  <div class="menu-card">
    <h3>Seasonal Vegetable Medley</h3>
    <p>Chef-selected vegetables, lightly sautéed with herbs and extra virgin olive oil</p>
  </div>
  <div class="menu-card">
    <img src="images/dinnerpic1.png" alt="Dinner Dish">
  </div>
  <div class="menu-card">
    <h3>Caribbean Soul Fusion Gnocchi</h3>
    <p>Pillowy potato gnocchi handcrafted and pan-seared to achieve a golden exterior, served with Caribbean-inspired sauce.</p>
  </div>
  <div class="menu-card">
    <h3>Sauce, the Right Way</h3>
    <p>Bathed in our signature coconut-jerk cream sauce—a harmonious marriage of island spices and silken coconut reduction.</p>
  </div>
  <div class="menu-card">
    <h3>Fusion Cuisine</h3>
    <p>Tri-color bell peppers, toasted coconut flakes, fresh cilantro, and lime zest deliver layers of tropical complexity.</p>
  </div>
  <div class="menu-card">
    <img src="images/gnocchirasta.png" alt="Gnocchi Dish">
  </div>
  <div class="menu-card">
    <h3>Jumbo Rock Shrimp Scampi</h3>
    <p>The ocean's finest treasure, elevated to rarefied heights.</p>
  </div>
  <div class="menu-card">
    <h3>Star of the Show</h3>
    <p>3 pristine jumbo rock shrimp, seared to perfection, in a decadent lemon-garlic-parmesan emulsion.</p>
  </div>
  <div class="menu-card">
    <h3>Mediterranean Flavors</h3>
    <p>Accompanied by charred ciabatta crostini, Italian parsley, lemon zest curls, and vine-ripened cherry tomatoes.</p>
  </div>
  <div class="menu-card">
    <img src="images/shrimpdinner1.png" alt="Shrimp Dish">
  </div>
`;

// Function to update menu
function updateMenu(title, items) {
  menuTitle.textContent = title;
  menuDisplay.innerHTML = items;
}

// Button event listeners
brunchButton.addEventListener("click", () => updateMenu("Brunch Menu", brunchItems));
lunchButton.addEventListener("click", () => updateMenu("Lunch Menu", lunchItems));
dinnerButton.addEventListener("click", () => updateMenu("Dinner Menu", dinnerItems));

// ===== Image Overlay Logic =====

// Create overlay element
const overlay = document.createElement("div");
overlay.id = "image-overlay";
document.body.appendChild(overlay);

// Create image inside overlay
const overlayImg = document.createElement("img");
overlay.appendChild(overlayImg);

// Event delegation: handle clicks on images inside menuDisplay
menuDisplay.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    overlayImg.src = e.target.src;
    overlay.style.display = "flex";
  }
});

// Clicking overlay closes it
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
