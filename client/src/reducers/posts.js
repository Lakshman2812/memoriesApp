const reducers=(posts=[],action)=>{
    switch(action.type)
    {
        
        case 'FETCH_ALL':
            return action.payload;
            // return;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post)=>post._id===action.payload._id? action.payload: post);
        default:
            return posts
    }
}
export default reducers;