import React, {useContext} from 'react';
import {useState} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {messagesListContext} from "../contecst/ContextMessageArr";


const Message = () => {
    const {messagesListArr,funcMessagesList} = useContext(messagesListContext);
    const [messagesList, setMessagesList] = useState(messagesListArr);
    let [form, setForm] = useState({
        text: '',
        author: '',
        id:null,
        idChat:null
    });
    const {idChat}=useParams();

    const MessageListChat =(idChat)=>{
        const MessageChat =messagesList.filter((messagesList)=>messagesList.idChat===idChat);
        return MessageChat;
    }
    const MessageListChatId =(idChat)=>{
        const MessageChat =MessageListChat(Number(idChat));
        const id= MessageChat[MessageChat.length-1].id+1;
        return Number(id);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setMessagesList(prevState => [...prevState,{
            id:MessageListChatId(idChat),
            text:form.text,
            author:form.author,
            idChat:Number(idChat) ,
        }]);
        setForm({
            text:'',
            author:'',
        });
    };
    const handleUpdateInput = e => {
        setForm({...form,[e.target.name]: e.target.value});
    };
    return(
        <Box component="div" sx={{ border: '1px dashed grey' }}>
            <FormGroup>
                <Box component="label" sx={{ padding: '15px' }}>
                    Текст:
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите текст"  autoFocus={true}    value={form.text} name="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Box component="label" sx={{ padding: '15px' }}>
                    Автор:
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите свое имя" value={form.author} name="author" type="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Button variant="contained" color="success" onClick={handleSubmit}>Отправить</Button>
            </FormGroup>
            <Grid  container spacing={3}>
                <Grid  item xs={2}>
                    Название чата:{idChat}
                </Grid>
                <Grid item xs={5}>
                    <List>
                        {MessageListChat(Number(idChat)).map(message =>{
                            return(
                                <ListItem key={message.id}>
                                    <ListItemText primary={"Сообщение:"+message.text} secondary={"Автор:"+message.author}></ListItemText>
                                </ListItem>)
                        })}
                    </List>
                </Grid>
                <Grid  item xs={5}>
                    Выбрать сообщения автора:
                    <br/>
                    {MessageListChat(Number(idChat)).map(message =>{
                        return(
                            <p key={message.id} >
                                Автор: <Link  to={`/message/${idChat}/${message.author}`}>{message.author}</Link>
                            </p>)
                    })}
                </Grid>
            </Grid>
        </Box>
    )
};

export default Message;