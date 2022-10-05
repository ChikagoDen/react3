import {messagesList} from "../../contecst/ContextMessageArr";

const initialState  = {
    messagesList: [
        {text: 'eeeeeeeee', author: 'qwer', id: 1, idChat: 1},
        {text: 'tttttttttt', author: 'asd', id: 1, idChat: 2},
        {text: 'vvvvvvvvvvvvv', author: 'cvb', id: 2, idChat: 1},
        {text: 'bbbbbbbbbbb', author: 'qwer', id: 3, idChat: 1},
        {text: 'nnnnnnnnn', author: 'asd', id: 1, idChat: 3},
        {text: 'dddddddd', author: 'cvb', id: 2, idChat: 2},]
};


export  const messageReducer =(state = initialState, action)=>{
    const aa=action.payload===undefined?0:action.payload;
 // const aa=new Object(action.payload) ;

    console.log(aa);
    const MessageListChat =(idChat)=>{
        const MessageChat = state.messagesList.filter((mes)=>mes.idChat===Number(idChat));
        return MessageChat;
    }
    // console.log(MessageListChat(aa.idChat));
    const MessageListChatId =(idChat)=>{
        const MessageChat = MessageListChat(idChat) ;
        const s=new Object(MessageChat[MessageChat.length-1]);
        return s.id+1;
    }
    // console.log(MessageListChatId(aa.idChat));
    // const chatObj1= { id:MessageListChatId(aa.idChat),
    //     text:aa.text,
    //     author:aa.author,
    //     chatName:aa.idChat};
    // console.log(chatObj1);
    // console.log(state.messagesList.filter((mes)=>mes.idChat===Number(aa.idChat)));
    // console.log(aa.idChat);
    switch (action.type) {
        // case 'sortAuthorIdChat':
        //     const answer=MessageListChat(aa.idChat);
        //     return { answer}
        // case 'addMessage':
        //
        //     const chatObj= {
        //         id:5,
        //         text:"5",
        //         author:"aa.author",
        //         chatName:1};
        //     return {
        //         ...state,
        //         messagesList: [...state.messagesList,chatObj]
        //     }
        default: return state;
    }
}
