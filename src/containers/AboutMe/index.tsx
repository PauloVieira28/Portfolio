import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const AboutMe = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      recusandae amet illum libero ipsum aut qui tempora esse dignissimos
      temporibus error pariatur eos dicta corrupti saepe, totam quis omnis
      voluptate!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=PauloVieira28&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PauloVieira28&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default AboutMe
