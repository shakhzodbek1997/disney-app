import React from 'react';
import styled from 'styled-components';


const Detail = (props) => {
  return (
    <Container>
        <Background>
            <img 
                alt=''
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg"
            />
        </Background>

        <ImageTitle>
            <img 
                alt=''
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg"
            />
        </ImageTitle>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc();
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img{
    width: 100vw; 
    height: 100vh;

    @media (max-width: 768px) {
        width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
export default Detail;