import Link from 'next/link';
import { getContentWithHtml, getAllContentIds } from '@/utils/markdown';
import { Container } from '@/components/Container';
import { IoArrowBack } from 'react-icons/io5';
import { formatDate } from '@/utils/date';
import Claps from "@/components/claps";
import { TagChip } from '@/components/TagChip';
import Image from 'next/image';

// Ensures paths are returned in the correct structure
export async function generateStaticParams() {
    const paths = getAllContentIds('projects');
    // Return a simpler format: array of objects with just the id
    return paths.map(path => ({
        id: path.params.id
    }));
}

type Params = Promise<{ id: string }>
// Main page component
export default async function ProjectPage(props: { params: Params }) {
    const params = await props.params;
    if (!params?.id) {
        throw new Error('Project ID is required.');
    }

    const project = await getContentWithHtml('projects', params.id);

    return (
        <Container>
            <div className="py-4 sm:py-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group mb-4 sm:mb-8"
                >
                    <IoArrowBack className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Tüm Projeler
                </Link>

                <article className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-sm p-4 sm:p-8">
                    <header className="mb-4 sm:mb-8">
                        <h1 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                            <time dateTime={project.date}>{formatDate(project.date)}</time>

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 opacity-50">
                                    {project.technologies.map((tech) => (
                                        <TagChip
                                            key={tech}
                                            tag={tech}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {(project.githubUrl || project.demoUrl) && (
                            <div className="flex gap-4 mt-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                                    >
                                        GitHub →
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        )}
                    </header>

                    {project.image && (
                        <div className="mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none 
                        prose-headings:scroll-mt-20
                        prose-h1:text-xl sm:prose-h1:text-2xl lg:prose-h1:text-3xl
                        prose-h2:text-lg sm:prose-h2:text-xl lg:prose-h2:text-2xl
                        prose-h3:text-base sm:prose-h3:text-lg lg:prose-h3:text-xl
                        prose-p:text-base sm:prose-p:text-base lg:prose-p:text-base
                        prose-li:text-base sm:prose-li:text-base lg:prose-li:text-base
                        prose-code:text-xs sm:prose-code:text-sm lg:prose-code:text-base
                        prose-pre:text-xs sm:prose-pre:text-sm lg:prose-pre:text-base
                        prose-img:rounded-lg
                        prose-a:text-emerald-600 dark:prose-a:text-emerald-400
                        prose-a:no-underline hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-300"
                        dangerouslySetInnerHTML={{ __html: project.contentHtml || '' }}
                    />
                </article>
            </div>
            <Claps key={params.id} />
        </Container>
    );
}
