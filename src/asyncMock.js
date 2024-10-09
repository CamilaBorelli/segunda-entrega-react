const products = [
  {
    id: 1,
    title: 'Maceta ceramica Hiromi alto Blanco',
    price: '35.030',
    categoryId: 'maceta',
    description: 'Medidas | 14x14x18 cm',
    img: 'https://plantasfaitful.com.ar/wp-content/uploads/2023/05/Faitful-viveros-maceta-hiromi-alto-blanco-1.jpg',
  },
  {
    id: 2,
    title: 'Maceta cónica melamina',
    price: '2.015',
    categoryId: 'maceta',
    description: 'Medidas | 12x8x10 cm',
    img: 'https://plantasfaitful.com.ar/wp-content/uploads/2021/11/Plantas-Faitful-Maceta-Melamina-1-1.jpg',
  },
  {
    id: 3,
    title: 'Seaphortia XL',
    price: '26.490',
    categoryId: 'interior',
    description: 'Es una espectacular palmera que aporta un toque tropical a cualquier rincón. Es una de las palmeras más elegidas para el interior de las casas gracias a su elegante porte y sus hojas verde oscuro y brillante.',
    img: 'https://plantasfaitful.com.ar/wp-content/uploads/2022/02/Faitful-Viveros-Plantas-Interior-Seaphortia-E7-1.jpg',
  },
  {
    id: 4,
    title: 'Dracaena Marginata XL',
    price: '26.950',
    categoryId: 'exterior',
    description: 'La Dracaena Marginata necesita luz indirecta brillante. Se desarrolla mejor en un sustrato bien drenado y ligeramente ácido.',
    img: 'https://plantasfaitful.com.ar/wp-content/uploads/2023/03/Faitful-Viveros-Macetas-Rotomoldeadas-Cilindros.jpg',
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProductsId = (id) => {
  return products.find((product) => product.id == id);
};

export const getProductsCategory = (categoryId) => {
  return products.filter((products) => products.categoryId === categoryId);

};