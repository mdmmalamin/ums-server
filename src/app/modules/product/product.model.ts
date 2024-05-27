import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

// 2. Create a Schema corresponding to the document interface.
const variantSchema = new Schema<Variant>({
  type: { type: String, required: [true, 'Variant type is required.'] },
  value: { type: String, required: [true, 'Variant value is required.'] },
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: [true, 'Quantity is required.'] },
  inStock: { type: Boolean, required: [true, 'Stock is required.'] },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: [true, 'Product name is required.'], unique: true},
  description: { type: String, required: [true, 'Description is required.'] },
  price: { type: Number, required: [true, 'Description is required.'] },
  category: { type: String, required: [true, 'Category is required.'] },
  tags: [{ type: String, required: [true, 'Tags is required.'] }],
  variants: [
    { type: variantSchema, required: [true, 'Variants is required.'] },
  ],
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is required.'],
  },
});

// 3. Create a Model.
export const ProductModel = model<Product>('Product', productSchema);
