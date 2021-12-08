import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

// destructuring
const Tags = ({
  data: {
    allContentfulRecipe: { nodes: tags },
  },
}) => {
  const newTags = setupTags(tags)
  console.log("tagssssssssss ", tags)

  // or destructuring right in setupTags() func
  // const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            // since tag it self is also an array, in order to access
            // those two properties you destructure it
            const [text, value] = tag

            const slug = slugify(text, {lower: true})

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
