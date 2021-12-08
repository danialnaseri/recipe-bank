import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  console.log("contact page, data properties =>", recipes)

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby four dollar toast photo booth swag fingerstache, kitsch
              ramps cornhole XOXO seitan iPhone kinfolk hella disrupt. YOLO
              succulents cred, gochujang jean shorts fashion axe unicorn swag
              photo booth lo-fi pug you probably haven't heard of them.
            </p>
            <p>
              Microdosing organic pabst fixie vegan DIY mumblecore bushwick.
              Keytar umami flexitarian banh mi single-origin coffee fam palo
              santo fixie wayfarers. Pug banjo raw denim
            </p>
            <p>
              Mumblecore gentrify put a bird on it, austin shabby chic portland
              sartorial edison bulb. Fam thundercats celiac keytar distillery
              jianbing, before they sold out wayfarers. Copper mug four dollar
              toast offal, letterpress meditation austin cray franzen ethical
              retro next level. Street art drinking vinegar cold-pressed
              leggings, green juice adaptogen asymmetrical meh cha
            </p>
          </article>
          <article>
            {/* connecting to form library "Fomrspree", then get the action link and method "post" */}
            <form
              className="form contact-form"
              action="https://formspree.io/f/xnqwqqob"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact
