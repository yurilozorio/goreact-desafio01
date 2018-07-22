import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import '../styles/style.scss';

import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        nome: 'Diego Schell Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/20953957?s=400&v=4',
        tempo: 'há 3 min',
        conteudo:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.',
      },
      {
        id: 2,
        nome: 'Rubia Savolksi',
        avatar: 'https://avatars0.githubusercontent.com/u/20953956?s=400&v=4',
        tempo: 'há 3 min',
        conteudo:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. ',
      },
      {
        id: 3,
        nome: 'Mr. Mustache',
        avatar: 'https://avatars0.githubusercontent.com/u/20953955?s=400&v=4',
        tempo: 'há 3 min',
        conteudo:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="postList">{posts.map(post => <Post key={post.id} post={post} />)}</div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
