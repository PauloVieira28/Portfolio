import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemedButton, SidebarContainer } from './styles'

type Props = {
  themeChange: () => void
}

const SideBar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Paulo Cesar</Title>
        <Paragraph type="secondary" fontSize={16}>
          PauloVieira28
        </Paragraph>
        <Description type="main" fontSize={14}>
          Engenheiro Full Stack
        </Description>
        <ThemedButton onClick={props.themeChange}>Trocar tema</ThemedButton>
      </SidebarContainer>
    </aside>
  )
}

export default SideBar
