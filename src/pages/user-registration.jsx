import UserRegisterImage from '@/assets/image/register-image.png';
import ArrowLeftRight from '@/assets/image/arrow-left-right.png';
import UserRegistrationForm from '@/components/user-register-form';

const UserRegistration = () => {
  return (
    <div className="my-4 lg:my-10 lg:px-16 px-8">
      <section className="w-full lg:flex">
        <div className="w-full lg:w-[45%] relative">
          <img
            src={UserRegisterImage}
            alt="beautiful lady registering for her course"
            className="h-[30vh] w-full lg:w-fit lg:h-[80vh] lg:fixed object-cover"
          />
          <h1 className="top-[20%] lg:right-[70%] font-gilroyLight text-[40px] lg:w-[20vw] text-center lg:fixed absolute">
            We want to know you
          </h1>
        </div>
        <div className="lg:w-[70%]">
          {/* <h1 className='text-[25px]'>Register now</h1> */}
          <div className='rounded-tr-lg rounded-tl-lg w-full px-4 pt-2 -pb-3 bg-[#242832] mt-6 lg:hidden'>
            <p className='text-yellow text-sm'>Step 1</p>
            <img src={ArrowLeftRight} alt="direction" className='py-2' />
          </div>

          <div className='rounded-br-lg rounded-bl-lg w-full px-4 py-2 bg-[#242832] mt-2'>
            <UserRegistrationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserRegistration;
