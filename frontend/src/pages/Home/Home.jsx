import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import APPDownload from '../../components/AppDownload/APPDownload'

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu categoty={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <APPDownload />
    </div>
  )
}

export default Home