import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import axios from 'axios';
import { headers_, registerEmailApi } from '@/config/api';
import { toast } from './ui/use-toast';

const JoinOurCommunity = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (value) => {
    setEmail(value);
    // Reset error message when the user types
    setShowError(false);
    // Validate email format
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setIsValidEmail(isValid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      setShowError(true);
      return;
    }

      setIsSubmitting(true);
      axios
        .post(
          registerEmailApi,
          {
            "fields": {
              'Emails': email,
            },
          },
          { headers: headers_ }
        )
        .then(() => {
          setEmail('')
          toast({
            description: "You've successfully joined our waiting list",
          });
        }
        )
        .catch(() =>
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          })
        )
        .finally(() => setIsSubmitting(false));
  };

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
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-x-4 mt-4">
            <Input
              className="bg-secondary"
              type="email"
              placeholder="Enter your email"
              value={email}
              defaultValue=""
              onChange={({ target }) => handleChange(target.value)}
            />
            <Button size="lg" loading={isSubmitting} loadingText="Joining...">
              Join
            </Button>
          </div>
        </form>
        {showError && !isValidEmail && <div className='text-[#c34141] text-left text-sm mt-1'>Please enter a valid email address.</div>}
      </div>
    </div>
  );
};

export default JoinOurCommunity;
