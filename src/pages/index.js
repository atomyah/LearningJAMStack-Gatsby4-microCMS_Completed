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
        <div class="col-span-12 bg-green-100 text-center p-0">
          <StaticImage
            src="../images/home.jpg"
            alt=""
          />
        </div>

{/* 以下、インフォメーションブロック */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6">
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
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6 ">
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
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg ">
            <StaticImage class="w-full" src="../images/jigyo1.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">軌道上デブリ除去</div>
              <p class="text-gray-700 text-base">
              軌道上または航行導線上のデブリを安全除去します。
              </p>
            </div>
        </div>

        {/* カード2 */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg ">
            <StaticImage class="w-full" src="../images/jigyo2.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">テレポーテーションゲート解説</div>
              <p class="text-gray-700 text-base">
              テレポーテーション用のトンネルゲート開設業務を承ります。
              </p>
            </div>
        </div>

        {/* カード3 */}
        <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg ">
            <StaticImage class="w-full" src="../images/jigyo3.jpg" alt="" />
            <div class="px-4 py-2">
              <div class="font-medium text-xl text-indigo-700 mb-2">業子力学での量子コントロール</div>
              <p class="text-gray-700 text-base">
              業子力学による量子コントロール実験を進めております。
              </p>
            </div>
        </div>

    </div>

  </Layout>
)

export default IndexPage
