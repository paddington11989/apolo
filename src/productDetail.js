// src/ProductDetail.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BARCODE } from './queries';

const ProductDetail = ({ barcodeId }) => {
  const { loading, error, data } = useQuery(GET_BARCODE, {
    variables: { id: barcodeId },
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  const barcode = data.barcode;

  return (
    <div>
      <h1>{barcode.title}</h1>
      <p>{barcode.description}</p>
      <p>Цена: {barcode.sellingPrice}₽</p>
      <p>Скидка: {barcode.discountedPrice}₽</p>
      <p>Стоимость: {barcode.cost}₽</p>
      <p>Создано: {new Date(barcode.createdAt).toLocaleDateString()}</p>
      <p>Теги: {barcode.tags.join(', ')}</p>
      <p>Характеристики: {barcode.characteristic}</p>
      
      <h2>Категория: {barcode.category.name}</h2>
      {barcode.category.parent && (
        <p>Родительская категория: {barcode.category.parent.name}</p>
      )}

      <h3>Изображения:</h3>
      <div>
        {barcode.images.map(image => (
          <img key={image.id} src={image.url} alt={barcode.title} style={{ width: '200px', marginRight: '10px' }} />
        ))}
      </div>

      <h3>Размеры:</h3>
      <ul>
        {barcode.sizes.edges.map(({ node }) => (
          <li key={node.id}>{node.name}: {node.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
