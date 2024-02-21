import { contactUsSchema } from "@/lib/validations/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ContactUsForm = ({ handleSubmit, isSubmitting }) => {
    const form = useForm({
        defaultValues: {
          'First Name': '',
          'Last Name': '',
          Email: '',
          Faqs: '',
        },
        resolver: yupResolver(contactUsSchema),
      });

      const onSubmit = (data) => {
        handleSubmit(data);
      }

    return (
        <div>
                  <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
            <FormField
              control={form.control}
              name="First Name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary">First Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="text-primary"
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
              name="Last Name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="text-primary"
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


            <FormField
              control={form.control}
              name="Email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary">Email</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="none"
                      className="text-primary"
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
            name="Faqs"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-primary">Ask your question</FormLabel>
                <FormControl>
                  <Textarea
                    autoComplete="none"
                    className="text-primary"
                    autoCorrect="off"
                    autoCapitalize="none"
                    placeholder="Ask your question here"
                    invalid={fieldState.invalid}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            loadingText="Submitting..."
            loading={isSubmitting}
            size="lg"
            className="w-full font-medium bg-yellow text-[#000] text-sm"
          >
            Submit
          </Button>
        </form>
      </Form>
        </div>
    )
};

export default ContactUsForm;