import type { NextPage } from 'next';
import Layout from '@appWebsite/components/common/Layout';
import MembershipDashboard from '@appWebsite/components/dashboard/MembershipDashboard';
import RewardPoints from '@appWebsite/components/dashboard/RewardPoints';
import Giveaways from '@appWebsite/components/dashboard/Giveaways';

const Dashboard: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <div className="flex">
        <div className="w-full">
          <div className="mb-5">
            <MembershipDashboard />
          </div>
          <RewardPoints />
        </div>
        <div className="pl-5">
          <Giveaways />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
