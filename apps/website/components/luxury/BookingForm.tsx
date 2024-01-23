import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@appWebsite/components/common/Button';
import Image from '@appWebsite/components/common/Image';
import TextField from '@appWebsite/components/common/TextField';
import DatePicker from '@appWebsite/components/common/DatePicker';

const BookingForm = () => {
  const router = useRouter();
  const [isBooked, setIsBooked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (date: Date, e: React.SyntheticEvent<any>) => {
    setForm({ ...form, date });
  };

  const handleBook = () => {
    if (isBooked) {
      router.push('/luxury');
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="relative w-[412px]">
      {isBooked ? (
        <div className="flex flex-col items-center py-20">
          <Image
            src="/images/luxury/rent/success.png"
            width={100}
            height={100}
            className="mb-7.5"
          />
          <p className="font-bold text-5xl leading-[45px] text-warning mb-4">
            Booked
          </p>
          <p className="text-sm leading-5 text-secondary">
            Our manager will contact you.
          </p>
        </div>
      ) : (
        <div>
          <p className="font-bold text-5xl leading-[45px] text-warning mb-3">
            Get in touch.
          </p>
          <p className="text-sm leading-5 text-secondary">
            Please do not hesitate to contact us,
            <br /> we will be delighted to assist.
          </p>
          <div className="py-3.5">
            <TextField
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              icon={
                <Image src="/images/icons/user.svg" width={18} height={18} />
              }
            />
            <TextField
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              icon={
                <Image src="/images/icons/mail.svg" width={18} height={18} />
              }
            />
            <TextField
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => handleChange(e)}
              icon={
                <Image src="/images/icons/phone.svg" width={18} height={18} />
              }
            />
            <DatePicker
              variant="default"
              value={form.date}
              onChange={(date, e) => handleChangeDate(date, e)}
              placeholder="Dates for an appointment"
              icon={
                <Image
                  src="/images/icons/calendar.svg"
                  width={18}
                  height={18}
                />
              }
            />
          </div>
          <Button color="secondary" size="lg" className="mb-8">
            <Image src="/images/icons/brand_mark.svg" width={28} height={28} />
            <span className="text-xs leading-4 text-white ml-5">
              Book date on Calendly
            </span>
          </Button>
        </div>
      )}

      <Button
        size="lg"
        fullWidth
        className="absolute bottom-0 left-0"
        onClick={handleBook}
      >
        {isBooked ? 'Back to home page' : 'Book'}
      </Button>
    </div>
  );
};

export default BookingForm;
