import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPage = ({ data }) => (
    <Layout>
        <Seo title="インフォメーション" />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10 mb-6">
                インフォメーション
            </div>

        {/* カードブロック */}
            {/* カード */}
            {data.allMicrocmsInformation.edges.map(({ node }) => (
                <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 rounded border border-1 border-gray-200">
                    <div class="px-4 py-2">
                        <div class="font-medium text-lg text-indigo-700 mb-2">
                            <Link to={node.informationId}>
                                {node.title}
                            </Link>
                        </div>
                        <div class="font-medium text-md text-gray-700 mb-2">
                            {node.date}{`　`}{node.category.category}
                        </div>
                        <p class="text-gray-700 text-base">
                            {node.exerpt}
                        </p>
                    </div>
                </div>
            ))}           

        </div>
    </Layout>
)

export default InformationPage


export const query = graphql`
query {
    allMicrocmsInformation (sort: {fields: [date], order: DESC}) {
      edges {
        node {
          body
          category {
            category
          }
          date(formatString: "YYYY年MM月DD日")
          informationId
          title
          exerpt
        }
      }
    }
  }
`


