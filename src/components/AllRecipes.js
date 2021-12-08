import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const recipeQuery = graphql`
  query RecipeProperties {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const data = useStaticQuery(recipeQuery)
  // console.log("All recipes data query =>", data)
  //   const recipes = data.allContentfulRecipe.nodes
  //   console.log("All recipes query =>", recipes)

  // or could destructure it and point to the nodes, and define an alias for nodes
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(recipeQuery)

  console.log("all recipes =>", recipes)

  return (
    <section className="recipes-container">
      <TagsList recipeArr={recipes} />
      <RecipesList recipeArr={recipes} />
    </section>
  )
}

export default AllRecipes
