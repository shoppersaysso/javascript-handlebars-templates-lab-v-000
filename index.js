
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {

  var name = document.getElementById("name")
  var description = document.getElementById("description")
  var ingredients = document.getElementById("ingredients")

  var createRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var recipe = createRecipeTemplate({name: 'name', description: 'description', indgredients: 'ingredients'})

  var submitAction = createRecipe


  document.getElementById("recipe-template").innerHTML += newRecipe;
}


function displayEditForm() {



}

function updateRecipe() {

  var submitAction = updateRecipe
}
