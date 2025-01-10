import { getAllPosts } from '@/utils/markdown';
import { PostCard } from '@/components/PostCard';
import { Container } from '@/components/Container';

export default function Home() {
  const posts = getAllPosts();

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Blog Yazıları
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Container>
  );
}
