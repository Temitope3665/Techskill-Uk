import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const OurCourses = ({ className, image, title, description, href }) => {
    return (
        <div className={cn(className)}>
            <div className="border border-yellow bg-primary rounded-[18px] p-3">
                <img src={image} alt={title} />
                <h3 className="text-[22px] pt-3 font-bold">{title}</h3>
                <p className="text-grey mt-2">{description}</p>
                <Link to={href}>
                    <Button className="w-full mt-8">Enroll now</Button>
                </Link>
            </div>
        </div>
    )
};

export default OurCourses;