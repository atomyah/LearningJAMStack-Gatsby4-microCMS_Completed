import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const JigyoPage = () => (
    <Layout>
        <Seo title="事業内容" />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                事業内容
            </div>

        {/* カードブロック */}
            {/* カード1 */}
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 rounded overflow-hidden shadow-lg ">
                <StaticImage class="w-full" src="../images/jigyo1.jpg" alt="" />
                <div class="px-4 py-2">
                <div class="font-medium text-xl text-indigo-700 mb-2">軌道上デブリ除去</div>
                <p class="text-gray-700 text-base">
                軌道上または航行導線上のデブリを安全除去します。弊社が開発した「次元蒸発粉砕除去法」により、物質空間にデブリの残骸を残しません。
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#デブリ</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#衛星軌道</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#次元蒸発粉砕除</span>
                </div>
            </div>

            {/* カード2 */}
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 rounded overflow-hidden shadow-lg ">
                <StaticImage class="w-full" src="../images/jigyo2.jpg" alt="" />
                <div class="px-4 py-2">
                <div class="font-medium text-xl text-indigo-700 mb-2">テレポーテーションゲート解説</div>
                <p class="text-gray-700 text-base">
                テレポーテーション用のトンネルゲート開設業務を承ります。管轄当局への手続き全般もすべて弊社にお任せください。
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ゲート</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#テレポーテーション</span>
                </div>
            </div>

            {/* カード3 */}
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 rounded overflow-hidden shadow-lg ">
                <StaticImage class="w-full" src="../images/jigyo3.jpg" alt="" />
                <div class="px-4 py-2">
                <div class="font-medium text-xl text-indigo-700 mb-2">業子力学での量子コントロール</div>
                <p class="text-gray-700 text-base">
                弊社ラボでは業子力学による量子コントロール実験を科学庁からの委託され、実績をあげております。来年度の実用化を目指しております。
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#量子コントロール</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#業子力学</span>
                </div>
            </div>

        </div>
    </Layout>
)

export default JigyoPage
