import React from 'react';
import {useState} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import {useParams} from "react-router-dom";

const ChatFiltrAuthor = () => {
    const [messagesList, setMessagesList] = useState([
        { text: 'eeeeeeeee', author: 'qwer', id:1, idChat:1},
        { text: 'tttttttttt', author: 'asd', id:1, idChat:2},
        { text: 'vvvvvvvvvvvvv', author: 'cvb', id:2, idChat:1},
        { text: 'bbbbbbbbbbb', author: 'qwer', id:3, idChat:1},
        { text: 'nnnnnnnnn', author: 'asd', id:1, idChat:3},
        { text: 'dddddddd', author: 'cvb', id:2, idChat:2},
    ]);

    const {idChat,author}=useParams();

    const MessageListChatAuthor =(idChat)=>{
        const MessageChat =messagesList.filter((messagesList)=>messagesList.idChat===idChat&&messagesList.author===author);
        return MessageChat;
    }

    return(
        <Box component="div" sx={{ border: '1px dashed grey' }}>
            <Grid  container spacing={3}>
                <Grid  item xs={4}>
                    Название чата:{idChat}

                </Grid>
                <Grid item xs={4}>
                    <List>
                        {MessageListChatAuthor(Number(idChat)).map(message =>{
                            return(
                                <ListItem key={message.id}>
                                    <ListItemText primary={"Сообщение:"+message.text} secondary={"Автор:"+message.author}></ListItemText>
                                </ListItem>)
                        })}
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
};

export default ChatFiltrAuthor;