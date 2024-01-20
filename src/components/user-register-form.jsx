import { userRegisterSchema } from '@/lib/validations/schema';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import { MoveRight } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';

const UserRegistrationForm = () => {
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
    },
    resolver: yupResolver(userRegisterSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
                    country={'ng'}
                    inputStyle={{ backgroundColor: '#2F3441', width: '100%', height: '44px' }}
                    dropdownStyle={{ backgroundColor: '#2F3441', color: '#818992' }}
                    buttonStyle={{ backgroundColor: '#2F3441' }}
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
                    className="bg-[#2F3441]"
                    autoCorrect="off"
                    autoCapitalize="none"
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
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
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
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="refCode"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Reference code</FormLabel>
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
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="border-white" />
          <label
            htmlFor="terms"
            className="text-[12px] font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-4 pl-2"
          >
            If you have a reference code, please enter it below. This code may
            have been provided to you by a friend or colleague who referred you
            to TechSkilll Accelerate. Entering a valid reference code may
            entitle you to special offers or discounts.
          </label>
        </div>
        <Button
          type="submit"
          loadingText="Please wait"
          size="lg"
          className="w-full font-medium bg-yellow text-[#000]"
        >
          Proceed to make payment
          <MoveRight className="ml-2" />
        </Button>
      </form>
    </Form>
  );
};

export default UserRegistrationForm;
