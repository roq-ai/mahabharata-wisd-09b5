import { BookmarkInterface } from 'interfaces/bookmark';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  body: string;
  educator_id: string;
  created_at?: any;
  updated_at?: any;
  bookmark?: BookmarkInterface[];
  user?: UserInterface;
  _count?: {
    bookmark?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  educator_id?: string;
}
