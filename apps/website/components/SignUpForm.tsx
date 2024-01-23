import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/common/Button';
import Image from '../components/common/Image';
import HookTextField from '../components/common/HookForm/HookTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSignUpForm  } from '@appWebsite/api/auth';

export interface SignUpFormType {
 firstName: string
 lastName: string
 email: string
 phone: string
}

const defaultValues: SignUpFormType = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup.string().required('Email is required!').email('Please enter a valid email!'),
  phone: yup.string().required('Phone number is required!'),
})

const SignUpForm = () => {
  const router = useRouter();
  
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const { mutateAsync, isLoading }  = useSignUpForm();

  const signUp = useCallback(async (formData) => {
    router.push('/dashboard');
    try {
      const res = await mutateAsync(formData);
      if(res){
        reset(defaultValues);
      }
    } catch (error) {
      alert(error);
    }
  }, [mutateAsync, reset, router])
  
  return (
    <form className="w-full max-w-[455px] flex flex-col bg-black border border-dark rounded-5 p-8 pb-[45px]" onSubmit={handleSubmit(signUp)}>
      <p className="font-semibold text-5xl text-warning leading-[58px] mb-3">
        Welcome
      </p>
      <p className="font-medium text-lg leading-5.5 text-secondary mb-9">
        Now create your profile
      </p>
      <div className="mb-4">
        <HookTextField
          name="firstName"
          type="text"
          placeholder="First name"
          control={control}
          errors={errors}
          icon={
            <Image
              src="/images/icons/user.svg"
              width={18}
              height={18}
            />
          }
        />
        <HookTextField
          name="lastName"
          type="text"
          placeholder="Last name"
          control={control}
          errors={errors}
          icon={
            <Image
              src="/images/icons/user.svg"
              width={18}
              height={18}
            />
          }
        />
        <HookTextField
          name="email"
          type="email"
          placeholder="Email"
          control={control}
          errors={errors}
          icon={
            <Image
              src="/images/icons/mail.svg"
              width={18}
              height={18}
            />
          }
        />
        <HookTextField
          name="phone"
          type="text"
          placeholder="Phone"
          control={control}
          errors={errors}
          icon={
            <Image
              src="/images/icons/phone.svg"
              width={18}
              height={18}
            />
          }
        />
      </div>
      <p className="text-xxs text-secondary mb-9 leading-3 tracking-theme">
        By clicking button below, you agree to our{' '}
        <Link href="/">
          <a className="text-[#67A1D0]">terms of use</a>
        </Link>{' '}
        and{' '}
        <Link href="/">
          <a className="text-[#67A1D0]">privacy policies</a>
        </Link>
      </p>
      <Button type="submit" className="self-end">
        Continue
      </Button>
    </form>
  );
};

export default SignUpForm;
