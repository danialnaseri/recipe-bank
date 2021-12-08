import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const TagsList = ({ recipeArr }) => {
  // pass in argument to setupTags() func
  const newTags = setupTags(recipeArr)
  console.log(
    "tagslist comp, all tags ordered alphabetics, with number of tags",
    newTags
  )

  return (
    <div className="tags-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [label, value] = tag

          console.log('testing taglis label/text', tag)

          const slug = slugify(label, {lower: true})
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {label} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
