import { useState } from 'react';
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react';
import clsx from 'clsx';
import Modal from '../Modal';
import { useAuth } from '../../contexts/AuthContext';

interface LoginProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  openRegister: (value: boolean) => void;
}

export default function Login({ open, setOpen, openRegister }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { loginUser } = useAuth();

  const toggleRegister = () => {
    setOpen(!open)
    openRegister(true)
  }

  const signInUser = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check for network connectivity
      if (!navigator.onLine) {
        throw new Error('No internet connection');
      }

      // Call the login service
      console.log(email, password);
      const { error } = await loginUser(email, password)
      
      if (error) {
        if ((error as {code?: string})?.code === 'auth/invalid-credential') { 
          setError('Invalid credentials. Please try again.');
        }else if ((error as { code?: string })?.code === 'auth/network-request-failed') {
          setError('Network error. Please check your internet connection.');
        } else {
          setError('Failed to login. Please try again.');
        }
        return;
      }
      setEmail('')
      setPassword('')
      setError(null)
      setOpen(false)
    } catch (error) {
      console.error(error);
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form className="w-full max-w-lg" onSubmit={(e) => {
        e.preventDefault();
        signInUser()
      }}>
        <Fieldset className="space-y-3 rounded-xl bg-black/5 p-6 sm:p-10">
          <Legend className="text-base/3 font-semibold text-black">Login</Legend>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <div className="h-px bg-gray-300" />
          <Field>
            <Label className="text-sm/6 font-medium">Email/Username</Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete='username'
              autoCorrect='on'
              required
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-black">Password</Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete='current-password'
              autoCorrect='on'
              required
            />
          </Field>
          <Field className="flex gap-5">
            <Button
              className={clsx("w-8/12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm/6 font-semibold", isLoading && 'opacity-50 cursor-not-allowed')}
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            <p className="w-4/12 text-blue-500 hover:text-blue-400 rounded-lg py-2 text-sm/6 cursor-pointer" onClick={toggleRegister}>Register Instead</p>
          </Field>
        </Fieldset>
      </form>
    </Modal>
  )
}
