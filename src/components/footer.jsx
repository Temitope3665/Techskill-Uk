import Logo from '@/assets/icons/logo-black.png';
import { footerData } from '@/config/dataa';

const Footer = () => {
  return (
    <div className="bg-yellow px-6 lg:px-12 py-6">
      <img src={Logo} alt="logo" width={100} />

      <div className="grid grid-cols-2 md:grid-cols-3 text-[#1D1E20] mt-8 gap-x-8 md:gap-x-16 text-xs lg:text-sm">
        <div>
          <p className="font-gilroyBold mb-2">Company</p>
          {footerData.company.map((com) => (
            <p key={com.title} className="py-2 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
        <div>
          <p className="font-gilroyBold mb-2">Our Courses</p>
          {footerData.courses.map((com) => (
            <p key={com.title} className="py-2 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
        <div>
          <p className="font-gilroyBold mb-2">Our Contact</p>
          {footerData.contact.map((com) => (
            <p key={com.title} className="py-2 font-gilroyMd">
              {com.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
