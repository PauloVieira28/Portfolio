import styled from 'styled-components'
import { ParagraphStyled } from '../../components/Paragraph/styles'

export const Description = styled(ParagraphStyled)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemedButton = styled.button`
  padding: 8px;
  border-radius: 12px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
