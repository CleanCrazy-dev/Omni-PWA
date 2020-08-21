import { BaseModel } from "./BaseModel";
interface IProductModelProps {
  name: string;
  images: {
    url: string;
  }[];
  price: {
    currencyIso: string;
    value: string;
  };
  isFavorite: boolean;
}

export class ProductModel extends BaseModel<IProductModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "product-detail";
}
