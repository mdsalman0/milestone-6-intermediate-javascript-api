const searchFood =async () => {
    const searchFood = document.getElementById('search-field');
    const searchText = searchFood.value;
    // clear data
    searchFood.value = '';
    if(searchText == ''){
      console.log('please');
    }
    else{
      // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;

   try{
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);
   }
   catch(error){
     console.log(error);
   }

    // fetch(url)
    // .then(res => res.json())
    // .then(data=> displaySearchResult(data.meals))
    }
    
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length == 0){
      console.log('plase no');
    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div onclick='losdMealDetails("${meal.idMeal}")' class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div)
    });
}

const losdMealDetails = async mealId => {
  console.log(mealId);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('crad');
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
              <a href="#"${meal.strYoutube}">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div)
}