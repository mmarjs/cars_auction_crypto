import { FC } from 'react';
import { MemebershipType } from '@appWebsite/types';
import IconButton from '@appWebsite/components/common/IconButton';
import Image from '@appWebsite/components/common/Image';
import PointBadge from '@appWebsite/components/common/PointBadge';
import Table, { TableRow, TableCol } from '@appWebsite/components/common/Table';
import SummaryTag from './SummaryTag';

const MembershipDashboard: FC = () => {
  const cols: string[] = [
    'Membership ID',
    'MembershipLevel',
    'Daily point rate',
    'Total points',
    '',
  ];
  const rows: MemebershipType[] = [
    {
      id: '0001',
      level: 'Gold',
      points: {
        daily: 30,
        total: 5000,
      },
    },
    {
      id: '4325',
      level: 'Gold',
      points: {
        daily: 30,
        total: 25000,
      },
    },
    {
      id: '2345',
      level: 'Gold',
      points: {
        daily: 30,
        total: 5000,
      },
    },
  ];

  const renderRow = (row: MemebershipType) => {
    return (
      <TableRow>
        <TableCol>{row.id}</TableCol>
        <TableCol>
          <span className="text-warning">{row.level}</span>
        </TableCol>
        <TableCol>
          <PointBadge point={row.points.daily} />
        </TableCol>
        <TableCol>
          <PointBadge point={row.points.total} />
        </TableCol>
        <TableCol align="right">
          <IconButton className="w-6 h-6">
            <Image
              src="/images/icons/ellipsis_vertical.svg"
              width={24}
              height={24}
            />
          </IconButton>
        </TableCol>
      </TableRow>
    );
  };

  return (
    <div className="bg-black rounded-5 overflow-hidden">
      <div className="flex justify-between items-center p-5 border-b border-dark mb-1.5">
        <div className="flex flex-col text-lg leading-5.5">
          <span className="font-medium text-white mb-1.5">
            Membership Dashboard
          </span>
          <span className="text-secondary">May - July</span>
        </div>
        <div className="flex">
          <SummaryTag
            name="Total tokens"
            value={3}
            icon="/images/icons/group.svg"
            className="mr-5"
          />
          <SummaryTag
            name="Total points"
            value={30500}
            icon="/images/icons/star.svg"
          />
        </div>
      </div>
      <Table cols={cols} rows={rows} renderRow={renderRow} />
    </div>
  );
};

export default MembershipDashboard;
