import React from 'react';
import "./Footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <MDBFooter className='bg-green text-center text-white'>
      <MDBContainer className='p-4 pb-0' >
        <section className='mb-4' >
          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#3b5998',width:'45px',height:'45px' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#55acee',width:'45px',height:'45px'  }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter'style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#dd4b39',width:'45px',height:'45px'  }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google'style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>
          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#ac2bac',width:'45px',height:'45px'  }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram'style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#0082ca',width:'45px',height:'45px'  }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in'style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-2'
            style={{ backgroundColor: '#333333',width:'45px',height:'45px'  }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github'style={{fontSize:'20px' }} className='py-3' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:www.akefast.com
      </div>
    </MDBFooter>
  );

}

export default Footer


