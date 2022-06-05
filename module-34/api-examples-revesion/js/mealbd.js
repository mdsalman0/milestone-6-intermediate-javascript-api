const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value ='';
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data => displaySearchResult(data.meals))

}

const displaySearchResult = (meals) => {
    const searchFood =document.getElementById('search-food');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadmealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        `;
        searchFood.appendChild(div)
    });
}

const loadmealDetails= (mealId) =>{
    console.log(mealId);
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('crad');
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
    `;
    mealDetails.appendChild(div)
}