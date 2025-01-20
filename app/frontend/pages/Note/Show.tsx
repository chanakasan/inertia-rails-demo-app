import { Head, Link } from '@inertiajs/react'
import Note from './Note'
import { NoteType } from './types'

interface ShowProps {
  note: NoteType
  flash: { notice?: string }
}

export default function Show({ note, flash }: ShowProps) {
  return (
    <>
      <Head title={`Note #${note.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Note #{note.id}</h1>

          <Note note={note} />

          <Link
            href={`/notes/${note.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this note
          </Link>
          <Link
            href="/notes"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to notes
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/notes/${note.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this note
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
