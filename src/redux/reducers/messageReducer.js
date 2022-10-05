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


export  const messageReducer =(state=initialState , action)=>{


    const objektPayload=action.payload===undefined?0:action.payload;

    const MessageListChat =(idChat)=>{
        const MessageChat = state.messagesList.filter((mes)=>mes.idChat===Number(idChat));
        return MessageChat;
    }

    const MessageListChatId =(idChat)=>{
        const MessageChat = MessageListChat(idChat) ;
        const s=new Object(MessageChat[MessageChat.length-1]);
        return Number(s.id+1);
    }

    switch (action.type) {
        case 'addMessage':
            const chatObj= {
                id:MessageListChatId(objektPayload.idChat),
                text:objektPayload.text,
                author:objektPayload.author,
                idChat:Number(objektPayload.idChat)};
            return {
                ...state,
                messagesList: [...state.messagesList,chatObj]
            }
        default: return state;
    }
}
