import React from 'react';
import {useState} from "react";
import {Box, List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";


const ChatPage = () => {
    const [chatList,setChatList] = useState([
        { id:'1',chatName:"Чат1"},
        { id:'2',chatName:"Чат2"},
        { id:'3',chatName:"Чат3"},
    ]);
    const [name,setName] =useState('');


    const handleDelete =(id)=>{
        const  filtered=chatList.filter((chatList)=>chatList.id !== id);
        setChatList(filtered);
    };
    const handleAdd = ()=>{
        const chatObj ={
            chatName:name,
            id:chatList.length<=0?0:chatList[chatList.length-1].id+1,
        }
        setChatList(prevState => [...prevState,chatObj]);
    }
    return(
        <Box component="div" sx={{ border: '1px dashed grey' }}>
            <List>
                {chatList.map(chat =>{
                    return(
                        <ListItem key={chat.id}>
                            <Link key={chat.id}  to={`/message/${chat.id}`}>{chat.chatName}</Link>
                            <button onClick={()=>handleDelete(chat.id)}>Удалить чат</button>
                        </ListItem>)
                })}
            </List>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleAdd}>Добавить чат</button>
        </Box>
    )
};

export default ChatPage;
