import {useForm} from 'react-hook-form';
import {MuiButton} from '../materialui/MuiButton'
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import React from 'react'

const schema = z.object({
    name: z.string().min(3),
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6).max(20),
    passwordConfirm: z.string().min(6).max(20),

})

const RegisterForm = () => {

    const {register, handleSubmit, formState} = useForm({resolver:zodResolver(schema)})
    const {errors} = formState

    const handleSave = (formValues) => {
        console.log(formValues)
        console.log(errors.name)
    }

  return (
    <form onSubmit={handleSubmit(handleSave)}>
        <input {...register('name')} className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='Full Name' autoComplete='off'/>
        <input {...register('username')} className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='Username' name='username' autoComplete='off'/>
        <input {...register('email')} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' name='email' autoComplete='email'/>
        <input {...register('password')} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' name='password' autoComplete='off'/>
        <input {...register('passwordConfirm')} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password Confirm' name='passwordConfirm' autoComplete='off'/>
        <MuiButton type='submit'>Register</MuiButton>
    </form>
  )
}

export default RegisterForm
