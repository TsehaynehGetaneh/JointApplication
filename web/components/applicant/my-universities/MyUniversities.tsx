import Link from 'next/link';
import { useRouter } from 'next/router';


const MyUniversities: React.FC = () => {
    const router = useRouter()
    const handleAddUniversities = () => {
        router.push('search')
    }
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">My Universities</h1>
            <p className="mb-4">
                In this tab, you will continue your application for each Universitiesand you will:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Complete Universities specific questions and supplements</li>
                <li>Invite and manage recommenders</li>
                <li>Submit your application!</li>
            </ul>
            <p className="mb-4">
                For more help in completing this tab, you may contact our{' '}
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Applicant Solution Center
                </Link>{' '}
                at any time to answer your questions.
            </p>
            <div className="flex justify-end">
                <Link href="/search" className="bg-blue-500 text-white rounded-full px-8 py-3 ">
                    Add a Universities   </Link>
            </div>
        </div>
    );
};

export default MyUniversities;
