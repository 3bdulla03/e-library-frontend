import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"



const BookDetails = ({data}) => {

    getBookDetails()

    return(
        <>
        <h1></h1>
        </>
    )
}

export default BookDetails
