import { useState } from 'react';
import { updateFolder } from '../apis/LinksPageApi/forderApi';

const useEditFolder = (folderId: number | undefined, editValue: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (folderId) {
      setIsLoading(true);
      setDisabled(true);
      setError(null);
      try {
        const response = await updateFolder(folderId, editValue);
        return response;
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
        setDisabled(false);
      }
    }
  };
  return { isLoading, fetchData, disabled };
};
export default useEditFolder;
