import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Note from './Note'
import { NoteType } from './types'

interface IndexProps {
  notes: NoteType[]
  flash: { notice?: string }
}

export default function Index({ notes, flash }: IndexProps) {
  return (
    <>
      <Head title="Notes" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Notes</h1>
          <Link
            href="/notes/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New note
          </Link>
        </div>

        <div className="min-w-full">
          {notes.map((note) => (
            <Fragment key={note.id}>
              <Note note={note} />
              <p>
                <Link
                  href={`/notes/${note.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this note
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
