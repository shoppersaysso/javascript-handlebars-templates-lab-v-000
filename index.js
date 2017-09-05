// function initForm() {
//
//   var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
//   document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
// }

function recipeInfo() {
  var ingredientsList = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsList.length;i++) {
    if(ingredientsList[i].value !== "") {
    ingredients.push(ingredientsList[i].value)
    }
  }

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, description, ingredients}
  return(recipe)
}

function createRecipe() {
  var recipe = recipeInfo()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)

  document.getElementById("main").innerHTML += template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsList = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i = 0; i < ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].innerText)
  }

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  document.getElementById("main").innerHTML = template(recipe)
  }

function updateRecipe() {
  var recipe = recipeInfo()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)

  document.getElementById("main").innerHTML += template(recipe)
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  // initForm()
  document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
}
