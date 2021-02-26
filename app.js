function searchMeal(){
    const search = document.getElementById("search-field").value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
    
}

function displayMeal(meals){
    const mealContainer = document.getElementById("meal-container")
    mealContainer.innerText = "" 
    meals.forEach(meal =>{
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.className ='meal'
        mealDiv.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <p>${meal.idMeal}
        
        <button onclick="displayCountryDetail('${meal.idMeal}')">detail</button>
        `
        mealContainer.appendChild(mealDiv)
    })
}

function displayCountryDetail(artist){
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${artist}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealInfo(data.meals))
}

function displayMealInfo(title){
 const mealsDiv = document.getElementById("meal-details")
 mealsDiv.innerHTML = `
        
         <p>${title[0].strMeal}</P>
         <p>${title[0].strCategory}</p>
         <h3>${title[0].strIngredient2}
 
 `
}