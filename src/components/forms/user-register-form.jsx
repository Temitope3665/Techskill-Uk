import { userRegisterSchema } from '@/lib/validations/schema';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { MoveRight } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import { CourseContext } from '@/contexts/course-context';
import { useContext, useState } from 'react';
import axios from 'axios';
import { headers_, registerUserApi } from '@/config/api';
import { Link, useParams } from 'react-router-dom';
import { toast } from '../ui/use-toast';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { paymentPlans } from '@/lib/utils';
import { format } from 'date-fns';

const UserRegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { slug } = useParams();
  const { allCourses, isLoading } = useContext(CourseContext);
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      dob: '',
      howYouAboutUs: '',
      interestedCourse: '',
      ref: '',
    },
    resolver: yupResolver(userRegisterSchema),
  });
  const where = ['Twitter', 'Instagram', 'LinkedIn', 'Friends/Colleagues'];

  const onSubmit = (data) => {
    console.log(data, '->');
    setIsSubmitting(true);
    axios
      .post(
        registerUserApi,
        {
          fields: {
            'First Name': data.firstName,
            'Last Name': data.lastName,
            Email: data.email,
            'Phone Number': data.phoneNumber,
            Address: data.address,
            'Date of Birth': data.dob || format(Date.now(), 'yyyy-MM-dd'),
            'Channel of Engagement': data.howYouAboutUs,
            'Service': data.interestedCourse || slug,
            'Course ID': slug === 'new' ? '' : slug,
            'Reference Code': data.ref,
          },
        },
        { headers: headers_ }
      )
      .then(() => {
        toast({
          description: `You've successfully registered for ${data.interestedCourse} course`,
        });
        navigate('/explore-courses/user-registration/successful', { shallow: true });
        gtag('event', 'conversion', {'send_to': 'AW-16481596925/-QjgCJ-1wpgZEP3rhLM9'});
        // Twitter Tag
        twq('event', 'tw-ojkiu-ok8tw', {});
        form.reset()
        setOpen(true);
      })
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
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 py-2 text-[12px]"
        >
          <div className="w-full grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">First Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="bg-[#2F3441] text-[12px]"
                      autoCorrect="off"
                      autoCapitalize="none"
                      placeholder="Enter your first name"
                      invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="bg-[#2F3441] text-[12px]"
                      autoCorrect="off"
                      autoCapitalize="none"
                      placeholder="Enter your last name"
                      invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full grid lg:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="bg-[#2F3441] text-[12px]"
                      autoCorrect="off"
                      type="email"
                      autoCapitalize="none"
                      placeholder="Enter your email address"
                      invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Phone number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      specialLabel={''}
                      country={'gb'}
                      inputStyle={{
                        backgroundColor: '#2F3441',
                        width: '100%',
                        height: '44px',
                        borderColor: '#818992',
                      }}
                      dropdownStyle={{
                        backgroundColor: '#2F3441',
                        color: '#818992',
                      }}
                      buttonStyle={{
                        backgroundColor: '#2F3441',
                        borderColor: '#818992',
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Address</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="none"
                    className="bg-[#2F3441] text-[12px]"
                    autoCorrect="off"
                    autoCapitalize="none"
                    placeholder="Enter your full address"
                    invalid={fieldState.invalid}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full grid lg:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="dob"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">
                    Date of birth (optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      type="date"
                      className="bg-[#2F3441] w-full"
                      autoCorrect="off"
                      autoCapitalize="none"
                      max="2012-12-31"
                      placeholder="Enter your date of birth"
                      invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="howYouAboutUs"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">
                    Where did you hear about us?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#2F3441] border-[#EFF5FB8C] text-[12px]">
                        <SelectValue placeholder="Where did you hear about us ?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {where.map((wh) => (
                        <SelectItem
                          value={wh}
                          key={wh}
                          className="font-gilroyMd"
                        >
                          {wh}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full grid lg:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="interestedCourse"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">
                    What course are you interested in ?{' '}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#2F3441] border-[#EFF5FB8C] text-[12px]">
                        <SelectValue placeholder="What course are you interested in ?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {isLoading ? (
                        'Loading...'
                      ) : (
                        <>
                          {allCourses?.map((course) => (
                            <SelectItem
                              value={course?.fields?.title}
                              className="font-gilroyMd"
                            >
                              {course?.fields?.title}
                            </SelectItem>
                          ))}
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isChecked && (
              <FormField
                control={form.control}
                name="ref"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-[12px]">
                      Reference code
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="none"
                        className="bg-[#2F3441] text-[12px]"
                        autoCorrect="off"
                        autoCapitalize="none"
                        placeholder="Enter your reference code"
                        invalid={fieldState.invalid}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="border-white"
              onCheckedChange={(value) => setIsChecked(value)}
              defaultChecked
            />
            <label
              htmlFor="terms"
              className="text-[12px] font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-4 pl-2"
            >
              If you have a reference code, please enter it above. This code may
              have been provided to you by a friend or colleague who referred
              you to TechSkilll Accelerate. Entering a valid reference code may
              entitle you to special offers or discounts.
            </label>
          </div>
          <Button
            type="submit"
            loadingText="Submitting..."
            loading={isSubmitting}
            size="lg"
            className="w-full font-medium bg-yellow text-[#000] text-sm"
          >
            Proceed
            <MoveRight className="ml-2" />
          </Button>
        </form>
      </Form>

      <AlertDialog onOpenChange={setOpen} open={open} defaultOpen={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black font-gilroyBold">
              Choose Payment Plan
            </AlertDialogTitle>
            <AlertDialogDescription>
             Use the options below to pay for any of our services.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            <Select
              onValueChange={(value) => setPaymentPlan(value)}
              defaultValue={paymentPlans[0]}
            >
              <SelectTrigger className="w-full text-primary font-gilroyMd">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {paymentPlans.map((plan) => (
                  <SelectItem value={plan}>{plan.title}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center space-x-4 justify-between'>
            <Button className='w-full border border-neutral-600 text-black' variant='outline' size='sm' onClick={() => setOpen(false)}>Close</Button>
            <Link to={paymentPlan?.paymentLink} className='w-full'>
              <Button type="submit" size="sm" className="w-full">
                Proceed
              </Button>
            </Link>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserRegistrationForm;
