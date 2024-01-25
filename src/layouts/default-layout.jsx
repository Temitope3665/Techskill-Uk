import { CourseContext, CourseProvider } from "@/contexts/course-context";
import Navbar from "../components/nav-bar";
import { useContext } from "react";

const Layout = ({ children }) => {
    // const { allCourses, isLoading } = useContext(CourseContext);
    // console.log(allCourses, '->');
    return (
        <CourseProvider>
            <div className="overflow-x-hidden">
                <Navbar />

                <div className="pt-20">
                    {children}
                </div>
            </div>
        </CourseProvider>
    )
};

export default Layout;
