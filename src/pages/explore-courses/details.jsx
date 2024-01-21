import { useParams } from "react-router-dom";

const CourseDetails = () => {
    const { slug } = useParams();
    console.log(slug, '-?');
    return (
        <div>
            <h1>Course details</h1>
        </div>
    )
};

export default CourseDetails;