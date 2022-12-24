import Product from "./product.interface"
import ProductModel from './product.model';
class Service {
    private product = ProductModel

    public async create(data: { name: string, desc: string, stock: number, price: number, img_path: string }): Promise<Product> {
        const json = await this.product.create(data);
        return json;
    }
    public async getAll(): Promise<Product[]> {
        const json = await this.product.find()
        return json
    }
}

export default Service