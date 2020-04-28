import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

export const productStore = createSlice({
  name: 'productStore',
  initialState: {
    products: []
  },
})
reducers: {
  setProduct: (state, action) => {
    state.products = action.payload
  }
}



 export const fetchProduct = (code) => {
  return (dispatch) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProduct(json))
        console.log(json)
      })

  }
}
