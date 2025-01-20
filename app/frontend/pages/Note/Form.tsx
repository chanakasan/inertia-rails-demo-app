import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { NoteFormType, NoteType } from './types'

// Temporary fix for InertiaFormProps not being exported from @inertiajs/react
type InertiaFormProps<TForm extends Record<string, any>> = ReturnType<typeof useForm<TForm>>

interface FormProps {
  note: NoteType
  onSubmit: (form: InertiaFormProps<NoteFormType>) => void
  submitText: string
}

export default function Form({ note, onSubmit, submitText }: FormProps) {
  const form = useForm<NoteFormType>({
    title: note.title,
    content: note.content,
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.title}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={data.content}
          rows={4}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('content', e.target.value)}
        />
        {errors.content && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.content}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
