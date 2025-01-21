import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const bookmarksDirectory = path.join(process.cwd(), 'src/content/bookmarks');

export interface BookmarkData {
  id: string;
  title: string;
  url: string;
  date: string;
  tags: string[];
  description: string;
  content?: string;
}

export function getAllBookmarks(): BookmarkData[] {
  // Get file names under /bookmarks
  const fileNames = fs.readdirSync(bookmarksDirectory);
  const allBookmarksData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(bookmarksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the bookmark metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      url: matterResult.data.url,
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
      description: matterResult.data.description,
      content: matterResult.content,
    };
  });

  // Sort bookmarks by date
  return allBookmarksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBookmarksByTag(tag: string): BookmarkData[] {
  const allBookmarks = getAllBookmarks();
  return allBookmarks.filter((bookmark) => bookmark.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allBookmarks = getAllBookmarks();
  const tags = new Set<string>();
  
  allBookmarks.forEach((bookmark) => {
    bookmark.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
} 