import { Button } from '@mui/material'
import React, {useState} from 'react'
import { Login } from './Login'

export const SignOut = () => {

    const outing=()=>{
  alert('you have successfully logout')

    }
  return (
    <div>
    <Button onClick={outing} >Logout</Button></div>
  )
}
