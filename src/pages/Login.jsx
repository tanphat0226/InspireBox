import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router'

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(6, 'Password must be at least 6 characters').required()
  })
  .required()

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-6 m-4  min-w-[400px] flex flex-col justify-between'>
        <h1 className='text-3xl font-bold text-center'>Welcome Back! 👋</h1>

        <form className='mt-8' onSubmit={handleSubmit(onSubmit)}>
          <Input
            id='username'
            label='Username'
            type='text'
            name='username'
            placeholder='Enter your user name'
            {...register('username', { required: true, minLength: 3 })}
          />
          {errors.username && (
            <span className='text-red-400 text-sm'>{errors.username.message}</span>
          )}
          <Input
            id='password'
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-red-400 text-sm'>{errors.password.message}</span>
          )}

          <div className='mt-4'>
            <Button type='submit'>Login</Button>
          </div>
        </form>

        <p className='text-right text-gray-400 text-sm mt-4'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-blue-500 text-sm mt-2 underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
