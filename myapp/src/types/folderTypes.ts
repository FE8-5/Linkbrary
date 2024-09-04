export interface GetAllFoldersRes {
  id: number;
  name: string;
  linkCount?: number;
  createdAt: string;
}

export type OtherFolderRes = Omit<GetAllFoldersRes, 'likeCount'>;
