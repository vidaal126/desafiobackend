export class CreateCartDto {
  userId: number;
  description?: string;
  items: {
    productId: number;
    quantity: number;
    unitPrice: number;
    discount?: number;
  }[];
}
