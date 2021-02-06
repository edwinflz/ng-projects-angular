export enum ToastrTypes {
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
}

export interface Toastr {
  message: string;
  type: ToastrTypes;
  title?: string;
  justOne?: boolean;
  timeOut?: number;
}
