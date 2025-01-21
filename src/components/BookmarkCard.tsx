import { CalendarIcon, LinkIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/utils/date';
import type { BookmarkData } from '@/utils/bookmarks';

interface BookmarkCardProps {
    bookmark: BookmarkData;
}

export function BookmarkCard({ bookmark }: BookmarkCardProps) {
    return (
        <article className="group relative flex flex-col h-full p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {bookmark.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title and Link */}
            <div className="mb-3">
                <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white inline-flex items-center gap-2">
                        {bookmark.title}
                        <LinkIcon className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </h2>
                </a>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {bookmark.description}
            </p>

            {/* Date */}
            <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <time dateTime={bookmark.date}>{formatDate(bookmark.date)}</time>
            </div>
        </article>
    );
} 