import Link from 'next/link';
import { getPostWithHtml, getAllPostIds } from '@/utils/markdown';
import { formatDate } from '@/utils/date';
import { Container } from '@/components/Container';
import { IoArrowBack } from 'react-icons/io5';

// Ensures paths are returned in the correct structure
export async function generateStaticParams() {
  const paths = getAllPostIds();
  // Return a simpler format: array of objects with just the id
  return paths.map(path => ({
    id: path.params.id
  }));
}

type Params = Promise<{ id: string }>
// Main page component
export default async function PostPage(props: { params: Params }) {
  const params = await props.params;
  if (!params?.id) {
    throw new Error('Post ID is required.');
  }

  const post = await getPostWithHtml(params.id);

  return (
    <main>
      <Container className="pb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group mb-8"
        >
          <IoArrowBack className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Tüm Yazılar
        </Link>

        <article className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {post.title}
            </h1>
            <time className="text-sm text-slate-500 dark:text-gray-400">
              {formatDate(post.date)}
            </time>
          </header>

          <div
            className="prose prose-slate dark:prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>
      </Container>
    </main>
  );
}
