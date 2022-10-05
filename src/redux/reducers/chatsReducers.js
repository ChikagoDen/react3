const initialState2 = {chats:[
        { id:1,chatName:"Чат1"},
        { id:2,chatName:"Чат2"},
        { id:3,chatName:"Чат3"},
    ]};
export  const chatsReducer =(state = initialState2, action)=>{
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat)=>chat.id!==action.payload)
            }
        case 'add':
            const chatObj= { id:state.chats.length<=0?0:state.chats[state.chats.length-1].id+1,
                chatName:(action.payload)};
            return {
                ...state,
                chats: [...state.chats,chatObj]
            }
        default: return state;
    }
}