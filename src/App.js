
import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import { Button, Alert, AlertTitle, TextField } from '@mui/material';



function App() {
  const [login, setLogin] = useState({
    username: '',
    password: ''
})
const [alert, setAlert] = useState(false)
const [alert2, setAlert2] = useState(false)

const authorization = async () => {
    try {
      const response = await axios.post('https://codify-teens-r2a2nyqkk-oscarquell.vercel.app/login/', login)
      if (response.status === 200) {
        setAlert(true)
        console.log(response)
      }else if (response.status === 401) {
        setAlert2(true)
        console.log(response);
      }
        
    } catch (e) {
      if (e.response.status === 401){ 
        setAlert2(true)} 
else {Alert ( ' Произошла ошибка сервера' )}
        console.log(e.response)
    }
} 



  return (
    <div className="App">

<TextField id="outlined-basic" label="Логин" variant="outlined" 
  onChange={(e) => setLogin(prevState => ({...prevState, username: e.target.value}))} />

<TextField id="outlined-basic" label="Пароль" variant="outlined" 
onChange={(e) => setLogin(prevState => ({...prevState, password: e.target.value}))}/>

                <Button variant="outlined" onClick={authorization}>Отправить</Button>
                <div className='alert'>
                  {alert ? 
                     <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
                : null}
                </div>
                
                <div className='alert2'>
                  {alert2 ? 
                 <Alert severity="warning">
                 <AlertTitle>Warning</AlertTitle>
                 This is a warning alert — <strong>check it out!</strong>
               </Alert> 
                : null}
                </div>
                
               

    </div>
  );
}

export default App;
