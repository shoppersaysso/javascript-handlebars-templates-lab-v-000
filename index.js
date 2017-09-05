function createRecipe() {

  var description = 'yummy chicken noodle soup'
  var ingredients = [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]

  var createRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var newRecipe = createRecipeTemplate({description: 'description', indgredients: 'ingredients'})

  var submitAction = createRecipe


  document.getElementById("recipe-template").innerHTML += newRecipe;
}

function displayEditForm() {



}

function updateRecipe() {

  var submitAction = updateRecipe
}
