export interface IDiscountRequest {
  name: string;
  title: string;
  description: string;
  imagePath: string;
  data: string;
}

export interface IDiscountResponse extends IDiscountRequest {
  id: number;
}
