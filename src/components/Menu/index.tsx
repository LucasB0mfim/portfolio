import VrGlasses from '../../assets/images/VrGlasses.png'
import marcoZero from '../../assets/images/portoDigital.jpg'

import * as S from './styles'

const Menu = () => (
  <>
    <S.Container id="sobre">
      <S.Image src={marcoZero} />
      <S.Main>
        <span>FULL STACK DEVELOPER </span>
        <p>Recife/PE</p>
      </S.Main>
      <S.Aside>
        <img src={VrGlasses} />
      </S.Aside>
    </S.Container>
  </>
)

export default Menu
