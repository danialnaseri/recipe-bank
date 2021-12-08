import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

// for generating programmatically new pages based on entring new content gos as follow:
// file should be named without "all" and start like following in curly bracets
// {ContentfulRecipe.title}.js what ever you named your contentType in contentful
// choose what should apear as your slug/url text, in this case choosing the "title" field/property

// const RecipeTemplate = props => {
//   console.log("recipe templage props", props)
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    description: { description },
    prepTime,
    servings,
    image,
  } = data.contentfulRecipe

  const pathToImage = getImage(image)
  const { tags, tools, ingredients, instructions } = content

  return (
    <Layout>
       <SEO title={title} /> 
      <main className="page">
        {/* <h1>{props.params.title}</h1> */}
        <div className="recipe">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>

              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                   const slug = slugify(tag, {lower: true})

                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of teh content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

// when it comes to query Gatsby will pass that value automatically, just make sure
// the variable name is the same in graphql, set the var.name is the same as field name in
// query section in graphql. For every page that value will be unique

export const query = graphql`
  query MyQuery($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        tags
        tools
        ingredients
        instructions
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
