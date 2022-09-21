import './App.css';
import {useState} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import  Message from "./Message";

export function App() {
    const chatList =[
        { id:'1',chatName:"Чат1"},
        { id:'2',chatName:"Чат2"},
        { id:'3',chatName:"Чат3"},
    ]
    const [messagesList, setMessagesList] = useState([]);

    let [form, setForm] = useState({
        text: '',
        author: '',
        id:'',
    });
    const handleSubmit = e => {
        e.preventDefault();
        setMessagesList(prevState => [...prevState,{
            id:messagesList.length,
            text:form.text,
            author:form.author,
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
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите текст"  autoFocus={true}  value={form.text} name="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Box component="label" sx={{ padding: '15px' }}>
                    Автор:
                    <Input sx={{ border: '1px solid green', margin: '15px'}} placeholder="Введите свое имя" value={form.author} name="author" type="text" onChange={handleUpdateInput}></Input>
                </Box>
                <Button variant="contained" color="success" onClick={handleSubmit}>Отправить</Button>
        </FormGroup>
            <Grid  container spacing={2}>
                <Grid  item xs={4}>
                    <List>
                        {chatList.map(chat =>{
                            return(
                                <ListItem key={chat.id}>
                                    {chat.chatName}
                                </ListItem>)
                        })}
                    </List>
                </Grid>
                <Grid item xs={8}>
                    <List>
                        {messagesList.map(message =>{
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
}

export default App;
