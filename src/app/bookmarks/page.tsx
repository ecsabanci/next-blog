import { Container } from '@/components/Container';
import { getAllBookmarks, getAllTags } from '@/utils/bookmarks';
import { ClientBookmarks } from '@/app/bookmarks/client';

export default function BookmarksPage() {
    const bookmarks = getAllBookmarks();
    const allTags = getAllTags();

    return (
        <Container>
            <ClientBookmarks initialBookmarks={bookmarks} allTags={allTags} />
        </Container>
    );
} 