import Joi from 'joi';

const variantValidationSchema = Joi.object({
  type: Joi.string().required().trim().messages({
    'any.required': 'Variant type is required.',
    'string.empty': 'Variant type is required.',
  }),
  value: Joi.string().required().trim().messages({
    'any.required': 'Variant value is required.',
    'string.empty': 'Variant value is required.',
  }),
});

const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().required().messages({
    'any.required': 'Quantity is required.',
  }),
  inStock: Joi.boolean().required().messages({
    'any.required': 'Stock is required.',
  }),
});

const productValidationSchema = Joi.object({
  name: Joi.string().required().trim().messages({
    'any.required': 'Product name is required.',
    'string.empty': 'Product name is required.',
  }),
  description: Joi.string().required().trim().messages({
    'any.required': 'Description is required.',
    'string.empty': 'Description is required.',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required.',
  }),
  category: Joi.string().required().trim().messages({
    'any.required': 'Category is required.',
    'string.empty': 'Category is required.',
  }),
  tags: Joi.array().items(Joi.string().required().trim()).required().messages({
    'any.required': 'Tags are required.',
    'array.base': 'Tags must be an array.',
    'array.empty': 'Tags are required.',
  }),
  variants: Joi.array().items(variantValidationSchema).required().messages({
    'any.required': 'Variants are required.',
    'array.base': 'Variants must be an array.',
    'array.empty': 'Variants are required.',
  }),
  inventory: inventoryValidationSchema.required().messages({
    'any.required': 'Inventory is required.',
  }),
});

export default productValidationSchema;
