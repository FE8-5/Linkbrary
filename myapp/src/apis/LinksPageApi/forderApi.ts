import { ENDPOINTS } from '../../constatnts/apiAddress';
import { GetAllFoldersRes, OtherFolderRes } from '../../types/folderTypes';
import { replaceUrlParams } from '../../utils/apiUtils';
import instance from '../axios';

export const getAllFolders = async (): Promise<GetAllFoldersRes> => {
  try {
    const response = await instance({
      method: 'GET',
      url: ENDPOINTS.getAllFolders,
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const addFolder = async (folderName: string): Promise<OtherFolderRes> => {
  try {
    const response = await instance({
      method: 'Post',
      url: ENDPOINTS.addFolder,
      data: {
        name: folderName,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const getFolder = async (folderId: number): Promise<OtherFolderRes> => {
  try {
    const response = await instance({
      method: 'GET',
      url: replaceUrlParams(ENDPOINTS.getFolder, { folderId }),
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const deleteFolder = async (folderId: number) => {
  try {
    const response = await instance({
      method: 'DELETE',
      url: replaceUrlParams(ENDPOINTS.deleteFolder, { folderId }),
    });
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};

export const updateFolder = async (folderId: number, name: string): Promise<OtherFolderRes> => {
  try {
    const response = await instance({
      method: 'PUT',
      url: replaceUrlParams(ENDPOINTS.updateFolder, { folderId }),
      data: {
        name,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
};
