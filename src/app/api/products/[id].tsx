import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../app/data/products';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  // Find product
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(product);
};

export default handler;