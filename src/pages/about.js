import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

// difference between component query and page query is that in page query
// you don't need use the "useStaticQuery" hook, you simply can access to
// data properties

// destructuring right away inside func, giving an alias to nodes also
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  console.log("about page, data properties =>", recipes)

  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby sriracha lusexual messenger bago kitsch.</h2>
            <p>
              Lomo sustainable health goth wolf, street art selfies hoodie
              raclette kitsch tbh vegan snackwave helvetica austin. Artisan 3
              wolf moon sartorial twee celiac 90's offal lumbersexual vegan
              cardigan farm-to-table jean shorts chia. Gochujang gluten-free
              asymmetrical.
            </p>
            <p>
              Sriracha letterpress waistcoat, meggings retro irony single-origin
              coffee portland stumptown tumeric farm-to-table listicle. Mlkshk
              thundercats meggings, succulents pabst 90's tote bag art party
              everyday carry flexitarian unicorn austin. Marfa franzen waistcoat
              slow-carb plaid fixie poke. Tumblr mixtape air plant cloud bread
              sartorial kickstarter.{" "}
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/heros/hero-2.jpg"
            className="about-img" // adding this class to wrapper not to img
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look this Awsomesouce!</h5>
          <RecipesList recipeArr={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
