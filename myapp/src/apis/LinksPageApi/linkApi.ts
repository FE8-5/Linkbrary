import { ENDPOINTS } from '../../constatnts/apiAddress';
import { LinkRes } from '../../types/linkTypes';
import { replaceUrlParams } from '../../utils/apiUtils';
import instance from '../axios';

export const getLinksByFolder = async (folderId: string, page: number, pageSize: number): Promise<LinkRes> => {
  try {
    const response = await instance({
      method: 'GET',
      url: replaceUrlParams(ENDPOINTS.getLinksByFolder, { folderId }),
      params: {
        page,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const getAllLinks = async (page: number, pageSize: number, search: string): Promise<LinkRes> => {
  try {
    const response = await instance({
      method: 'GET',
      url: ENDPOINTS.getAllLinks,
      params: {
        page,
        pageSize,
        search,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const addLink = async (url: string, folderId: number): Promise<LinkRes> => {
  try {
    const response = await instance({
      method: 'POST',
      url: ENDPOINTS.addLink,
      data: {
        url,
        folderId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const deleteLink = async (linkId: number) => {
  try {
    const response = await instance({
      method: 'DELETE',
      url: replaceUrlParams(ENDPOINTS.deleteLink, { linkId }),
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const setFavoriteLink = async (linkId: number, favorite: boolean): Promise<LinkRes> => {
  try {
    const response = await instance({
      method: 'PUT',
      url: replaceUrlParams(ENDPOINTS.deleteLink, { linkId }),
      data: {
        favorite,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const getFavorites = async (): Promise<LinkRes> => {
  try {
    const response = await instance({
      method: 'GET',
      url: ENDPOINTS.getFavorites,
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};
