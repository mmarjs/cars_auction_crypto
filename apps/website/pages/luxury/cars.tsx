import React from 'react';
import { useRouter } from 'next/router';
import Col from '@appWebsite/components/common/Col';
import Image from '@appWebsite/components/common/Image';
import Layout from '@appWebsite/components/common/Layout';
import Row from '@appWebsite/components/common/Row';
import Filter from '@appWebsite/components/luxury/Filter';
import Search from '@appWebsite/components/luxury/Search';
import { LuxuryType } from '@appWebsite/types';
import Luxury from '@appWebsite/components/luxury/Luxury';

const LuxuryCars = () => {
  const router = useRouter();
  const luxuries: LuxuryType[] = [
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model Y',
      avatar: (
        <Image src="/images/luxury/luxury/2.png" width={156} height={75} />
      ),
    },
    {
      name: 'Tesla Model X',
      avatar: (
        <Image src="/images/luxury/luxury/3.png" width={155} height={102} />
      ),
    },
    {
      name: 'Tesla Model S',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model Y',
      avatar: (
        <Image src="/images/luxury/luxury/2.png" width={156} height={75} />
      ),
    },
    {
      name: 'Tesla Model X',
      avatar: (
        <Image src="/images/luxury/luxury/3.png" width={155} height={102} />
      ),
    },
    {
      name: 'Tesla Model S',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model Y',
      avatar: (
        <Image src="/images/luxury/luxury/2.png" width={156} height={75} />
      ),
    },
    {
      name: 'Tesla Model X',
      avatar: (
        <Image src="/images/luxury/luxury/3.png" width={155} height={102} />
      ),
    },
    {
      name: 'Tesla Model S',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
    {
      name: 'Tesla Model S Plaid',
      avatar: (
        <Image src="/images/luxury/luxury/1.png" width={152} height={63} />
      ),
    },
  ];

  return (
    <Layout title="Luxury Rental" onBack={() => router.push('/luxury')}>
      <div className="bg-black rounded-5 px-5 pt-6.5 pb-2.5">
        <div className="mb-4">
          <Search />
        </div>
        <div className="mb-1.5">
          <Filter />
        </div>
        <Row spacing={5}>
          {luxuries.map((luxury: LuxuryType, index: React.Key) => (
            <Col key={index} className="w-full lg:w-1/5 py-2.5">
              <Luxury {...luxury} />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default LuxuryCars;
