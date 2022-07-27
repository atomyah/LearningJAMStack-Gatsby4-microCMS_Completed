import * as React from "react"
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPost  = ({ data }) => (
    
    <Layout>
        <Seo title={data.microcmsInformation.title} />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                {data.microcmsInformation.title}
            </div>

        {/* 記事詳細ブロック */}
            <div class="col-start-2 col-span-10 p-3">
                <div class="w-full font-medium text-base mb-3">
                    {data.microcmsInformation.date}{` `}{data.microcmsInformation.category.category}
                </div>
                <div 
                    class="col-span-12 p-3" 
                    dangerouslySetInnerHTML={{ __html: data.microcmsInformation.body }} />
            </div>

        </div>
    </Layout>
)

export default InformationPost


export const query = graphql`
 query($id: String!) {
   microcmsInformation(informationId: { eq: $id }) {
    informationId
    title
    date(formatString: "YYYY年MM月DD日")
    body
    category {
       category
    }
   }
 }
`
