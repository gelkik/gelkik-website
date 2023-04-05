import React, { useState } from "react";
// import { Tab } from '@headlessui/react'
import { TextField,Box,Button } from '@mui/material'
// Local Data
// import data from "../../data/portfolio.json";

const EmailForm = ({theme}) => {
  // const router = useRouter();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // const { name, showBlog, showResume } = data;

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  const newObj = {
    name: '',
    email: '',
    comment: ''
    }
  const [email, setEmail] = useState(newObj)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [commentError, setCommentError] = useState(false)

  function handleSubmit(e){
    e.preventDefault();

    // setEmail({[e.target.name]:e.target.value})
    console.log(email)
    setNameError(false)
    setEmailError(false)
    setCommentError(false)

    if (email.name === ''){
        setNameError(true)
    }
    if (email.email === ''){
        setEmailError(true)
    }
    if (email.comment === ''){
        setCommentError(true)
    }
    fetch('http://127.0.0.1:5555/emails',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(email)
    })
    .then(r=>r.json())
    .then(data=>{
        setEmail(data)
    })
  }

  function handleChange(e){
    setEmail({...email,[e.target.name]:e.target.value})
  }
  

  return (
    <div>
        <div className = 'contact-info'>
            <h1>
                Contact Me
            </h1>
        </div>
        <h4 className="pre-email-form">
            For business inquiries, you can email me, @gelkik@gmail.com, or fill out the form below:
        </h4>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <form
                className = 'email-form'
                onSubmit={handleSubmit}
                contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}
            >
                <TextField 
                    InputLabelProps={{ shrink: true }} 
                    margin="dense"
                    style = {{width: '100%'}}
                    id="standard-basic" 
                    label="Name" 
                    variant="outlined" 
                    value ={email.name}
                    name = 'name'
                    onChange={handleChange}
                    error={nameError}
                    helperText={nameError ? "Cannot leave your name blank." : ''}
                />
                <TextField 
                    InputLabelProps={{ shrink: true }}
                    margin="dense"
                    style = {{width: '100%'}}
                    id="standard-basic" 
                    label="Email" 
                    variant="outlined" 
                    name = 'email'
                    value ={email.email}
                    onChange={handleChange}
                    error={emailError}
                    helperText={emailError ? "I need your email address!" : ''}
                />
                <TextField 
                    InputLabelProps={{ shrink: true }} 
                    margin="dense"
                    style = {{width: '100%'}}
                    id="standard-basic" 
                    label="Comment" 
                    name = 'comment'
                    multiline
                    rows={7}
                    variant="outlined" 
                    value ={email.comment}
                    onChange={handleChange}
                    error={commentError}
                    helperText={commentError ? "Must leave a comment." : ''}
                />
                <Button 
                    type='submit'
                    variant="outlined"
                    margin="dense"
                >
                    Send
                </Button>
            </form>
        </Box>
    </div>
  )

}

export default EmailForm;