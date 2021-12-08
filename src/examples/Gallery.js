import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" // dynamic query of data not static
import styled from "styled-components"

// in this case the image is in recipes directory and must
// down to the image object which is "childImageSharp"
const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "recipes" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 200
            height: 200
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  console.log("gallery dynamic data/queries", data)

  // get nodes from graphql query, stored into variable
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {/* iterate over the nodes and get image data */}
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image) // helper func getImage()

        return (
          <article key={index} className="item">
            <GatsbyImage
              //   image={image.childImageSharp.gatsbyImageData}

              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}

      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
