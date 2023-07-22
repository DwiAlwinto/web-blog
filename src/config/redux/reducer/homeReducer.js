
//Combine Reducer(menggunakan reducer lebih dari satu)
const intialStateHome = {
    dataBlog: [],
    //ini untuk next dan previous
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

const homeReducer = (state = intialStateHome, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state, //copy semua data state ya
            dataBlog: action.payload //data blog kita ubah(PAYLOAD value yang diguanakan untuk merubah data ya)
        }
    }   

    //logic untuk  page
    if(action.type === 'UPDATE_PAGE') {
        return {
            ...state, //stateta lama kita copy
            page: action.payload
        }
    }

    return state;
}

export default homeReducer;
