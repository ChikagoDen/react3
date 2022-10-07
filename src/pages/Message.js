import React, {useContext} from 'react';
import {useState} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {messagesListContext} from "../contecst/ContextMessageArr";
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";
import {messageSelector} from "../redux/reducers/messageSelector";


const Message = () => {
    const messagesList=useSelector( messageSelector);
    const dispatch = useDispatch();
    const {idChat}=useParams();
    const MessageListChat =messagesList.filter((messagesList)=>messagesList.idChat===Number(idChat));
    const handleSubmit=(form)=>{dispatch({type:'addMessage',payload:form});}
    let [form, setForm] = useState({
        text: '',
        author: '',
        id:null,
        idChat:idChat
    });

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
                <Button variant="contained" color="success" onClick={()=>handleSubmit(form)}>Отправить</Button>
            </FormGroup>
            <Grid  container spacing={3}>
                <Grid  item xs={2}>
                    Название чата:{idChat}
                </Grid>
                <Grid item xs={5}>
                    <List>
                        {MessageListChat.map(message =>{
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
                    {  MessageListChat.map(message =>{
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