const mealsContainer = document.querySelector('.meals')
const btn = document.querySelector('.btn')

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'



btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(url)
  .then((response) => response.json())
  .then((data) => 
  
    {   

        console.log(data.meals[0]);
        mealsContainer.innerHTML = '';
        data.meals.forEach((meal) => {
                    const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            } else {
                break;
            }
        }
            mealsContainer.innerHTML += `
            <div class="meal">
                <div class='meal-infos'>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-img">
                    <div class="meal-info">
                        <h3 class="meal-title">${meal.strMeal}</h3>
                        <p class="meal-info">${meal.strInstructions}</p>
                    </div>
                </div>
                <p class="meal-category"><strong>Category: </strong>${meal.strCategory}</p>
                <p class="meal-area"><strong>Area: </strong>${meal.strArea}</p>
                <h3 class="meal-ingredients">Ingredients</h3>
                <ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
                <div>
                    <h3>Video</h3>
                    <iframe class="video" width="420" height="315"
                    src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                    </iframe>
                </div>
            </div>

            `
        })    
    })
})