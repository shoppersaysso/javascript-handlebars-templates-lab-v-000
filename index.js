
function createRecipe() {

  var name = document.getElementById("name")
  var description = document.getElementById("description")
  var ingredients = document.getElementById("ingredients")

  var createRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var recipe = createRecipeTemplate({description: 'description', indgredients: 'ingredients'})

  var submitAction = createRecipe


  document.getElementById("recipe-template").innerHTML += newRecipe;
}

function displayEditForm() {



}

function updateRecipe() {

  var submitAction = updateRecipe
}
