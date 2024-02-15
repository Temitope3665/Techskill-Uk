import PuzzleMan from '@/assets/image/puzzle-man.png';
import Footer from '@/components/footer';
import ReactHelment from '@/components/helmet';
import { Button } from '@/components/ui/button';
import { Faque } from '@/config/dataa';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ContactUsForm from '@/components/forms/contact-us-form';
import axios from 'axios';
import { contactUsApi, headers_ } from '@/config/api';
import { toast } from '@/components/ui/use-toast';
import SuccessMessage from '@/components/success-info';

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  const handleOpenTray = (id) => {
    if (selected !== id) {
      setSelected(id);
    } else {
      setSelected(null);
    }
  };

  const handleSubmit = (data) => {
    console.log(data, '-> data');
    setIsSubmitting(true);
    axios
      .post(
        contactUsApi,
        {
          fields: data,
        },
        { headers: headers_ }
      )
      .then(() => {
        setDisplaySuccess(true);
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
    <div className="">
      <ReactHelment title="Techskill - FAQ" />
      <div className="px-6 lg:px-12 lg:py-6 lg:flex justify-between items-center">
        <div className="lg:w-[40%]">
          <img src={PuzzleMan} alt="puzzle man" />
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-[24px] lg:text-[40px] font-gilroyBold">
            Frequently asked questions
          </h1>
          <p className="text-grey">
            Question you might ask about our products and services.
          </p>

          <div className="mt-4 lg:mt-10 w-full">
            {Faque.map((faq) => (
              <div
                key={faq.q}
                className="py-6 border-b-[0.5px] border-grey cursor-pointer"
              >
                <div
                  className="flex items-center justify-between"
                  onClick={() => handleOpenTray(faq.q)}
                >
                  <h3 className="font-gilroyBold text-lg pr-8">{faq.q}</h3>
                  {selected === faq.q ? (
                    <ChevronUp className="text-grey" size={18} />
                  ) : (
                    <ChevronDown className="text-grey" size={18} />
                  )}
                </div>
                {selected === faq.q && (
                  <p
                    className="text-sm text-grey pr-6 mt-2"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-[25px] font-gilroyBold">
              Still have questions ?
            </h2>
            <p className="text-grey">
              Can’t find the answer you are looking for? Contact our customer
              service
            </p>

            <Dialog onOpenChange={setOpen} open={open}>
              <DialogTrigger>
                <Button size="lg" className="my-8">
                  Contact us
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-black text-[24px] font-gilroyBold mt-2">
                    Contact us
                  </DialogTitle>
                </DialogHeader>
                {displaySuccess ? (
                  <>
                    <SuccessMessage
                      title="Message sent"
                      description="We have received your request successfully. We will get in touch with you soon"
                    />{' '}
                    <Button onClick={() => setOpen(false)}>Close</Button>
                  </>
                ) : (
                  <ContactUsForm
                    handleSubmit={handleSubmit}
                    setIsSubmitting={setIsSubmitting}
                    isSubmitting={isSubmitting}
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
