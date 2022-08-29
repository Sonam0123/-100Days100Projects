const mealsContainer = document.querySelector('.meals')
const btn = document.querySelector('.btn')

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'



btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(url)
  .then((response) => response.json())
  .then((data) => 
    {   
        mealsContainer.innerHTML = '';
        data.meals.forEach((meal) => {
            mealsContainer.innerHTML += `
            <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-img">
                <h3 class="meal-title">${meal.strMeal}</h3>
            </div>
            `
        })    
    })
})