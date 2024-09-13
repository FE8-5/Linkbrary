import { ENDPOINTS } from '../../constatnts/apiAddress';
import { ItemLinks, LinkRes } from '../../types/linkTypes';
import { privateInstance, publicInstance } from '../axios';

export const getLinksByFolder = async (folderId: number, page: number, pageSize: number): Promise<ItemLinks> => {
  try {
    const response = await publicInstance({
      method: 'GET',
      url: ENDPOINTS.getLinksByFolder(folderId),
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

export const getAllLinks = async (page: number, pageSize: number, search: string | null): Promise<ItemLinks> => {
  try {
    const response = await privateInstance({
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
    const response = await privateInstance({
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
    const response = await privateInstance({
      method: 'DELETE',
      url: ENDPOINTS.deleteLink(linkId),
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const setFavoriteLink = async (linkId: number, favorite: boolean): Promise<LinkRes> => {
  try {
    const response = await privateInstance({
      method: 'PUT',
      url: ENDPOINTS.setFavoriteLink(linkId),
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

export const getFavorites = async (page: number, pageSize: number): Promise<ItemLinks> => {
  try {
    const response = await privateInstance({
      method: 'GET',
      url: ENDPOINTS.getFavorites,
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

export const editLink = async (linkId: number, url: string): Promise<LinkRes> => {
  try {
    const response = await privateInstance({
      method: 'PUT',
      url: ENDPOINTS.putLink(linkId),
      data: {
        url,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};
