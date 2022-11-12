import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

type SearchProps ={
    placeholder : string
}

export const Search : React.FC<SearchProps> = (props) => {
    const { placeholder}= props

    return(<Text>{placeholder}</Text>)
}