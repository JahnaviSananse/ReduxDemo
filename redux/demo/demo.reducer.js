
const INITIAL_STATE={
    currentItem:'Yash Sanghavi',
};

const DemoReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ADD_VALUE':
            return{
                ...state,
                currentItem:action.payload
            };
        default:
            return state;
    }
};

export default DemoReducer;

