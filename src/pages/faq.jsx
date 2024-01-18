import PuzzleMan from '@/assets/image/puzzle-man.png';
import Footer from '@/components/footer';
import ReactHelment from '@/components/helmet';
import { Button } from '@/components/ui/button';
import { Faque } from '@/config/dataa';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const handleOpenTray = (id) => {
    if (selected !== id) {
      setSelected(id);
    } else {
      setSelected(null);
    }
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
                    data-aos="fade-up"
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
            <Button size="lg" className="my-8">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
