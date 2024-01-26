const loadData = async (mealsName) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        displayData(data.meals.slice(0, 6));
    }
    catch (err) {
        console.log(err)
    }

}

const displayData = (meals) => {
    console.log(meals);
    const foodContainer = document.getElementById('foodContainer');
    meals.forEach((meal) => {
        const { idMeal, strMeal, strMealThumb, strCategory, } = meal;
        console.log(meal.idMeal)
        const div = document.createElement('div');
        document.getElementById('image').src = strMealThumb;
        div.innerHTML = `
            
            <div class="card card-side bg-base-100 shadow-xl border ">
            <figure class=""><img src="${strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
            </div>
            </div>
            </div>
        `;
        foodContainer.appendChild(div);

    })
}

loadData('burger');