import { useEffect, useState } from 'react';
import { deleteFolder } from '../apis/LinksPageApi/forderApi';

const useDeleteFolder = (folderId: number | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (folderId) {
      setIsLoading(true);
      setError(null);
      try {
        await deleteFolder(folderId);
      } catch (error) {
        setError(error as Error);
        console.error('error가 발생하였습니다.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, fetchData, error };
};
export default useDeleteFolder;
