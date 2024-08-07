import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 678px) {
    max-width: 678px;
    height: auto;
  }
`

export const Main = styled.main`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: ${colors.black};
    font-size: 40px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
  }

  @media (min-width: 1600px) {
    h3 {
      font-size: 65px;
    }
  }

  @media (max-width: 678px) {
    padding-top: 3vh;

    h3 {
      font-size: 40px;
    }
  }
`

export const Aside = styled.aside`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ul {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px 30px;
    flex-wrap: wrap;

    li {
      width: 42px;
      height: 42px;

      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all linear 0.2s;

        &:hover {
          transition: all linear 0.2s;
          transform: scale(1.3);
        }

        user-drag: none; /* Bloqueia o arrastar da imagem */
        -webkit-user-drag: none; /* Bloqueia o arrastar da imagem no WebKit */
        user-select: none; /* Bloqueia a seleção do texto da imagem */
        -webkit-user-select: none; /* Bloqueia a seleção do texto da imagem no WebKit */
        -moz-user-select: none; /* Bloqueia a seleção do texto da imagem no Firefox */
        -ms-user-select: none; /* Bloqueia a seleção do texto da imagem no Internet Explorer */
      }
    }
  }

  @media (min-width: 1600px) {
    height: 50%;

    ul {
      li {
        width: 55px;
        height: 55px;
      }
    }
  }

  @media (max-width: 678px) {
    padding-top: 3vh;
    width: 80%;

    ul {
      li {
        width: 35px;
        height: 35px;
      }
    }
  }
`

export const HoveredIconName = styled.div`
  margin-bottom: 5%;
  font-size: 24px;
  color: ${colors.black};
  font-weight: 500;
  font-family: 'Chakra Petch', sans-serif;
  background-color: ${colors.white};
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  @media (min-width: 1600px) {
    margin-bottom: 1%;
  }

  @media (max-width: 678px) {
    margin: 5vh 0;
  }
`
