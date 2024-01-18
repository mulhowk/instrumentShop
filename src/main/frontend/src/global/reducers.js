const initialState = {
    memberInfo : {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MEMBER_INFO' :
            return {
                ...state,
                memberInfo :action.payload
            };

        default :
            return state;
    }
};

export default rootReducer;