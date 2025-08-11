import { ParagraphStyled } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'main', fontSize }: Props) => (
  <ParagraphStyled fontSize={fontSize} type={type}>
    {children}
  </ParagraphStyled>
)

export default Paragraph
