
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function recipeInfo() {
  var ingredientsList = document.getElementByName("ingredients")
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

  document.getElementById("main").innerHTML += template(recipe);
}


function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("description").innerText
  var ingredientsList = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i = 0; i < ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].value)
  }


}

function updateRecipe() {

  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'editRecipe()'})
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
