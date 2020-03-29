import express from 'express';

export const loginRouter = express.Router();

function login(){
    const login = document.getElementById('login').value;
    const password = document.getElementById('password')/value;
    fetch('/login', {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({login, password})
    })
        .then(response => {
            if(response.status === 200){
                response.json().then(data => {
                    document.cookie = `token=${data.token}`
                    window.location.href = '/dashboard'
                })
            }else{
                document.getElementById('BadPassword').style.display = 'block'
            }
        })
        .catch(err => console.log(err))
}