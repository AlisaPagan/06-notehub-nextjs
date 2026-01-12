import api from "./client";
import type { Note, NoteTag } from "@/types/note";

export interface CreateNotePayload {
  title: string;
  content?: string;
  tag: NoteTag;
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const { data } = await api.post<Note>("/notes", payload);
  return data;
}
