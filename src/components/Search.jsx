import React from 'react'
import '../styles/Search.css'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className="search">
        <BiSearch />
        <input type="text" placeholder='Search ...' autoFocus />
    </div>
  )
}

export default Search