import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./sign_up.css";
import axios from "axios";
import BasicSelect from "./gender"

const theme = createTheme();

export default function SignUp({setView,setUser}) {


  const [data,setData]=useState({
    email: "",
    sname:"",
    rollno: "",
    age: "",
    gender: "",
    grp: "",
    pno: "",
    password: ""

  })

 const  handleChange=(field,e)=>{
  setData({...data,[field]:e.target.value})
 }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)

    axios.post("http://localhost:4000/user/signup", data).then(r => {
      setUser(r.data);
      setView(1);
    }).catch(e => {
      console.log(e);
      window.alert(e.message);
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={(e)=>{
                    handleChange("sname", e);
                  }}
                 value={data.sname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e)=>{
                    handleChange("email", e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={data.password}
                  onChange={(e)=>{
                    handleChange("password", e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                  value={data.age}
                  onChange={(e)=>{
                    handleChange("age", e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                  name="grp"
                  label="Group"
                  type="number"
                  id="grp"
                  min={1}
                  max={20}
                  value={data.grp}
                  onChange={(e)=>{
                    handleChange("grp", e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <BasicSelect setGender={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="pno"
                  label="Phone Number"
                  type="number"
                  id="pno"
                  value={data.pno}
                  onChange={(e)=>{
                    handleChange("pno", e);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{ setView(1)}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}