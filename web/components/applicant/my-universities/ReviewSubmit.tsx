import Link from 'next/link';


const ReveiwSubmit: React.FC = () => {

    return (
        <div className="container mx-auto py-8 bg-gray-100 gap-2">
           
            <div className="p-2">
                <h1 className="text-2xl font-bold mb-4">Application Submission</h1>
                <p className="mb-4">
                    In order to begin the submission process, you must complete the following items:
                </p>
                <ul className=" ml-6 mb-4 text-blue-600 underline">
                    <li>
                        <Link href="/joint-app/profile">
                            Profile section of the Common App
                        </Link>
                    </li>
                    <li>
                        <Link href="/joint-app/family">
                            Family section of the Common App
                        </Link>
                    </li>
                    <li>
                        <Link href="/joint-app/education">
                            Education section of the Common App
                        </Link>
                    </li>
                    <li>
                        <Link href="/joint-app/activities-section">
                            Activities section of the Common App
                        </Link>
                    </li>
                    <li>
                        <Link href="/joint-app/writing">
                            Writing section of the Common App
                        </Link>
                    </li>
                </ul>
                <p className="mb-4">
                    Once all required components are completed, you will see the option to Review and Submit your application on this screen.
                </p>
            </div>
        </div>
    );
};

export default ReveiwSubmit;
