import { getAllPosts } from '@/utils/markdown';
import { PostCard } from '@/components/PostCard';
import { Container } from '@/components/Container';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Container className="pb-8">
        <div className="mb-8">
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
