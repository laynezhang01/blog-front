import {NextPage} from 'next';
import Comment from '@/components/Comment';

const About: NextPage = () => {
    const serverURL = process.env.WALINE_BACKEND_URL ?? '';

    return (
        <div>
            hello
            <Comment serverURL={serverURL} />
        </div>
    );
};

export default About;
