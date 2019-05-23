// import console = require("console");

const getAllRecipes = () => (
  fetch('http://www.recipepuppy.com/api/')
    .then(response =>
      response.json()
        .then(responseJson => {
          alert(responseJson)
        })
        .catch(err => console.log(err))
    )
)

const getOneRecipe = (ingredient, type) => (
  fetch(`http://www.recipepuppy.com/api/?i=${ingredient}&q=${type}`)
    .then(response =>
      response.json()
        .then(responseJson => {
          alert(responseJson)
        })
        .catch(err => console.log(err))
    )
)

export default getAllRecipes