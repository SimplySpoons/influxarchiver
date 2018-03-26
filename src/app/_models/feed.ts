export class ArchivedFile {
  accountId: string;
  providerId: string;
  filename: string;
  provider: string;
  offset: number;
  start: number;
  end: number;
  full: boolean;
  fileIndex: number;
  totalElements: number;
  pageSize: number;
  pageNumber: number;
  headerMap: any;
  fileSize: number;
  fileList: any;
  delimiter: string;
  isLoading: boolean;
}
