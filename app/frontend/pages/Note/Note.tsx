import { NoteType } from './types'

interface NoteProps {
  note: NoteType
}

export default function Note({ note }: NoteProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Title:</strong>
        {note.title?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Content:</strong>
        {note.content?.toString()}
      </p>
    </div>
  )
}
