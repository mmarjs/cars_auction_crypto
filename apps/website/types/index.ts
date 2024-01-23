import React from 'react';

export interface RouteType {
  label: string;
  hint?: string;
  url: string;
  icon: React.ReactNode;
}

export interface UserType {
  name: string;
  email: string;
  avatar: string;
}

export interface MemebershipType {
  id: string;
  level: string;
  points: {
    daily: number;
    total: number;
  };
}

export interface RewardPointType {
  name: string;
  icon: React.ReactNode;
}

export interface GiveawayType {
  name: string;
  avatar: React.ReactNode;
  value: number;
  max: number;
}

export interface LuxuryCategoryType {
  point: number;
  avatar: React.ReactNode;
}

export interface LuxuryType {
  name: string;
  avatar: React.ReactNode;
}

export interface FilterTagType {
  id: string;
  name: string;
}

export interface IAction {
  type: string
  payload?: any
}

export interface IState {
	logged: boolean
}