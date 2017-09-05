function init() {
  var recipe = {
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {

  var description = document.getElementById("description")
  var ingredients = [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]

  var createRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var newRecipe = createRecipeTemplate({description: 'description', indgredients: 'ingredients'})

  document.getElementById("recipe-form").innerHTML += newRecipe;
}

function displayEditForm() {

}

function updateRecipe() {

}
