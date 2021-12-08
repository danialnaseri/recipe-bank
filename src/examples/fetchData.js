import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// destructuring of siteMetadata: setting info as alias
// for setting name for query: using keyword "query" and queryname "FirstQuery"
const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        description
        person {
          age
          name
        }
        simpleData
        title
        author
        complexData {
          age
        }
      }
    }
  }
`

const FetchData = () => {
  // console.log(useStaticQuery(getData))
  const data = useStaticQuery(getData)
  // or destructure
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Hello from fetch data</h1>
      <h1>site name is: {title}</h1>
      <h2>
        <span> Name: {data.site.info.person.name} </span>
        <span>Age: {data.site.info.person.age}</span>
      </h2>
    </div>
  )
}

export default FetchData
