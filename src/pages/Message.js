import React, {useContext} from 'react';
import {useState} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {messagesListContext} from "../contecst/ContextMessageArr";
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";


const Message = () => {

    // const count = useSelector(state => state.count);

    const messagesList=useSelector( state => state. messagesList. messagesList);
    const dispatch = useDispatch();
    console.log(messagesList);
    // const {messagesListArr,funcMessagesList} = useContext(messagesListContext);

    // const [messagesList, setMessagesList] = useState(messagesListArr);
    // const [messagesList=messagesListContext2, setMessagesList] = useState();
    // messagesList=messagesListContext2;
    // { label: 'Съесть пиццу,', complete: false }




    const  setMessagesList=null ;
    const {idChat}=useParams();
    let [form, setForm] = useState({
        text: '',
        author: '',
        id:null,
        idChat:idChat
    });

    const handleSubmit2=(Pay)=>{
        dispatch({type:'ihcr',payload:Pay});
    }



    const MessageListChat =(idChat)=>{
        const MessageChat =messagesList.filter((messagesList)=>messagesList.idChat===idChat);
        return MessageChat;
    }
    const MessageListChatId =(idChat)=>{
        const MessageChat =MessageListChat(Number(idChat));
        const id= MessageChat[MessageChat.length-1].id+1;
        return Number(id);
    }
    // const form2={
    //     id:20,
    //     text:"kwebclkjbwc",
    //     author:" xwejx bjbx",
    //     idChat:2 ,
    // }
  //   const puschhh = (form2) =>{
  //       dispatch({type:'qqq',payload:form2})
  // }

    const handleSubmit = (e) => {
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
    const arr=form;
    return(
        <Box component="div" sx={{ border: '1px dashed grey' }}>
            {/*<h1>{count} </h1>*/}
            <div>
                <button onClick={()=>dispatch({type:'incr'})}>+</button>
            </div>
            <FormGroup>
                <Box component="label" sx={{ padding: '15px' }}>
                    Текст:
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите текст"  autoFocus={true}    value={form.text} name="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Box component="label" sx={{ padding: '15px' }}>
                    Автор:
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите свое имя" value={form.author} name="author" type="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Button variant="contained" color="success" onClick={handleSubmit2(form)}>Отправить</Button>
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