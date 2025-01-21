'use client';

import { useState } from 'react';
import { PostCard } from '@/components/PostCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import type { PostData } from '@/utils/markdown';

interface BlogListProps {
    posts: PostData[];
}

const POSTS_PER_PAGE = 6;

export function BlogList({ posts }: BlogListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    // Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    // Mevcut sayfada gösterilecek yazıları hesapla
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, endIndex);

    // Sayfa değiştirme fonksiyonları
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {currentPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                        <span className="hidden sm:inline">Önceki</span>
                    </button>

                    <div className="flex items-center gap-1 sm:gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => {
                                    setCurrentPage(pageNum);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${currentPage === pageNum
                                    ? 'bg-emerald-600 text-white'
                                    : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <span className="hidden sm:inline">Sonraki</span>
                        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                    </button>
                </div>
            )}
        </>
    );
} 