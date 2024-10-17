import { CourseProvider } from '@/contexts/course-context';
import Navbar from '../components/nav-bar';

const Layout = ({ children }) => {
  return (
    <CourseProvider>
      <div className="overflow-x-hidden">
        {/* <Navbar /> */}

        <div className="pt-">{children}</div>

        {/* <div className="pt-20">{children}</div> */}
      </div>
    </CourseProvider>
  );
};

export default Layout;
