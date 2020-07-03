import gql from "graphql-tag";

export const getFilteredPlaces = gql`
  query getFilteredPlaces(
    $category: [String!]
    $price: String
    $distance: String
    $checked: Boolean
    $currentX: String
    $currentY: String
  ) {
    getFilteredPlaces(
      category: $category
      price: $price
      distance: $distance
      checked: $checked
      currentX: $currentX
      currentY: $currentY
    ) {
      p_img
      menu {
        m_name
        m_price
      }
      p_name
      p_id
      p_x
      p_y
    }
  }
`;

/* Place Schema
  p_description
      p_img
      menu {
        m_name
        m_price
      }
      tags
      p_name
      p_address
      p_phone
      p_id
      p_x
      p_y
*/
