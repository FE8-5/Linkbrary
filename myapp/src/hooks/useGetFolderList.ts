import { useEffect, useState } from 'react';
import { getAllFolders } from '../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../types/folderTypes';

const useGetFolderList = () => {
  const [data, setData] = useState<GetAllFoldersRes[]>();
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
  }, []);

  return { data, setData, isLoading, error };
};

export default useGetFolderList;
