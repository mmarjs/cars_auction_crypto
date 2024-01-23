// import React, { useEffect, useState, useMemo, useContext } from 'react';
import React, { useContext, useMemo, useReducer, Dispatch, useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import ApiClient from '@appClubhouse/lib/services/api-client';
import { signin, logout } from '@appClubhouse/store/actions/auth.actions';
import { WalletContext } from './context';
import Reducer from '../Reducer'
import { IAction, IState } from '../../types';
import { initialState } from '../State';

export interface WalletContextType {
  loading: boolean;
  wallet: string;
  signer: string;
  chainId: number;
  error: string;
  connect: () => Promise<void>;
  verify(wallet: string, signer: any, chainId: number): Promise<void>;
  state: IState;
  dispatch: Dispatch<IAction>
}

function getDomain(chainId) {
  return {
    name: 'MetaFans',
    version: '1.0.0',
    chainId,
    verifyingContract: '0x6250b989ecf7cb82c7892E1CEA604eD813423635',
  };
}

const types = {
  Holder: [
    {
      name: 'address',
      type: 'address',
    },
    {
      name: 'deadline',
      type: 'uint256',
    },
  ],
};

export const WalletProvider = (props: any) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [provider, setProvider] = useState<any>();
  const [chainId, setChainId] = useState<number | null>();
  const [signer, setSigner] = useState<any>();
  const [wallet, setWallet] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(loggerReducer, initialState)
//   const dispatch = useDispatch();

  useEffect(() => {
    const hasMetamask = !!(window as any).ethereum?.isMetaMask;

    if (hasMetamask) {
        setProvider((window as any).ethereum);
    } else {
      const walletConnectProvider = new WalletConnectProvider({
        infuraId: '5096709d4c4e4a84ac098d548d8ec1c0',
        qrcodeModalOptions: {
          mobileLinks: ['metamask', 'trust'],
        },
      });
      setProvider(walletConnectProvider);
    }

    setIsMetaMaskInstalled(hasMetamask);
  }, []);

  useEffect(() => {
    if (provider) {
      init(provider);
    }
  }, [provider]);

  const setAccount = async (account: any) => {
    if (account.endsWith('eth')) {
      setWallet(await (window as any).ethereum.resolveName(account));
    } else {
      setWallet(ethers.utils.getAddress(account) as any);
    }
  };

  async function connect() {
    setLoading(true);

    if (wallet) {
      return;
    }

    try {
      if (isMetaMaskInstalled) {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      } else {
        await provider.enable();
      }

      await init(provider, true);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }

  async function getAccount(web3Provider: ethers.providers.Web3Provider) {
    const accounts = await web3Provider.listAccounts();
    return accounts[0];
  }

  async function init(provider: any, shouldVerify = false) {
    const web3Provider = new ethers.providers.Web3Provider(
      isMetaMaskInstalled ? (window as any).ethereum : provider,
    );
    const account = await getAccount(web3Provider);
    const { chainId } = await web3Provider.getNetwork();

    if (account) {
      const _signer: any = web3Provider.getSigner();

      setAccount(account);
      setSigner(_signer);
      setChainId(Number(chainId) as any);
      setProviderListeners();

      if(shouldVerify) {
        await verify(account, _signer, chainId);
      }
    } else {
      setWallet(null);
      setSigner(null);
    }
  }

  function setProviderListeners() {
    provider.on('accountsChanged', (accounts: string[]) => {
      const ethersProvider = new ethers.providers.Web3Provider((window as any).ethereum);

      if (accounts && accounts?.length) {
        setAccount(accounts[0]);
        setSigner(ethersProvider.getSigner() as any);
      } else {
        setWallet(null);
        setSigner(null);
      }
    });
    provider.on('chainChanged', (chainId: number) => setChainId(chainId));
  }

  async function verify(_wallet: string, _signer: any, _chainId: number) {
    try {
      setLoading(true);

      const deadline = ethers.BigNumber.from(
        Math.round(new Date().setDate(new Date().getDate() + 1).valueOf() / 1_000),
      );
    //   const signature = await _signer._signTypedData(getDomain(_chainId), types, { address: _wallet, deadline });

    //   const response = await ApiClient.post('/authentication/authenticate', {
    //     payload: JSON.stringify({
    //       address: _wallet,
    //       deadline,
    //       signature,
    //     }),
    //   });

    //   dispatch(signin(response.data.accessToken, response.data.refreshToken));
    } catch (err) {
    //   dispatch(logout());
    } finally {
      setLoading(false);
    }
  }

  const contextValue = useMemo(
    () => ({
      loading,
      wallet,
      signer,
      chainId,
      connect,
      verify,
      state,
      dispatch
    }),
    [loading, wallet, signer, chainId, isMetaMaskInstalled, provider, state, dispatch],
  );
  return <WalletContext.Provider value={contextValue} {...props} />;
}

const logger = (Reducer: any) => {
    return (state: IState, action: IAction) => {
      // console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state)
      // console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action)
      // console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', AppReducer(state, action))
  
      return Reducer(state, action)
    }
  }
  
const loggerReducer = logger(Reducer)

export const useWalletContext = () => useContext<WalletContextType>(WalletContext);