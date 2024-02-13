import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useState } from 'react';
import SuccessIcon from '@/assets/icons/success-icon.png';
import {
  availableTime,
  formatDate,
  formatDateToISO,
  handleClick,
} from '@/lib/utils';
import { Calendar } from './ui/calendar';
import { Clock4 } from 'lucide-react';
import { Separator } from './ui/separator';

const BookACall = ({ ctaTitle, callTitle }) => {
  const [open, setOpen] = useState(false);
  const [isBooked, setBooked] = useState(false);
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({ time: '', index: '' });

  const startDateTime =
    date && new Date(formatDateToISO(date) + 'T' + selectedTime.time);
  const endDateTime = date && new Date(startDateTime);
  endDateTime && endDateTime.setMinutes(startDateTime.getMinutes() + 30); // Add 30 minutes

  const event = {
    summary: callTitle,
    location: 'Google meet',
    description:
      'Speak to our advisory team for 15mins 1:1 introductory session for the requirement and other details',
    start: {
      dateTime: startDateTime,
      timeZone: 'Europe/London',
    },
    end: {
      dateTime: endDateTime,
      timeZone: 'Europe/London',
    },
    conferenceData: {
      createRequest: {
        requestId: '399xhjd902',
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
    attendees: [{ email: 'tope@techskill.uk' }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="lg:w-[50%] w-full mt-6">
          {ctaTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[405px] max-w-[90vw] lg:max-w-[60vw] h-[60vh] lg:h-fit overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-secondary font-gilroyBold text-[24px]">
            Book a session
          </DialogTitle>
          <DialogDescription>
            Book a call with Techskill. When you're done, click the save button.
          </DialogDescription>
        </DialogHeader>
        {!isBooked ? (
          <div className="lg:flex space-x-8 text-black">
            <div className="lg:w-[40%]">
              <h1 className="text-[32px] font-gilroyBold">{callTitle}</h1>
              <Separator />
              <div className="flex items-center py-3 gap-x-2 text-sm">
                <Clock4 size={16} /> 15mins
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png"
                  alt="google meet"
                  width={16}
                  height={16}
                />
                <p>Google meet</p>
              </div>

              <p className="mt-3 text-sm">
                Speak to our advisory team for 15mins 1:1 introductory session
                for the requirement and other details
              </p>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              fromDate={new Date()}
              className="rounded-md border w-fit my-8 lg:my-0"
            />

            <div className="lg:w-[10vw] h-[42vh] overflow-auto text-sm">
              <p className="text-base font-gilroyMd">
                {date ? formatDate(date) : formatDate(new Date())}
              </p>
              {availableTime.map((time, index) => (
                <div
                  className={`border rounded-lg p-2 text-center font-gilroyMd my-3 w-[90%] border-primary cursor-pointer trans ${
                    selectedTime.index === index
                      ? 'bg-primary text-white'
                      : ' text-primary'
                  }`}
                  key={time.time}
                  onClick={() =>
                    setSelectedTime({ time: time.convertedTime, index })
                  }
                >
                  <p>{time.time}</p>
                  <p>{time.spot} spot left</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
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
                Successfully booked
              </h1>
              <p>Event has been added to your calendar</p>
            </div>
          </div>
        )}

        <DialogFooter className="border-t pt-3">
          {!isBooked ? (
            <>
              <Button
                onClick={() => {
                  setOpen(false);
                  setBooked(false);
                }}
                variant="outline"
                className="border border-primary text-primary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!date || !selectedTime.time}
                onClick={() => handleClick(event, setBooked)}
              >
                Confirm booking
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                setOpen(false);
                setBooked(false);
              }}
              variant="outline"
              className="border border-primary text-primary"
            >
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookACall;
