import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemedButton, SidebarContainer } from './styles'

const SideBar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Paulo Cesar</Title>
        <Paragraph type="secondary" fontSize={16}>
          PauloVieira28
        </Paragraph>
        <Description type="main" fontSize={12}>
          Engenheiro Full Stack
        </Description>
        <ThemedButton>Trocar tema</ThemedButton>
      </SidebarContainer>
    </aside>
  )
}

export default SideBar
