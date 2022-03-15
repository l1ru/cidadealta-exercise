import axios from 'axios';
import React, { useCallback, useState } from 'react';

import { FiUser } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input';

import { changeUser } from '../../services/slices/ContainerSlice';
import { setPenalCode } from '../../services/slices/PenalSlice';

import { AuthContainer } from './styles';

const Auth: React.FC = () => {
    let [user, setUser] = useState('')
    let [password, setPassword] = useState('')
    let dispath = useDispatch()

    let AuthAction = useCallback(() => {
        axios.get("https://my-json-server.typicode.com/cidadealta/exercise/db").then(res => {
            let data = res.data.usuarios.find((result: any) => result.nome === user)
            if(password === data.senha) {
                console.log(true)
                dispath(changeUser({
                    user: user,
                    password: password
                }))
                dispath(setPenalCode(res.data.codigopenal))
            } else {
                console.log(false)
            }
        })
    }, [user, password])
    return (
        <AuthContainer>
            <p>AUTENTICAÇÃO</p>
            <Input 
                label='USUARIO'
                icon={<FiUser  />}
                type="text"
                onChange={(e: any) => setUser(e.target.value)}
            />
            <Input
                label='SENHA'
                icon={<MdPassword  />}
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
            />
            <button className='auth-button' onClick={AuthAction} >AUTENTICAR</button>
        </AuthContainer>
    );
}

export default Auth;