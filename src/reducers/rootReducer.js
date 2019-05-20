
const initState = {
    posts: [
        {id: 1, title:'jchvhsh', body: 'gsiuoshs'},
        {id: 2, title:'jchvhsh', body: 'gsiuoshs'},
        {id: 3, title:'jchvhsh', body: 'gsiuoshs'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}


export default rootReducer;