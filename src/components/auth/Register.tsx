import { useState } from 'react';
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react';
import clsx from 'clsx';
import Modal from '../Modal';
import { useAuth } from '../../contexts/AuthContext';

interface RegisterProps {
  readonly open: boolean;
  readonly setOpen: (value: boolean) => void;
  readonly openLogin: (value: boolean) => void;
}

export default function Register({ open, setOpen, openLogin }: RegisterProps) {
  const { createUser } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => {
    setOpen(!open)
    openLogin(true)
  }

  const setRegisterDefaults = () => {
    setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setIsAnonymous(false)
      setLinkedInUrl('')
      setOpen(false);
  }

  const registerUser = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Compare password and confirm password
      if (password !== confirmPassword) {
        setError('Passwords do not match. Please try again.');
        return;
      }
      // Call the register service
      const { error } = await createUser({firstName, lastName, email, password, isAnonymous, linkedInUrl})
      if (error) {
        const errorCode = (error as { code?: string })?.code
        switch (errorCode) {
          case 'auth/email-already-in-use':
            setError('Email already in use. Please try again.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email. Please try again.');
            break;
          case 'auth/weak-password':
            setError('Weak password. Please try again.');
            break;
          case 'auth/network-request-failed':
            setError('Network error. Please check your internet connection.');
            break;
          case 'auth/too-many-requests':
            setError('Too many requests. Please try again later.');
            break;
          default:
            setError('Failed to register. Please try again.');
            break;
        }
        return;
      }

      setRegisterDefaults();
    } catch (error) {
      console.error(error);
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form className="w-full max-w-lg" onSubmit={e => {
        e.preventDefault();
        registerUser();
      }}>
        <Fieldset className="space-y-3 rounded-xl bg-black/5 p-6 sm:p-10">
          <Legend className="text-base/10  font-semibold text-black">Register</Legend>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <div className="my-1 h-px bg-gray-300" />
          <div className="flex justify-between gap-3">
            <Field className="w-full">
              <Label className="text-sm/6 font-medium">First Name</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                type='text'
                required
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/6 font-medium">Last Name</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                type='text'
                required
              />
            </Field>
          </div>
          <Field>
            <Label className="text-sm/6 font-medium">Email</Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Field>
          <div className="my-1 h-px bg-gray-300" />
          <Field className='flex gap-5'>
            <Label className="text-sm/6 font-medium">Post Anonymously</Label>
            <Input
              className={clsx(
                'w-5 rounded-lg border-none bg-black/5',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
              type='checkbox'
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
          </Field>
          <div className="my-1 h-px bg-gray-300" />
          <div className="flex justify-between gap-3">
            <Field className="w-full">
              <Label className="text-sm/6 font-medium">Password</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Field>
            <Field className="w-full">
              <Label className="text-sm/6 font-medium">Confirm Password</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                type='password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </Field>
          </div>
          <Field>
            <Label className="text-sm/6 font-medium">Linkedin URL</Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
              )}
              type='url'
              value={linkedInUrl}
              onChange={e => setLinkedInUrl(e.target.value)}
              required
            />
          </Field>
          <Field className="flex gap-5 pt-5">
            <Button className="w-9/12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm/6 font-semibold" type='submit'>{
              isLoading ? 'Loading...' : 'Register'
            }</Button>
            <p className="w-3/12 text-blue-500 hover:text-blue-400 rounded-lg py-2 text-sm/6 cursor-pointer" onClick={toggleLogin}>Login Instead?</p>
          </Field>
        </Fieldset>
      </form>
    </Modal>
  )
}
