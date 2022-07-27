import * as React from "react"
import { Link, graphql } from "gatsby"
import { useSearchContext, SearchContextProvider} from '../context/SearchContext'

const SearchResult = () => {
    const { infos, action } = useSearchContext([])
    const [infosValue, setinfosValue] = infos
    const [actionValue, setactionValue] = action

    //console.log('◆SearchResultの中のinfosValue')
    //console.log(infosValue)
    //console.log('◆SearchResultの中のactionValue')
    //console.log(actionValue)

    return (
        <SearchContextProvider>
            {/* グローバルステート変数を表示させて確認
                <p class="col-start-2 col-span-10 p-3 w-full">{JSON.stringify(infosValue)}</p>
                <br />
                <p class="col-start-2 col-span-10 p-3 w-full">{actionValue.toString()}</p>
            */}
            
               {((infosValue.length > 0 && actionValue == true) || (actionValue == false)) ? 
                infosValue.map((infoValue) => (
                <div class="col-start-2 col-span-10 p-3 w-full">
                    <hr />
                    <section class="text-gray-600 body-font">             
                        <div class="flex-grow sm:text-left text-center items-center justify-center mt-6 sm:mt-0">
                            <Link to={`/information/${infoValue.id}`}>                         
                                <h1 class="text-black text-xl font-bold mb-2">{infoValue.title}</h1>
                            </Link>
                            <p>{(infoValue.date).substring(0,10)}</p>
                            <p>{infoValue.exerpt}</p>
                            <Link to={`/information/${infoValue.id}`}>   
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
        
        
        </SearchContextProvider>
    )

}

export default SearchResult