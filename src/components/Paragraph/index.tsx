import { Paragraph as ParagraphStyled } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
}

const Paragraph = ({ children, type = 'main' }: Props) => (
  <ParagraphStyled type={type}>{children}</ParagraphStyled>
)

export default Paragraph
