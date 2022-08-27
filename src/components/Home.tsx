import React from 'react';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import './Home.scss';
function Home() {
  return (
    <div className='container'>
        <Main></Main>
        <Sidebar/>
    </div>
  );
}

export default Home;
