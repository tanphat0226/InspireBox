import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router'
import { registerUserAPI } from '../services/apiUser'

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email('Please enter a valid email').required(),
    password: yup.string().min(6, 'Password must be at least 6 characters').required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  })
  .required()

const Signup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password
    }
    registerUserAPI(newUser)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-6 m-4  min-w-[400px] flex flex-col justify-between'>
        <h1 className='text-3xl font-bold text-center'>Join Us Today! 🚀</h1>

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
            id='email'
            label='Email'
            type='email'
            name='email'
            placeholder='Enter your email'
            {...register('email')}
          />
          {errors.email && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
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

          <Input
            id='password-confirm'
            label='Confirm Password'
            type='password'
            name='password-confirm'
            placeholder='Confirm your password'
            {...register('passwordConfirm')}
          />
          {errors.passwordConfirm && (
            <span className='text-red-400 text-sm block mb-2'>
              {errors.passwordConfirm.message}
            </span>
          )}

          <div className='mt-4'>
            <Button type='submit'>Sign Up</Button>
          </div>
        </form>
        <p className='text-right text-gray-400 text-sm mt-4'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500 text-sm mt-2 underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
