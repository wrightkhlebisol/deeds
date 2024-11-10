import { useState } from 'react';
import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import clsx from 'clsx';
import Modal from '../Modal';

interface CreateDeedModalProps { 
  open: boolean;
  setOpen: (value: boolean) => void;
  bgColor?: string;
}

export default function CreateDeedModal({ open, setOpen }: CreateDeedModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('good')
  const [evidence, setEvidence] = useState<string[]>([])
  
  const setFormColor = (color: string) => {
    return color
  }

  const submitDeed = () => {
    console.log('Deed Submitted', title, description, type, evidence)
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="w-full max-w-lg">
        <form>
          <Fieldset className="space-y-6 rounded-xl p-6 sm:p-6">
            <Legend className="text-base/7 font-semibold text-black">Create Deed</Legend>
            <Field>
              <Label className="text-sm/6 font-medium">Title</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-black">Description</Label>
              <Description className="text-sm/6 text-black/50">
                Be as detailed as possible.
              </Description>
              <Textarea
                className={clsx(
                  'mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium">Type</Label>
              <div className="relative">
                <Select
                  className={clsx(
                    'mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                  )}
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option onSelect={() => setFormColor('green')} value='good'>Good</option>
                  <option value='neutral'>Neutral</option>
                  <option value='bad'>Bad</option>
                </Select>
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                  aria-hidden="true" />
              </div>
            </Field>
            {/* Multi file uploader */}
            <Field>
              <Label className="text-sm/6 font-medium">Upload Evidence</Label>
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 tsext-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                type='file'
                multiple
                value={evidence}
                onChange={(e) => setEvidence([...evidence, e.target.value])}
              />
            </Field>
            <Field>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 text-sm/6 font-semibold" onSubmit={submitDeed} type='submit'>Create Deed</button>
            </Field>
          </Fieldset>
        </form>
        <div className="p-6">
          <p className="text-sm/6 text-black/50">By submitting a deed, you agree to our <a href="#" className="text-blue-500 hover:text-blue-400">Terms of Service</a> and <a href="#" className="text-blue-500 hover:text-blue-400">Privacy Policy</a>.</p>
        </div>
      </div>
    </Modal>
  )
}
