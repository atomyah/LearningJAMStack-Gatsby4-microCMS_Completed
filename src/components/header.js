import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
    <header>
        <nav class="flex items-center justify-between flex-wrap bg-gray-200 p-6">
            <div class="flex items-center flex-shrink-0 mr-6">
                <Link to="/" class="text-gray-700 hover:text-gray-400">
                    <span class="font-medium text-xl tracking-tight">ヤー・スペーステクノロジー</span>
                </Link>
            </div>

            <div class="w-full block flex-grow md:flex lg:items-center lg:w-auto">
                <div class="text-lg md:flex-grow lg:flex-grow">
                    <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                        <Link to="/about" class="text-gray-700 hover:text-gray-400">会社概要</Link>
                    </div>
                    <div class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
                        <Link to="/jigyo" class="text-gray-700 hover:text-gray-400">事業内容</Link>
                    </div>
                    <div class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
                         <Link to="/information" class="text-gray-700 hover:text-gray-400">インフォメーション</Link>
                    </div>
                    <div class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">    
                        <Link to="/form" class="text-gray-700 hover:text-gray-400">お問い合わせ</Link>
                    </div>
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
  
  export default Header