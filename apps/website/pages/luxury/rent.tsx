import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '@appWebsite/components/common/Layout';
import Image from '@appWebsite/components/common/Image';
import Performance from '@appWebsite/components/luxury/Performance';
import LargeLuxury from '@appWebsite/components/luxury/LargeLuxury';
import BookingForm from '@appWebsite/components/luxury/BookingForm';

const LuxuryRent: NextPage = () => {
  const router = useRouter();

  const detailInfo = {
    logo: <Image src="/images/luxury/rent/logo.png" width={176} height={18} />,
    avatar: (
      <Image src="/images/luxury/rent/car.png" width={326} height={156} />
    ),
    point: 8000,
    location: 'Kingston upon Hull',
    date: '15/06/2022',
    range: 396,
    mph: 1.99,
    topSpeed: 200,
    power: 1020,
  };

  return (
    <Layout title="Luxury Rental" onBack={() => router.push('/luxury/cars')}>
      <div className="flex justify-between items-center bg-black rounded-5 px-9 py-10.5">
        <Performance
          range={detailInfo.range}
          mph={detailInfo.mph}
          topSpeed={detailInfo.topSpeed}
          power={detailInfo.power}
        />
        <div className="flex">
          <div className="px-9">
            <LargeLuxury
              logo={detailInfo.logo}
              avatar={detailInfo.avatar}
              point={detailInfo.point}
              location={detailInfo.location}
              date={detailInfo.date}
            />
          </div>
          <BookingForm />
        </div>
      </div>
    </Layout>
  );
};

export default LuxuryRent;
