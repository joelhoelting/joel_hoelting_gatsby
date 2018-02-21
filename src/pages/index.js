import React from 'react';
import Logo from '../components/Logo';

var styles = {
  base: {
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

class IndexPage extends React.Component {

  render() {
    return (
      <div style={styles.base}>
        <Logo />
      </div>
    );
  }
}

export default IndexPage;
