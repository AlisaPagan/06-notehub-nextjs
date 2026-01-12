import Link from "next/link";
import css from "./NoteList.module.css";
import type { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Link href={`/notes/${note.id}`} className={css.buttonDetail}>
                View details
              </Link>
              <button className={css.button} onClick={() => onDelete(note.id)}>
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
