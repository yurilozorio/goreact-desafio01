import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.post.avatar} nome={props.post.nome} tempo={props.post.tempo} />
    <p>{props.post.conteudo}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
    conteudo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
