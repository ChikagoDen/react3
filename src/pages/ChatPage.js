import React from 'react';
import {useState} from "react";
import {Box, List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ChatPage = () => {
    const chats=useSelector(state =>state.chats.chats);
    const dispatch = useDispatch();
    const [name,setName] =useState('');
    const handleDelete =(id)=>{
        dispatch({type:'delete', payload:id})
    };
    const handleAdd =(name)=>{
        dispatch({type:'add', payload:name})
    };
    return(
        <Box component="div" sx={{ border: '1px dashed grey' }}>
            <List>
                {chats.map(chat =>{
                    return(
                        <ListItem key={chat.id}>
                            <Link key={chat.id}  to={`/message/${chat.id}`}>{chat.chatName}</Link>
                            <button onClick={()=>handleDelete(chat.id)}>Удалить чат</button>
                        </ListItem>)
                })}
            </List>
            <input value={name} onChange={(e)=>setName(e.target.value)} />

            <button onClick={()=>handleAdd(name)}>Добавить чат</button>
        </Box>
    )
};

export default ChatPage;
