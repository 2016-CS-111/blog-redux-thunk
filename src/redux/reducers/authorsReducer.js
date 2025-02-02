const authorsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_AUTHOR':
            return [...state, action.payload];
    
        default:
            return state;
    };
};

export default authorsReducer;