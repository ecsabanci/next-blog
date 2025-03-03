import { Container } from '@/components/Container';
import { getAllContent } from '@/utils/markdown';
import { ClientProjects } from '@/app/projects/client';

export default function ProjectsPage() {
    const projects = getAllContent('projects');

    return (
        <Container>
            <ClientProjects projects={projects} />
        </Container>
    );
} 