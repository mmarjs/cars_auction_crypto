import React from 'react';
import type { NextPage } from 'next';
import Layout from '@appWebsite/components/common/Layout';
import Col from '@appWebsite/components/common/Col';
import Row from '@appWebsite/components/common/Row';
import Image from '@appWebsite/components/common/Image';
import Category from '@appWebsite/components/luxury/Category';
import { LuxuryCategoryType } from '@appWebsite/types';

const LuxuryHome: NextPage = () => {
  const items: LuxuryCategoryType[] = [
    {
      point: 12000,
      avatar: <Image src="/images/luxury/category/1.png" width={312} height={154} />,
    },
    {
      point: 8000,
      avatar: <Image src="/images/luxury/category/2.png" width={280} height={123} />,
    },
    {
      point: 4000,
      avatar: <Image src="/images/luxury/category/3.png" width={292} height={153} />,
    },
  ];

  return (
    <Layout title="Luxury Rental">
      <div className="bg-black rounded-5">
        <div className="px-5 py-7.5 border-b border-dark">
          <p className="font-medium text-lg leading-5.5 text-white mb-2">
            Lorem ipsum
          </p>
          <p className="text-base leading-5 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="p-5 pt-[113px]">
          <Row spacing={5}>
            {items.map((item: LuxuryCategoryType, index: React.Key) => (
              <Col key={index} className="w-full lg:w-1/3">
                <Category {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default LuxuryHome;
