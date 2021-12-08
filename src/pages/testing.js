import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Gallery from "../examples/Gallery"

// destructuring the props and setting propname which is "data"
const Testing = ({ data }) => {
  // could log out the props if we didn't destructured and set props above
  // console.log(props)

  // const author = data.site.info.author

  return (
    <Layout>
       <SEO title="Testing" />
      {/* <h1>Testing</h1> */}
      {/* <h2>author is: {author} </h2> */}
      
      <main className="page">
      <Gallery />
      </main>
    </Layout>
  )
}

// naming of query should be unique in different components
// export const data = graphql`

//   query SecondQuery { 0171627700
//     site {
//       info: siteMetadata {
//         description
//         person {
//           age
//           name
//         }
//         simpleData
//         title
//         author
//         complexData {
//           age
//         }
//       }
//     }
//   }
// `

export default Testing
