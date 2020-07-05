import gql from "graphql-tag";

export const createPost = gql`
  mutation($title: String!, $content: String!, $author: String!) {
    createPost(title: $title, content: $content, author: $author) {
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
  mutation($id: String!, $author: String!) {
    deletePost(id: $id, author: $author) {
      result
    }
  }
`;

export const updatePost = gql`
  mutation($id: String!, $title: String!, $content: String!, $author: String!) {
    updatePost(id: $id, title: $title, content: $content, author: $author) {
      result
    }
  }
`;
