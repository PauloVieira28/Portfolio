import { useEffect, useState } from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styles'

type Lists = {
  id: number
  name: string
  html_url: string
}

const Projects = () => {
  const [lists, setLists] = useState<Lists[]>([])

  useEffect(() => {
    fetch(
      'https://api.github.com/users/PauloVieira28/repos?sort=created&per_page=6'
    )
      .then((response) => response.json())
      .then((data) => setLists(data))
      .catch((error) => console.error('Erro ao buscar repositórios:', error))
  }, [])
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        {lists.map((list) => (
          <li key={list.id}>
            <Project name={list.name} html_url={list.html_url} />
          </li>
        ))}
      </List>
    </section>
  )
}

export default Projects
