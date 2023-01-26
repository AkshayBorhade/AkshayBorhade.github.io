// import logo from './logo.svg';
import './App.css';
import { Dna } from 'react-loader-spinner';
import AnimatedText from 'react-animated-text-content';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <div className='app-dna-loader'>
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
      <div className='app-animated-text'>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Stay Connected... Site is under construction.
        </AnimatedText>
      </div>
      <div className='app-social'>
        <MDBBtn className='m-1' floating style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/akshay.borhade.754' target='_blank'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn className='m-1' floating style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/akshay_borhade97/' target='_blank'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn className='m-1' floating style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/akshay-borhade-8b2525108' target='_blank'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
      </div>
    </div>
  );
}

export default App;
