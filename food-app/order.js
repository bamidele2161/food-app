
const firebaseConfig = {
    apiKey: "AIzaSyBYwxYb2JcEnsFlN023OWZ965mwWKRPHCs",
    authDomain: "food-app-e7bb8.firebaseapp.com",
    projectId: "food-app-e7bb8",
    storageBucket: "food-app-e7bb8.appspot.com",
    messagingSenderId: "145868232394",
    appId: "1:145868232394:web:c2bd5d46a796e9d60d0633"
  };

  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth);

let signOutButton = document.getElementById("signout-btn")
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked")
  auth.signOut()
  alert("Signed Out")
    window.location = '../index.html'
})


const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener("click", getMealList);
recipeCloseBtn.addEventListener('click', ()=> {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


//get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response=> response.json())
    .then(data=>{
        let html = '';
        if(data.meals){
            data.meals.forEach(meal =>{
                console.log(meal)
                html += `
                   
                    <div class="meal-card">
                            <img src="${meal.strMealThumb}"
                            alt="food">
                            <p class="meal-p">${meal.strMeal}</p>
                            <a href="${meal.strYoutube}" class=
                            "recipe-btn">Get Recipe</a>
                    </div>
                
                `;
            });
            mealList.classList.remove('notFound');
        }else{
            html="sorry, we didn't find any meal"
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}



mealList.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('recipe-btn')) {
        alert('Thanks, call this 07000000000');

    }
});

modal


