import { useState } from 'react';
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react';
import clsx from 'clsx';
import Modal from '../Modal';

interface RegisterProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  openLogin: (value: boolean) => void;
}

export default function Register({ open, setOpen, openLogin }: RegisterProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [linkedin, setLinkedin] = useState('');

  const toggleLogin = () => {
    setOpen(!open)
    openLogin(true)
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form className="w-full max-w-lg">
        <Fieldset className="space-y-3 rounded-xl bg-black/5 p-6 sm:p-10">
          <Legend className="text-base/10  font-semibold text-black">Register</Legend>
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
              required
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
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              required
            />
          </Field>
          <Field className="flex gap-5 pt-5">
            <Button className="w-9/12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm/6 font-semibold" type='submit'>Register</Button>
            <p className="w-3/12 text-blue-500 hover:text-blue-400 rounded-lg py-2 text-sm/6 cursor-pointer" onClick={toggleLogin}>Login Instead?</p>
          </Field>
        </Fieldset>
      </form>
    </Modal>
  )
}
