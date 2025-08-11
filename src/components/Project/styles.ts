import styled from 'styled-components'
import themedDark from '../../themes/dark'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const LinkBotton = styled.a`
  color: ${(props) => props.theme.buttonColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.backgroundColorButton};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
