import React from 'react';
import Radium from 'radium';

// Styles

const styles = {
  strokeWidth: '3',
  flexDiv: {
    width: '100%',
    flex: '1 0 auto',
    '@media (max-width: 600px)': {
      maxWidth: '80%'
    }
  },
  desktop: {
    '@media (max-width: 600px)': {
      display: 'none',
    }
  },
  mobile: {
    '@media (min-width: 600px)': {
      display: 'none',
    }
  },
  subtitle: {
    fontFamily: 'Code Light',
    fontSize: '3rem',
    color: '#24255d',
    margin: '20px 0',
    textAlign: 'center',
    '@media (max-width: 700px)': {
      fontSize: '1.6rem',
    },
  }
};

// Animations

const drawLine = Radium.keyframes({
  '50%': {
    fill: 'transparent'
  },
  '100%': {
    fill: '#24255d',
    strokeDashoffset: 0
  }
});

const fadeSubtitle = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  '20%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0%)'
  }
});

const animations = {
  drawLine: {
    // Use a placeholder animation name in `animation`
    animation: 'x 2s linear forwards',
    // Assign the result of `keyframes` to `animationName`
    animationName: drawLine,
    fill: 'transparent',
    strokeDasharray: 1000,
    strokeDashoffset: 1000
  },
  drawLine2: {
    // Use a placeholder animation name in `animation`
    animation: 'x 2s linear forwards',
    // Assign the result of `keyframes` to `animationName`
    animationName: drawLine,
    fill: 'transparent',
    strokeDasharray: 1500,
    strokeDashoffset: 1500
  },
  subtitle: {
    opacity: 0,
    animation: 'x 1s ease 2s forwards',
    animationName: fadeSubtitle,
    transform: 'translateY(20%)'
  }
};

const Title = () => {
  return (
    <div style={styles.flexDiv}>
      <svg id="desktop-logo" style={[styles.desktop, styles]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1356.8 181.5">
        <title>Joel Hoelting</title>
        <path style={animations.drawLine} id="J" d="M89.4,119.5c0,44.4-36.5,64.7-82.4,64.7V162.6c33.9,0,60.9-13.5,60.9-43.1V56.3H27.5V34.9H89.4Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="O" d="M120.2,55.4a75.5,75.5,0,0,1,107.8,0,76.8,76.8,0,0,1,0,108,75.5,75.5,0,0,1-107.8,0,76.8,76.8,0,0,1,0-108Zm92.5,15.4A55,55,0,0,0,174,54.6a53.6,53.6,0,0,0-38.2,16.2,54.6,54.6,0,0,0,0,77.3A53.6,53.6,0,0,0,174,164.3a55,55,0,0,0,38.6-93.5Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="E" d="M284.6,162.6H354v21.6H262.8V34.9h91V56.5H284.6V98.5h67.7v21.8H284.6Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="L" d="M386.2,162.6h70.2v21.6H364.7V34.9h21.6Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="H" d="M562.2,97.9h63.2v-63h21.8V184.2H625.4V119.3H562.2v64.9H540.6V34.9h21.6Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="O-2" data-name="O" d="M657.2,109.4a77.6,77.6,0,0,1,22.2-54,75.5,75.5,0,0,1,107.8,0,76.8,76.8,0,0,1,0,108,75.5,75.5,0,0,1-107.8,0A77.6,77.6,0,0,1,657.2,109.4Zm130.5,0a54.7,54.7,0,0,0-54.4-54.9A53.6,53.6,0,0,0,695,70.8a54.6,54.6,0,0,0,0,77.3,53.6,53.6,0,0,0,38.2,16.2,54.7,54.7,0,0,0,54.4-54.9ZM714.4,7.6c-6.6,0-11.7,4.3-11.7,10.7s5.1,10.2,11.7,10.2,12.4-5.1,12.4-10.2S721.7,7.6,714.4,7.6Zm39.3,0c-6.6,0-12,4.3-12,10.7s5.3,10.2,12,10.2,12.4-5.1,12.4-10.2S761.2,7.6,753.7,7.6Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="L-2" data-name="L" d="M845.5,162.6h70.2v21.6H823.9V34.9h21.6Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="T" d="M933.7,184.8V54.8H888.4V34.7h111.9V54.8H955.3v130Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="I" d="M1084.9,56.3h-27.8V162.6h27.8v21.6h-77.1V162.6h27.8V56.3h-27.8V34.9h77.1Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="N" d="M1094.5,184.2V34.5l16.7.2L1183.9,140V34.7h21.4V184.2h-17.1L1116,79.8V184.2Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine} id="G" d="M1336.6,88.3c-6-24.1-29-32.9-48-32.9-29.3,0-51.9,22.8-51.9,54.2s22.6,54.9,51.9,54.9c18.4,0,38-8.5,47-30.3h-55.3V112.6h80.5c-1.1,12.6-2.1,20.9-4.1,25.8v-.2c-10.2,28.6-41,47-68.1,47-41.8,0-73.4-31.6-73.4-75.6s32.2-75.8,73.4-75.8c28.6,0,63.2,14.7,71.1,54.4Z" transform="translate(-5.5 -6.1)" fill="none" stroke="#24255d" />
      </svg>
      <svg id="mobile-logo" style={[styles.mobile, styles]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288.2 622.7">
        <title>Joel Hoelting</title>
        <path style={animations.drawLine2} id="J" d="M453,210.9c0,69.6-57.2,101.4-129.1,101.4V278.5c53.2,0,95.3-21.1,95.3-67.6v-99H356V78.4h97Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="O" d="M501.2,110.5a118.6,118.6,0,0,1,84.3-35.5c33.1,0,62.9,13.7,84.6,35.5S705,162.1,705,195.2s-13.7,62.9-34.8,84.6a118.3,118.3,0,0,1-168.9,0c-21.1-21.7-34.8-51.5-34.8-84.6S480.1,132.3,501.2,110.5Zm144.9,24.1a86.1,86.1,0,0,0-60.6-25.4,84,84,0,0,0-59.9,25.4,85.6,85.6,0,0,0,0,121.1,84,84,0,0,0,59.9,25.4,86.1,86.1,0,0,0,60.6-146.5Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="E" d="M758.8,278.5H867.6v33.8H724.7V78.4H867.2v33.8H758.8v65.9H864.9v34.1H758.8Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="L" d="M918.1,278.5h110.1v33.8H884.3V78.4h33.8Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="H" d="M78.9,556.6h99V457.9h34.1V691.8H178V590.1h-99V691.8H45.1V457.9H78.9Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="O-2" data-name="O" d="M227.8,574.7c0-33.1,13.7-62.9,34.8-84.6a118.6,118.6,0,0,1,84.3-35.5c33.1,0,62.9,13.7,84.6,35.5s34.8,51.5,34.8,84.6-13.7,62.9-34.8,84.6a118.3,118.3,0,0,1-168.9,0C241.5,637.6,227.8,607.8,227.8,574.7Zm204.4,0a85.7,85.7,0,0,0-85.3-86A84,84,0,0,0,287,514.1a85.6,85.6,0,0,0,0,121.1,84,84,0,0,0,59.9,25.4,85.7,85.7,0,0,0,85.3-86ZM317.5,415.1c-10.4,0-18.4,6.7-18.4,16.7,0,8,8,16.1,18.4,16.1s19.4-8,19.4-16.1C336.9,421.8,328.8,415.1,317.5,415.1Zm61.6,0c-10.4,0-18.7,6.7-18.7,16.7,0,8,8.4,16.1,18.7,16.1s19.4-8,19.4-16.1C398.4,421.8,390.7,415.1,379,415.1Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="L-2" data-name="L" d="M522.9,658H633v33.8H489.1V457.9h33.8Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="T" d="M661.1,692.8V489H590.1V457.6H765.4V489H694.9V692.8Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="I" d="M897.9,491.4H854.4V658h43.5v33.8H777.2V658h43.5V491.4H777.2V457.9H897.9Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="N" d="M913,691.8V457.2l26.1.3,114.1,164.9V457.6h33.5V691.8h-26.8L946.8,528.2V691.8Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
        <path style={animations.drawLine2} id="G" d="M1292.4,541.6c-9.4-37.8-45.5-51.5-75.3-51.5-45.8,0-81.3,35.8-81.3,85s35.5,86,81.3,86c28.8,0,59.5-13.4,73.6-47.5H1204V579.7h126.1c-1.7,19.7-3.3,32.8-6.4,40.5v-.3c-16.1,44.8-64.2,73.6-106.7,73.6-65.6,0-115.1-49.5-115.1-118.4s50.5-118.8,115.1-118.8c44.8,0,99,23.1,111.4,85.3Z" transform="translate(-43.6 -73.6)" fill="none" stroke="#24255d" />
      </svg>
      <h1 style={[styles.subtitle, animations.subtitle]}>
        Full Stack Web Developer
      </h1>
    </div>
  );
};

export default Radium(Title);
