export interface Conversion {
  id: number;
  conversionFrom: string;
  conversionTo: string;
  rateFrom: number;
  rateTo: number;
  fromValue: number;
  toValue: number;
  ecbDate: string;
  createdDate: string;
  updatedDate: string;
  authorId: number;
  authorUsername: string;
}
