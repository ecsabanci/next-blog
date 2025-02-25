import Link from 'next/link';
import type { PostData } from '@/utils/markdown';
import { ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PostCardProps {
  post: PostData;
}

export function PostCard({ post }: PostCardProps) {
  // Okuma süresini tahmin et (ortalama 200 kelime/dakika)
  const wordCount = post.excerpt?.split(/\s+/).length || 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="group relative flex flex-col h-full p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
      {/* Kategori badge - eğer varsa */}
      {post.category && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
            {post.category}
          </span>
        </div>
      )}

      {/* Başlık */}
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        <Link href={`/posts/${post.id}`} className="block">
          {post.title}
        </Link>
      </h2>

      {/* Özet */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
        {post.excerpt}
      </p>

      {/* Alt bilgiler */}
      <div className="flex items-center justify-between mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">

          {/* Okuma süresi */}
          <div className="flex items-center">
            <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{readingTime} dk okuma</span>
          </div>
        </div>

        {/* Devamını oku linki */}
        <Link
          href={`/posts/${post.id}`}
          className="inline-flex items-center text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          Devamını oku
          <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
} 