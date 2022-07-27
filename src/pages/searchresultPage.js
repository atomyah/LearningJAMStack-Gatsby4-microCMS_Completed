import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchResult from "../components/searchresult"

const SearchResultPage = () => (
    <Layout>
        <Seo title="検索結果" />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

            {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                    検索結果
            </div>

            {/* 検索結果コンポーネント */}
            <SearchResult />

        </div>

    </Layout>

)

export default SearchResultPage