import { Container } from '@/components/Container';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
// import { Slider, type SlideItem } from '@/components/Slider';

// const certificates: SlideItem[] = [
//     {
//         id: 1,
//         title: "Supervised Machine Learning: Regression and Classification",
//         image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ISHI3COEY86F/CERTIFICATE_LANDING_PAGE~ISHI3COEY86F.jpeg",
//         link: "https://www.coursera.org/account/accomplishments/verify/ISHI3COEY86F",
//         description: "Stanford University & DeepLearning.AI"
//     },
//     {
//         id: 2,
//         title: "Data Warehouse Concepts, Design, and Data Integration",
//         image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DAKS82US94BF/CERTIFICATE_LANDING_PAGE~DAKS82US94BF.jpeg",
//         link: "https://www.coursera.org/account/accomplishments/verify/DAKS82US94BF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
//         description: "IBM"
//     },
//     {
//         id: 3,
//         title: "Python for Data Science and AI",
//         image: "https://images.credly.com/size/680x680/images/40bee502-a5b3-4365-90e7-57eed5067594/image.png",
//         link: "https://www.credly.com/badges/6b486495-53b8-4f7a-a4a9-1ee72c708322",
//         description: "IBM"
//     },
//     {
//         id: 4,
//         title: "Data Warehousing and BI Analytics Essentials",
//         image: "https://images.credly.com/images/b5ad33aa-915e-4f6a-9b93-cff4ba964c3c/image.png",
//         link: "https://www.credly.com/badges/198e16c0-e7a6-44bc-9739-edcfee604b0f/linked_in_profile",
//         description: "IBM"
//     },
//     {
//         id: 5,
//         title: "Python Programming for Data Science",
//         image: "https://cdn.filestackcontent.com/fkbDP2GfR4iN0AG4OJxT?policy=eyJjYWxsIjpbInJlYWQiXSwiZXhwaXJ5IjoxNzQwOTk1MzQwLCJwYXRoIjoiLyJ9&signature=aa30f240358d2ae8d2c3a90ebc149865adfc9a680c1642e2a683b3c963fd2cb6",
//         link: "https://learning.miuul.com/certificates/nvzyunkq6v",
//         description: "IBM"
//     },
// ];

export default function AboutPage() {
    return (
        <Container>
            <div className="py-6 sm:py-12">
                <div className="mb-8">
                    <div className="prose prose-slate dark:prose-invert mb-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            Hi! I am Melisa, a Data Scientist passionate about machine learning and artificial intelligence.
                            I love exploring new technologies and sharing my knowledge through writing.
                            Currently focused on developing innovative solutions in the field of data science.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Connect with me
                        </h2>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/melisacevik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaGithub className="h-5 w-5" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/melisacevik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaLinkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://medium.com/@melisacevik13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaMedium className="h-5 w-5" />
                                <span>Medium</span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="mb-8">
                        <Slider
                            items={certificates}
                            title="Certificates"
                            aspectRatio="16/9"
                            showDots={true}
                            showArrows={true}
                            showTitle={true}
                        />
                    </div> */}

                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Resume
                        </h2>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            <HiDownload className="h-5 w-5" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
} 