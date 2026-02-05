/* 1. Recipe Data Array */
const recipes = [
    {
        id: 1,
        title: "Classic Pasta",
        time: 25,
        difficulty: "easy",
        description: "A quick and simple pasta recipe with tomato sauce.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Grilled Cheese Sandwich",
        time: 15,
        difficulty: "easy",
        description: "Crispy grilled sandwich with melted cheese inside.",
        category: "salad"
    },
    {
        id: 3,
        title: "Vegetable Stir Fry",
        time: 30,
        difficulty: "easy",
        description: "Healthy mixed vegetables stir-fried with light spices.",
        category: "salad"
    },
    {
        id: 4,
        title: "Creamy Mushroom Pasta",
        time: 40,
        difficulty: "medium",
        description: "Rich and creamy pasta with sautéed mushrooms.",
        category: "pasta"
    },
    {
        id: 5,
        title: "Paneer Butter Masala",
        time: 50,
        difficulty: "medium",
        description: "Popular Indian curry made with paneer in a buttery gravy.",
        category: "salad"
    },
    {
        id: 6,
        title: "Veg Biryani",
        time: 60,
        difficulty: "medium",
        description: "Aromatic rice dish cooked with vegetables and spices.",
        category: "salad"
    },
    {
        id: 7,
        title: "Lasagna",
        time: 75,
        difficulty: "hard",
        description: "Layered pasta dish baked with sauce and cheese.",
        category: "pasta"
    },
    {
        id: 8,
        title: "Stuffed Bell Peppers",
        time: 65,
        difficulty: "hard",
        description: "Bell peppers stuffed with spiced vegetables and baked.",
        category: "salad"
    }
];

/* 2. DOM Selection */
const recipeContainer = document.querySelector("#recipe-container");

/* 3. Create Recipe Card Function */
const createRecipeCard = (recipe) => {
    return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>

      <div class="recipe-meta">
        <span>⏱ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>

      <p>${recipe.description}</p>
    </div>
  `;
};

/* 4. Render Recipes Function */
const renderRecipes = (recipeList) => {
    const cardsHTML = recipeList
        .map((recipe) => createRecipeCard(recipe))
        .join("");

    recipeContainer.innerHTML = cardsHTML;
};

/* 5. Initialize App */
renderRecipes(recipes);