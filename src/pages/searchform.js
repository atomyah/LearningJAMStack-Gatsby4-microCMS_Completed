import * as React from "react"
import axios from "axios";
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function SearchForm() {
    const [keyword, setKeyword] = React.useState("");
    const [infos, setInfos] = React.useState([]);
    const [action, setAction] = React.useState(false)
  
    const searchInfos = async () => {
      // 検索APIにリクエストを送信
      const res = await axios.get("/api/search", {
        params: {
          keyword,
        },
      });
      // 検索結果をステート変数にセット
      setInfos(res.data.contents);

      // 検索を実行した場合actionフラッグをtrueに
      setAction(true)
      //console.log('◆res.data.contents')
      //console.log(res.data.contents)
    };
  
    return (
      <Layout>
          {/* コンテナ */}
          <div class="container w-full grid grid-cols-12 mx-auto gap-2">

          {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                検索ページ
            </div>
            
          {/* 検索フォームブロック */}
            <div class="flex flex-col col-span-12 items-center">
                <div class="relative w-full sm:w-full md:w-1/2 lg:w-1/3 mt-5">
                    <input type="text"
                           value={keyword}
                           onChange={(e) => setKeyword(e.target.value)}
                           class="
                            block p-2 pl-2 w-full text-md 
                            text-gray-900 bg-gray-50 rounded-lg 
                            border border-gray-300 
                            focus:ring-blue-500 focus:border-blue-500
                           "
                    />
                    <button onClick={searchInfos} 
                            disabled={!keyword}
                            class="
                            text-white absolute right-2.5 bottom-1 
                            bg-blue-700 
                            hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-medium rounded-lg 
                            text-sm 
                            px-4 py-1.5
                            "
                    >検索</button>
                </div>
            </div>

            {/* 検索結果ブロック */}          
            {((infos.length > 0 && action == true) || (action == false)) ? 
                infos.map((info) => (
                <div class="col-start-2 col-span-10 p-3 w-full">
                    <hr />
                    <section class="text-gray-600 body-font">             
                        <div class="flex-grow sm:text-left text-center items-center justify-center mt-6 sm:mt-0">
                            <Link to={`/information/${info.id}`}>                         
                                <h1 class="text-black text-xl font-bold mb-2">{info.title}</h1>
                            </Link>
                            <p>{(info.date).substring(0,10)}</p>
                            <p>{info.exerpt}</p>
                            <Link to={`/information/${info.id}`}>   
                                <a class="mt-0 text-indigo-500 inline-flex items-center">全文を読む
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </section>
                </div>
            )) : (<p class="col-span-12 m-5 w-full">検索結果はありませんでした</p>)
            }
     
        </div>
      </Layout>
    );
}