import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotton } from './styles'

type ProjectProps = {
  name: string
  html_url: string
}

const Project = ({ name, html_url }: ProjectProps) => (
  <Card>
    <Title>Projeto {name}</Title>
    <Paragraph type="secondary">{html_url}</Paragraph>
    <a href={html_url} target="_blank" rel="noopener noreferrer">
      <LinkBotton>Visualizar</LinkBotton>
    </a>
  </Card>
)

export default Project
