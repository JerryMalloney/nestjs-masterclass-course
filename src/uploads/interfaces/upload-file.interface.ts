import { fileTypes } from '../eums/file-types.enum';

export interface UploadFile {
  name: string;
  path: string;
  type: fileTypes;
  mime: string;
  size: number;
}
