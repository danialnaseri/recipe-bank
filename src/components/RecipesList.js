import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

// setting an empty array as default value in case if
// recipes not provided, in order to prevent/avoid unnecessary errors
const RecipesList = ({ recipeArr = [] }) => {
  return (
    <div className="recipes-list">
      {recipeArr.map(recipe => {
        console.log("list of recipes", recipe)

        const { id, title, image, prepTime, cookTime } = recipe
        
        // helper func to get the image from parent comp "image"
        const pathToImage = getImage(image) 

        // slugifying title and setting the text to lowercase
        const slug = slugify(title, { lower: true })

        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              //   image={image.gatsbyImageData}
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
