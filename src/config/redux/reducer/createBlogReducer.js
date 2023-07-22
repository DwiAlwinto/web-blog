const initialState = {
    form : {
        title : '',
        body : '',
        image : '',
        
    },
    imgPreview : null
}

const createBlogReducer = ( state = initialState, action) => {
        if(action.type === 'SET_FORM_DATA') {
            return {
                ...state,
                form: {
                    ...state.form, //kita copy form lamanya
                    [action.formType] : action.formValue //lalu di ubah
                }
            }
        }
        if(action.type === 'SET_IMG_PREVIEW') {
            return {
                ...state,
                imgPreview: action.payload
            }
        }

    return state;
}

export default createBlogReducer;