import styled from 'styled-components'
import { Props } from '.'

export const ParagraphStyled = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'main' ? props.theme.mainColor : props.theme.secondaryColor};
  line-height: 22px;
`
