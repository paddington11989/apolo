// src/queries.js
import { gql } from '@apollo/client';

export const GET_BARCODE = gql`
  query Barcode($id: ID!) {
    barcode(id: $id) {
      id
      barcodeValue
      title
      description
      deleted
      sellingPrice
      slug
      archived
      createdAt
      mute
      discountedPrice
      cost
      tags
      characteristic
      category {
        id
        name
        slug
        icon
        icon1
        isActive
        prioritization
        inTrend
        lft
        rght
        treeId
        level
        parent {
          id
          name
          slug
          icon
          icon1
          isActive
          prioritization
          inTrend
          lft
          rght
          treeId
          level
        }
      }
      images {
        id
        url
      }
      sizes {
        edges {
          node {
            id
            name
            value
          }
        }
      }
    }
  }
`;
