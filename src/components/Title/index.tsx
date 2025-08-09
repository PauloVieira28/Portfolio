import { Title as TitleStyled } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleStyled fontSize={props.fontSize}>{props.children}</TitleStyled>
)

export default Title
