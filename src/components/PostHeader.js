import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="postHeaderData">
      <h1>{props.nome}</h1>
      <p>{props.tempo}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
};

export default PostHeader;
