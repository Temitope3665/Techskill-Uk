import { Button } from "./ui/button";
import { Input } from "./ui/input";

const JoinOurCommunity = () => {
  return (
    <div
      className="text-center py-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="lg:w-[50%] mx-auto">
        <h1 className="font-gilroyBold text-[30px] lg:text-[50px] lg:mt-3">
          Join our community
        </h1>
        <p className="text-grey lg:w-[60%] mx-auto lg:text-base text-sm px-12 lg:px-0">
          Let’s help accelerate your tech career and get you ready for the tech
          world
        </p>
      </div>

      <div className="border border-grey p-8 rounded-xl lg:w-[45vw] mx-6 lg:mx-auto mt-8">
        <h1 className="text-[#EFF5FB] text-[18px] lg:text-[30px] font-gilroyBold text-center">
          Ready to join our community?
        </h1>
        <div className="flex items-center gap-x-4 mt-4">
          <Input
            className="bg-secondary"
            type="email"
            placeholder="Enter your email"
          />
          <Button size="lg">Join</Button>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
