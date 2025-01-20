import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { NoteType } from './types'

interface NewProps {
  note: NoteType
}

export default function New({ note }: NewProps) {
  return (
    <>
      <Head title="New note" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New note</h1>

        <Form
          note={note}
          onSubmit={(form) => {
            form.transform((data) => ({ note: data }))
            form.post('/notes')
          }}
          submitText="Create Note"
        />

        <Link
          href="/notes"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to notes
        </Link>
      </div>
    </>
  )
}
