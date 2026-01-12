import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api/fetchNotes";

const PER_PAGE = 12;

export default async function NotesPage() {
  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: ["notes", 1, "", PER_PAGE],
    queryFn: () => fetchNotes({ page: 1, perPage: PER_PAGE, search: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
