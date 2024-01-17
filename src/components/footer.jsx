import Logo from '@/assets/icons/logo-black.png';
import { footerData } from '@/config/dataa';

const Footer = () => {
  return (
    <div className="bg-yellow p-6 md:p-12">
      <img src={Logo} alt="logo" width={100} />

      <div className="grid grid-cols-2 md:grid-cols-3 text-[#1D1E20] mt-16 gap-x-8 md:gap-x-16">
        <div>
          <p className="font-gilroyBold mb-4">Company</p>
          {footerData.company.map((com) => (
            <p key={com.title} className="py-2 md:py-3 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
        <div>
          <p className="font-gilroyBold mb-4">Our Courses</p>
          {footerData.courses.map((com) => (
            <p key={com.title} className="py-2 md:py-3 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
        <div>
          <p className="font-gilroyBold mb-4">Our Contact</p>
          {footerData.contact.map((com) => (
            <p key={com.title} className="py-2 md:py-3 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
