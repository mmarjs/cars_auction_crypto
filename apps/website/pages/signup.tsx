import type { NextPage } from 'next';
import Image from '@appWebsite/components/common/Image';
import SignUpForm from '@appWebsite/components/SignUpForm';

const SignUp: NextPage = () => {
  return (
    <div>
      <Image
        src="/images/signup/bg.png"
        className="w-full h-screen fixed top-0 left-0"
        layout="fill"
        objectFit='cover'
      />
      <div className="relative z-10 flex justify-center items-center pt-[132px] pl-10">
        <div className="pr-16">
          <SignUpForm />
        </div>
        <Image
          src="/images/signup/note.png"
          width={478}
          height={515}
        />
      </div>
    </div>
  );
};

export default SignUp;
