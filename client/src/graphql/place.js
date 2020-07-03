import gql from "graphql-tag";

export const getPlace = gql`
  query getPlace($id: String!) {
    getPlace(id: $id) {
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
    }
  }
`;
