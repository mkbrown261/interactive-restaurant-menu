console.log("JavaScript is connected!");


const brunchButton = document.querySelector("#brunch-btn");
const lunchButton = document.querySelector("#lunch-btn");
const dinnerButton = document.querySelector("#dinner-btn");
const menuDisplay = document.querySelector("#menu-display");
const menuTitle = document.querySelector("#menu-title");

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
  
`;


function updateMenu(title, items) {
  menuTitle.textContent = title;
  menuDisplay.innerHTML = items;
}


brunchButton.addEventListener("click", () => updateMenu("Brunch Menu", brunchItems));
lunchButton.addEventListener("click", () => updateMenu("Lunch Menu", lunchItems));
dinnerButton.addEventListener("click", () => updateMenu("Dinner Menu", dinnerItems));