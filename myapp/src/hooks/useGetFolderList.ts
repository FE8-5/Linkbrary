import { useEffect, useState } from 'react';
import { getAllFolders } from '../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../types/folderTypes';

const useGetFolderList = (updateLinks?: boolean, updateFolders?: boolean, deleteFolderState?: boolean) => {
  const [data, setData] = useState<GetAllFoldersRes[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getAllFolders();
      setData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateLinks, updateFolders, deleteFolderState]);

  return { data, setData, isLoading, error };
};

export default useGetFolderList;
