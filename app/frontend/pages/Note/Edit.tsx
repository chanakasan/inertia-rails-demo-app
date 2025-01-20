import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { NoteType } from './types'

interface EditProps {
  note: NoteType
}

export default function Edit({ note }: EditProps) {
  return (
    <>
      <Head title="Editing note" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing note</h1>

        <Form
          note={note}
          onSubmit={(form) => {
            form.transform((data) => ({ note: data }))
            form.patch(`/notes/${note.id}`)
          }}
          submitText="Update Note"
        />

        <Link
          href={`/notes/${note.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this note
        </Link>
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
