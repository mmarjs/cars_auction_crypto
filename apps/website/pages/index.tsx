import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '@appWebsite/components/common/Button';
import Image from '@appWebsite/components/common/Image';
import { useWalletContext } from '@appWebsite/providers/wallet-provider';
import { shorter } from '@appWebsite/utils/web3';

const ConnectWallet: NextPage = () => {
  const router = useRouter();

  const { 
    connect,
    wallet,
  } = useWalletContext();

  return (
    <div>
      <Image
        src="/images/connect_wallet/bg.png"
        className="w-full h-screen fixed top-0 left-0"
        layout="fill"
        objectFit='cover'
      />
      <div className="relative z-10 flex justify-center items-center pt-[115px] pl-20">
        <div className="pr-3">
          <Image
            src="/images/logo.png"
            width={207}
            height={77}
            className="mb-2 -ml-2.5"
          />
          <Image
            src="/images/text_logo.png"
            width={442}
            height={36}
            className="mb-18"
          />
          {/* <Button onClick={() => router.push('/signup')}> */}
          <Button onClick={connect} >
            <Image
              src="/images/icons/wallet.svg"
              width={16}
              height={13}
              className=" mr-2"
            />
            <span className="text-dark">{wallet 
              ? shorter(wallet) 
              : 'Connect Wallet' }</span>
          </Button>
        </div>
        <Image
          src="/images/connect_wallet/wallet.png"
          width={478}
          height={520}
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
