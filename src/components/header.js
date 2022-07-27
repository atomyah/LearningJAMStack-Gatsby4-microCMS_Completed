import * as React from "react"
import axios from "axios";
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { useSearchContext } from '../context/SearchContext'

const Header = ({ siteTitle }) => {
    const [keyword, setKeyword] = React.useState("");

    // useSearchContextを使用してステート変数をセット.
    // ステート変数がinfos一つしかなければ以下の書き方でよい.
    // const { infos, setInfos } = useSearchContext([])
    const { infos, action } = useSearchContext([])
    const [infosValue, setinfosValue] = infos
    const [actionValue, setactionValue] = action

    const searchInfos = async () => {
        // 検索APIにリクエストを送信
        const res = await axios.get("/api/search", {
          params: {
            keyword,
          },
        });
        // 検索結果をステート変数にセット
        setinfosValue(res.data.contents);
  
        // 検索を実行した場合actionフラッグをtrueに
        setactionValue(true)
        //console.log('◆res.data.contents')
        //console.log(res.data.contents)

        navigate('/searchresultPage');
      };

    return (
        <header class="max-w-5xl mx-auto">

            <Helmet>
                <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
            </Helmet>

        {/* ナビゲーションバー */}
        <nav class="border-gray-200 bg-gray-200 px-2 mb-5">
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <Link to="/" class="flex">
                        <StaticImage class="ml-1 my-2" width="80" src="../images/logo_small.png" placeholder="blurred" alt="" />
                    </Link>
                    
                    <div class="flex md:order-2">
                        {/* 検索フォームブロック */}
                        <div class="relative mr-3 mt-0 md:mr-0 md:block">
                            {/* 虫眼鏡アイコン */}
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            {/* テキストボックス */}
                            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
                            {/* 検索ボタン */}
                            <button onClick={searchInfos} disabled={!keyword} class="text-white absolute right-2.5 bottom-1 bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1"
                            >検索</button>
                        </div>
                        {/* ハンバーガー */}
                        <button data-collapse-toggle="mobile-menu-3" type="button" class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    {/* メニュー */}
                    <div class="hidden md:flex justify-between mt-9 items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                        <ul class="flex-col md:flex-row flex md:space-x-4 lg:space-x-9 mt-4 md:mt-0 md:text-sm md:font-small">
                                <li>
                                    <Link to="/about" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0">会社概要</Link>
                                </li>
                                <li>
                                    <Link to="/jigyo" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0">事業内容</Link>
                                </li>
                                <li>
                                    <Link to="/information" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0">インフォメーション</Link>
                                </li>
                                <li>
                                    <Link to="/form" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0">お問い合わせ</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                </nav>

        </header>
    )

    Header.propTypes = {
    siteTitle: PropTypes.string,
    }

    Header.defaultProps = {
    siteTitle: ``,
    }

}

export default Header
