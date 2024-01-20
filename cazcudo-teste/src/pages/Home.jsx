import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
    
        <Main />
        <Row rowID='1' title='Novidades' fetchURL={requests.requestUpcoming} />        
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Melhores avaliados' fetchURL={requests.requestTopRated} />
        <Row rowID='6' title='Terror' fetchURL={requests.requestHorror} />
        <Row rowID='7' title='Comédia' fetchURL={requests.requestComedy} />
        <Row rowID='8' title='Romance' fetchURL={requests.requestRomance} />        
        <Row rowID='9' title='Ação' fetchURL={requests.requestAction} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        
    </>
  )
}

export default Home