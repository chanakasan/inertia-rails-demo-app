export interface NoteType {
  id: number
  title: string
  content: string
}

export type NoteFormType = Omit<NoteType, 'id'>
