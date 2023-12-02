import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const fetchrestaurant = createAsyncThunk('restaurantList/fetchrestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log("result ", result);
    return result
})
export const fetchRestaurantDetails = createAsyncThunk('restaurantList/fetchRestaurantDetails', async (id)=>{
    const result = await axios.get('/restaurant.json').then(response=>response.data.restaurants);
    const details = result?.find(i=>(Number(i?.id)===Number(id)));
    return details;
})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false,                      //pending state of promise concept
        allrestaurant:[],  
        searchRestaurant:[],                   //resolve state output
        error:"",                           //reject state
        restaurantDetails: {}
    },

    extraReducers:(bulider)=>{
        bulider.addCase(fetchrestaurant.pending,(state)=>{
            state.loading = true
        })
        bulider.addCase(fetchrestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allrestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error =""
        })

        bulider.addCase(fetchrestaurant.rejected,(state,action)=>{
            state.loading = false
            state.allrestaurant=""
            state.error = action.error.message
        })
        bulider.addCase(fetchRestaurantDetails.fulfilled,(state,action)=>{
            state.restaurantDetails = action.payload
        })
    } ,
    reducers :{
        search:(state,action)=>{
          state.allrestaurant = state.searchRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }                     //builder holds the values or response from thunk
                           // addcase is a method of builder .state can update only by using addcase
})

export const {search} = restaurantSlice.actions

export default restaurantSlice.reducer