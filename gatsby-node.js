// 「5.1.3 インフォメーション詳細ページの作成」
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
 
  return graphql(
    `
      {
        allMicrocmsInformation {
          edges {
            node {
              informationId
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsInformation.edges.forEach( edge => {
        createPage({
          path: `/information/${edge.node.informationId}`,
          component: path.resolve(`./src/templates/info-post.js`),
          context: {
            id: edge.node.informationId
          },
          defer: false,
        })
    })
  })
}
