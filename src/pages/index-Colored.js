import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

{/* コンテナ */}
    <div class="container w-full grid grid-cols-12 mx-auto gap-2">

{/* トップ画像ブロック */}        
        <div class="col-span-12 bg-green-100 text-center p-0 border-solid border-4 border-red-400">
          <StaticImage
            src="../images/960x360.jpg"
            alt=""
          />
        </div>

{/* 以下、インフォメーションブロック */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6 border-solid border-4 border-red-400">
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-indigo-400 font-medium text-white p-1 h-10">
              インフォメーション
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              インフォメーション①
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              インフォメーション②
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              インフォメーション③
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              インフォメーション④
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              インフォメーション⑤
            </div>
        </div>

{/* 以下、IR情報ブロック */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6 border-solid border-4 border-red-400">
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-indigo-400 font-medium text-white p-1 h-10">
              IR情報
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              IR情報
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              社長ブログ
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              広告スペース
            </div>
            <div class="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
              広告スペース
            </div>
        </div>

{/* 以下、カードブロック */}
        {/* カード1 */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
            <StaticImage class="w-full" src="../images/286x180.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">事業内容①</div>
              <p class="text-gray-700 text-base">
              記事は出典裁判が承諾するprojectでた以外、引用するれ方針が対話物フリーの参照タイトルにありれてはありない。
              </p>
            </div>
        </div>

        {/* カード2 */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
            <StaticImage class="w-full" src="../images/286x180.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">事業内容②</div>
              <p class="text-gray-700 text-base">
              記事は出典裁判が承諾するprojectでた以外、引用するれ方針が対話物フリーの参照タイトルにありれてはありない。
              </p>
            </div>
        </div>

        {/* カード3 */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
            <StaticImage class="w-full" src="../images/286x180.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">事業内容③</div>
              <p class="text-gray-700 text-base">
              記事は出典裁判が承諾するprojectでた以外、引用するれ方針が対話物フリーの参照タイトルにありれてはありない。
              </p>
            </div>
        </div>

    </div>

  </Layout>
)

export default IndexPage
