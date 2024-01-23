import React, { FC } from 'react';
import Col from '@appWebsite/components/common/Col';
import Image from '@appWebsite/components/common/Image';
import Row from '@appWebsite/components/common/Row';
import RewardCard from './RewardCard';
import { RewardPointType } from '@appWebsite/types';

const RewardPoints: FC = () => {
  const points: RewardPointType[] = [
    {
      name: 'Vechicles',
      icon: (
        <Image
          src="/images/dashboard/reward_points/1.png"
          width={208}
          height={103}
        />
      ),
    },
    {
      name: 'Tickets/Events',
      icon: (
        <Image
          src="/images/dashboard/reward_points/2.png"
          width={162}
          height={130}
        />
      ),
    },
    {
      name: 'Merch',
      icon: (
        <Image
          src="/images/dashboard/reward_points/3.png"
          width={132}
          height={143}
        />
      ),
    },
  ];
  return (
    <div className="bg-black rounded-5">
      <div className="px-5 py-6.5 border-b border-dark">
        <span className="font-medium text-lg leading-5.5 text-white">
          Reward Points
        </span>
      </div>
      <div className="p-5 pt-[87px]">
        <Row spacing={5}>
          {points.map((point: RewardPointType, index: React.Key) => (
            <Col key={index} className="w-full lg:w-1/3">
              <RewardCard {...point} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RewardPoints;
