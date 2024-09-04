import axios from 'axios';
import { ENDPOINTS } from '../../constatnts/apiAddress';
import { AuthRes, UserRes } from '../../types/authTypes';
import { privateInstance, publicInstance } from '../axios';

// Auth

export const signUp = async (email: string, password: string, name: string): Promise<AuthRes> => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.signUp,
      data: {
        email,
        password,
        name,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string): Promise<AuthRes> => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.signIn,
      data: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const signUpWithProvider = async (name: string, token: string, redirectUri: string, provider: string) => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.signUpWithProvider(provider),
      data: {
        name,
        token,
        redirectUri,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const signInWithProvider = async (token: string, redirectUri: string, provider: string) => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.signInWithProvider(provider),
      data: {
        token,
        redirectUri,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

// OAuth
export const setOauthApps = async (provider: string, appKey: string) => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.setOauthApps,
      data: {
        provider,
        appKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

// user

export const getAllUsers = async (): Promise<UserRes> => {
  try {
    const response = await privateInstance({
      method: 'GET',
      url: ENDPOINTS.getAllUsers,
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const checkDuplicateEmail = async (email: string) => {
  try {
    const response = await publicInstance({
      method: 'POST',
      url: ENDPOINTS.checkDuplicateEmail,
      data: {
        email,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 409) {
        return error.response.data;
      }
    }
    throw error;
  }
};
