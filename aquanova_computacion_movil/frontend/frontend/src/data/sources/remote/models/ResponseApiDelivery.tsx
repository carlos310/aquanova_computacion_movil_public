export interface ResponseApiDelivery<T> {
  success: boolean;
  message: string;
  data: T;
}
