import {messagesList} from "../../contecst/ContextMessageArr";

export  const messageReducer =(state=messagesList , action)=>{

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
                id:MessageListChatId(action.payload.idChat),
                text:action.payload.text,
                author:action.payload.author,
                idChat:Number(action.payload.idChat)};
            return {
                ...state,
                messagesList: [...state.messagesList,chatObj]
            }
        default: return state;
    }
}
