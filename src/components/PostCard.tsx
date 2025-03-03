import Link from 'next/link';
import type { ContentData, ContentType } from '@/utils/markdown';

interface PostCardProps {
  post: ContentData;
  type: ContentType;
}

export function PostCard({ post, type }: PostCardProps) {
  return (
    <article className="group flex flex-col justify-between pb-8 mb-8 dark:border-gray-800 rounded-sm p-4 transition-colors duration-300 border-dashed border-2 border-gray-300 hover:border-gray-400 dark:hover:border-gray-600">

      <div>
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors">
          <Link href={`/${type}/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-500 line-clamp-2 text-sm">
          {post.excerpt}
        </p>
      </div>

      {/* Category */}
      <div className="flex gap-1">
        {post.category && post.category.split(',').map((category) => (
          <span key={category} className="text-tiny text-gray-300 mt-4 bg-gray-700 px-2 py-1 rounded-md dark:bg-indigo-300/50 dark:text-gray-100">
            {category}
          </span>
        ))}
      </div>
    </article>
  );
} 