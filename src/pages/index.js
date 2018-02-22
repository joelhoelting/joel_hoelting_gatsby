import React from 'react';
import Title from '../components/Title';
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
        <Title />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
