import * as Style from './styles'

export const Main = ({
  title = 'React Avançado',
  description = 'ReactJs, NextJs e Styled Components'
}) => (
  <Style.Wrapper>
    <Style.Logo
      src="img/logo.png"
      alt="Imagem de um átomo e texto React avançado escrito ao lado"
    />
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="img/hero-illustration.svg"
      alt="Uma pessoa sentada em uma cardeira de frente para um computador com códigos na tela"
    />
  </Style.Wrapper>
)
