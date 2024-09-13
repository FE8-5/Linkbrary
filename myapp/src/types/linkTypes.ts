export interface LinkRes {
  id: number;
  url: string;
  title: string;
  description: string;
  createdAt?: string;
  favorite: boolean;
  imageSource: string;
}
export interface ItemLinks {
  totalCount: number;
  list: LinkRes[];
}
