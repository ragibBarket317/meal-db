const loadMealDb = (search) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => displayMealDb(data.meals));
};

const displayMealDb = (meals) => {
  //   console.log(meals);
  const mealDbContainer = document.getElementById("mealDb-container");
  mealDbContainer.innerHTML = "";
  meals.forEach((meal) => {
    console.log(meal);
    const mealDbDiv = document.createElement("div");
    mealDbDiv.classList.add("col");
    mealDbDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
                
            </p>
            <button onclick="loadMealDetails('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Details</button>
            </div>
            
        </div>
    `;
    mealDbContainer.appendChild(mealDbDiv);
  });
};

const loadMealDetails = (idMeal) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals));
};

const displayMealDetails = (meals) => {
  const modalTitle = document.getElementById("exampleModalLabel");
  const mealDbModalBody = document.getElementById("mealDb-modal-body");
  mealDbModalBody.innerHTML = "";
  meals.forEach((meal) => {
    modalTitle.innerText = meal.strMeal;
    const mealDbModalDiv = document.createElement("div");
    mealDbModalDiv.classList.add("meal-modal-body");
    mealDbModalDiv.innerHTML = `
    <img class="img-fluid rounded mx-auto d-block" src="${meal.strMealThumb}"/>
    <h2 class="my-5 text-center">Food Details</h2>
    <p class="my-3">Food Category: ${meal.strCategory}</p>
    <p class="my-3">Food Area: ${meal.strArea}</p>
    <h5>Cooking Instraction: </h5>
    <p>${meal.strInstructions}</p>
    <h5>Ingradiants: </h5>
    <ul>
        <li>${meal.strIngredient1 ? meal.strIngredient1 : "No ingredient"}</li>
        <li>${meal.strIngredient2 ? meal.strIngredient2 : "No ingredient"}</li>
        <li>${meal.strIngredient3 ? meal.strIngredient3 : "No ingredient"}</li>
        <li>${meal.strIngredient4 ? meal.strIngredient4 : "No ingredient"}</li>
        <li>${meal.strIngredient5 ? meal.strIngredient5 : "No ingredient"}</li>
        <li>${meal.strIngredient6 ? meal.strIngredient6 : "No ingredient"}</li>
        <li>${meal.strIngredient7 ? meal.strIngredient7 : "No ingredient"}</li>
        <li>${meal.strIngredient8 ? meal.strIngredient8 : "No ingredient"}</li>
        <li>${meal.strIngredient9 ? meal.strIngredient9 : "No ingredient"}</li>
        <li>${
          meal.strIngredient10 ? meal.strIngredient10 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient11 ? meal.strIngredient11 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient12 ? meal.strIngredient12 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient13 ? meal.strIngredient13 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient14 ? meal.strIngredient14 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient15 ? meal.strIngredient15 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient16 ? meal.strIngredient16 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient17 ? meal.strIngredient17 : "No ingredient"
        }</li>
        <li>${
          meal.strIngredient18 ? meal.strIngredient18 : "No ingredient"
        }</li>
    </ul>

    <h5>Measure: </h5>   
    
    <ul>
        <li>${meal.strMeasure1 ? meal.strMeasure1 : "No ingredient"}</li>
        <li>${meal.strMeasure2 ? meal.strMeasure2 : "No ingredient"}</li>
        <li>${meal.strMeasure3 ? meal.strMeasure3 : "No ingredient"}</li>
        <li>${meal.strMeasure4 ? meal.strMeasure4 : "No ingredient"}</li>
        <li>${meal.strMeasure5 ? meal.strMeasure5 : "No ingredient"}</li>
        <li>${meal.strMeasure6 ? meal.strMeasure6 : "No ingredient"}</li>
        <li>${meal.strMeasure7 ? meal.strMeasure7 : "No ingredient"}</li>
        <li>${meal.strMeasure8 ? meal.strMeasure8 : "No ingredient"}</li>
        <li>${meal.strMeasure9 ? meal.strMeasure9 : "No ingredient"}</li>
        <li>${meal.strMeasure10 ? meal.strMeasure10 : "No ingredient"}</li>
        <li>${meal.strMeasure11 ? meal.strMeasure11 : "No ingredient"}</li>
        <li>${meal.strMeasure12 ? meal.strMeasure12 : "No ingredient"}</li>
        <li>${meal.strMeasure13 ? meal.strMeasure13 : "No ingredient"}</li>
        <li>${meal.strMeasure14 ? meal.strMeasure14 : "No ingredient"}</li>
        <li>${meal.strMeasure15 ? meal.strMeasure15 : "No ingredient"}</li>
    `;

    mealDbModalBody.appendChild(mealDbModalDiv);
  });
};

const searchMeal = () => {
  const searchField = document.getElementById("search-field");
  const searchFieldValue = searchField.value;
  loadMealDb(searchFieldValue);
};

loadMealDb("fish");
