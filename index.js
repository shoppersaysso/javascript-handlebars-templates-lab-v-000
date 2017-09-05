
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function recipeInfo() {
  var ingredientList = document.getElementByName("ingredients")
  var ingredients = []
  for(var i = 0; i < ingredientsList.length; i++) {
    if(ingredientsList[i].value !== "")
    ingredients.push(ingredientsList[i].value)
  }
}

function createRecipe() {
  var recipe = recipeInfo()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)


  document.getElementById("main").innerHTML += newRecipe;
}


function displayEditForm() {



}

function updateRecipe() {

  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'editRecipe()'})
}
