import SuccessIcon from '@/assets/icons/success-icon.png';

const SuccessMessage = ({ title, description }) => {
    return (
        <div className="w-full text-center flex justify-center text-primary">
        <div className="w-full">
          <img
            src={SuccessIcon}
            alt="success"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-[24px] mt-4 font-gilroyBold">
            {title || 'Successfully booked'}
          </h1>
          <p>{description || 'Event has been added to your calendar'}</p>
        </div>
      </div>
    )
};

export default SuccessMessage;