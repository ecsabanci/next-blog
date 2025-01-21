'use client';

import { useState } from 'react';
import { BookmarkCard } from '@/components/BookmarkCard';
import type { BookmarkData } from '@/utils/bookmarks';

interface ClientBookmarksProps {
    initialBookmarks: BookmarkData[];
    allTags: string[];
}

export function ClientBookmarks({ initialBookmarks, allTags }: ClientBookmarksProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredBookmarks = selectedTag
        ? initialBookmarks.filter((bookmark) => bookmark.tags.includes(selectedTag))
        : initialBookmarks;

    return (
        <div className="py-6 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Bookmarks
                </h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    A collection of interesting articles, tools, and resources I have found on the web.
                </p>
            </div>

            {/* Tags filter */}
            <div className="relative mb-8">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 sm:px-0 min-w-max pb-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${selectedTag === null
                                ? 'bg-emerald-600 text-white'
                                : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${selectedTag === tag
                                    ? 'bg-emerald-600 text-white'
                                    : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none sm:hidden" />
            </div>

            {/* Bookmarks grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-4 sm:gap-6">
                {filteredBookmarks.map((bookmark) => (
                    <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                ))}
            </div>

            {/* No results message */}
            {filteredBookmarks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">
                        No bookmarks found {selectedTag && `with tag "${selectedTag}"`}.
                    </p>
                </div>
            )}
        </div>
    );
} 