import Link from 'next/link';
import { formatDate } from '@/utils/date';
import type { PostData } from '@/utils/markdown';

interface PostCardProps {
  post: PostData;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-sm border-2 border-transparent hover:border-emerald-500/50 dark:hover:border-emerald-500/30 transition-all">
      <h2 className="text-2xl font-semibold mb-2">
        <Link 
          href={`/posts/${post.id}`} 
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-slate-600 dark:text-gray-400 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <time className="text-sm text-slate-500 dark:text-gray-400">
        {formatDate(post.date)}
      </time>
    </article>
  );
} 