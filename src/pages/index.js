import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
