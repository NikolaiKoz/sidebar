import React from 'react';
import './App.css';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising } from 'react-icons/fc';


function App() {

  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Hola',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '1',
      label: 'Hola',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '1',
      label: 'Hola',
      icon: FcAdvertising,
      url: '/'
    }
  ];

  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: "Jose Luis",
    title: 'Studient',
    photoUrl: "",
    url: '/'
  }


  return (
    <div>
      <SideBarMenu items={items} card = {card}/>
    </div>
  );
}

export default App;
