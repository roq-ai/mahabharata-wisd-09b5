import { UserInterface } from 'interfaces/user';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface BookmarkInterface {
  id?: string;
  casual_reader_id: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  content?: ContentInterface;
  _count?: {};
}

export interface BookmarkGetQueryInterface extends GetQueryInterface {
  id?: string;
  casual_reader_id?: string;
  content_id?: string;
}
