import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="会社概要" />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                会社概要
            </div>

        {/* テーブルブロック */}
            <div class="col-span-12 p-3">
                <table class="table-auto w-full">
                    <tbody>
                        <tr>
                        <td class="border px-4 py-2">社名</td>
                        <td class="border px-4 py-2">ヤー・スペーステクノロジー合同会社</td>
                        </tr>
                        <tr class="bg-gray-200">
                        <td class="border px-4 py-2">本社</td>
                        <td class="border px-4 py-2">123 Nirvana St. San Francisco, CA, USA 94103</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">設立</td>
                        <td class="border px-4 py-2">2123年1月2日</td>
                        </tr>
                        <tr class="bg-gray-200">
                        <td class="border px-4 py-2">資本金</td>
                        <td class="border px-4 py-2">$200,000</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">代表者</td>
                        <td class="border px-4 py-2">ヤー アトム</td>
                        </tr>
                        <tr class="bg-gray-200">
                        <td class="border px-4 py-2">従業員</td>
                        <td class="border px-4 py-2">33名</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">売上高</td>
                        <td class="border px-4 py-2">$4,111,950（2131年12月決算）</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </Layout>
)

export default AboutPage
