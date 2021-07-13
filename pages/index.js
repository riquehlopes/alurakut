import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar() {
  const githubUser = 'riquehlopes'
  return(
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{borderRadius: '8px'}} />
    </Box>
  )
}


export default function Home() {
  const PessoasFavoritas = [
    'felipefialho',
    'marcobrunodev',
    'omariosouto',
    'peas',
    'juunegreiros',
    'rafaballerini'  
  ]

  return (
  <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className='title'>
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet/>
          
        </Box>
      </div>
      <div className="profilerelationsArea" style={{ gridArea: 'profilerelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 class='smallTitle'>
            Pessoas da comunidade ({PessoasFavoritas.length})
          </h2>
          <ul>
            {PessoasFavoritas.map((itemAtual) => {
              return(
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
  </>
  )
}
