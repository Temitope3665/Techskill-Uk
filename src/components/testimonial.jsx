const Testimonial = ({ image, name, review, position }) => {
  return (
    <div className="border-grey border border-[0.5] rounded-[16px] p-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="" width={40} />
        <div className="ml-4">
          <p className="text-[16px] font-semiBold">{name}</p>
          <p className="text-[12px] text-grey">{position}</p>
        </div>
      </div>
      <p className="text-[12px] text-grey mt-3">{review}</p>
    </div>
  );
};

export default Testimonial;
