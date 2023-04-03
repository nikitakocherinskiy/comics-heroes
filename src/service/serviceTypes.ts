export interface IResponse {
  code: number;
  status: string;
  data: IChars;
  etag: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
}

export interface IChars {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharData[];
}

export interface ICharData {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: IRead;
  series: IRead;
  events: IRead;
  urls: IUrls[];
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IRead {
  available: number;
  collectionURI: string;
  items: IReadItem[];
}

interface IReadItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface IUrls {
  type: string;
  url: string;
}
