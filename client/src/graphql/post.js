import gql from "graphql-tag";

export const createPost = gql`
  mutation($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      c_title
      c_content
    }
  }
`;

export const getPosts = gql`
  query getPosts {
    getPosts {
      _id
      c_title
      c_content
      c_likes
      c_views
      createdAt
    }
  }
`;

export const getPost = gql`
  query getPost($id: String!) {
    getPost(id: $id) {
      _id
      c_title
      c_content
      c_likes
      c_views
      createdAt
    }
  }
`;

export const addLikes = gql`
  mutation($id: String!) {
    addLikes(id: $id) {
      _id
      c_title
      c_content
      c_likes
      c_views
      createdAt
    }
  }
`;

export const deletePost = gql`
  mutation($id: String!) {
    deletePost(id: $id) {
      result
    }
  }
`;

export const updatePost = gql`
  mutation($title: String!, $content: String!) {
    updatePost(title: $title, content: $content) {
      _id
      c_title
      c_content
      c_likes
      c_views
      createdAt
    }
  }
`;
