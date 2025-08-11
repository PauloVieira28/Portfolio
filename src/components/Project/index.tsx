import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph type="secondary">Lista de tarefas feita com VueJS</Paragraph>
    <LinkBotton>Visualizar</LinkBotton>
  </Card>
)

export default Project
