import TransformDigitally from '@/assets/image/landing-banner.png';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main className="grid items-center justify-between grid-cols-2">
      <div className='pl-8'>
        <h1 className='font-extraBold text-[55px] leading-tight'><span className='text-yellow'>Accelerate</span> your career today with Digital Transformation</h1>
        <p className='w-[80%] mt-2'>
          TechSkill empowers tech enthusiasts through training, mentorship, in
          other to transition into their desired career.
        </p>

        <div className='flex space-x-8 mt-4'>
            <Button size="lg">Join a cohort</Button>
            <Button size="lg" variant="outline">Explore courses</Button>
        </div>
      </div>
      <img src={TransformDigitally} alt="transforming digitally" className='h-[80vh]' />
    </main>
  );
};

export default Home;
