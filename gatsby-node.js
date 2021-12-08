// since it's node, do require here instead of import as we do in react
const path = require("path")
const slugify = require("slugify") // slugify those with two words

// node file and node syntax ruls
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // graphql in prants in node
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  // get this log in vscode terminal
  console.log("#################")
  console.log("gatsby node recipes => ", result)
  console.log("#################")

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {

      const tagSlug = slugify(tag, { lower: true })

      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
