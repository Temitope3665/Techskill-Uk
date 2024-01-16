import { courses } from '@/config/courses';
import OurCourses from './our-courses';

const Skills = () => (
    <div className="grid grid-cols-3 gap-10 mt-14">
      {courses.map((course) => (
        <OurCourses
          title={course.title}
          image={course.image}
          key={course.title}
          description={course.desc}
        />
      ))}
    </div>
  );

export default Skills;
