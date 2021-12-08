import React from "react"

const setupTags = recipes => {
  // create an empty arr
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // if in tags/allTags exist tag then increment with 1 for each iteration time
      // if not then just equal that particular tag to 1
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
    console.log("testing func ", allTags)
  })

  // method Object.entries() convert the object to an arr of its items. like: ['dinner', 3]
  // sort() in order to iterate over the arr and to access the items from it

  const newTags = Object.entries(allTags).sort((a, b) => {
    // since you want to acces the string not the value: number
    // thus arr destructuring
    const [firstTag] = a // string
    const [secondTag] = b // value: number

    console.log("first tag", firstTag)
    console.log("second tag", secondTag)

    // localeCompare() compare strings based on their text: alphabetics order
    return firstTag.localeCompare(secondTag)
  })

  console.log("object entries =>", newTags)

  return newTags
}

export default setupTags
