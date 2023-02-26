import React from 'react';
import './App.css';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising, FcAutomatic, FcChargeBattery, FcBullish, FcPlanner, FcComments, FcCustomerSupport, FcFlowChart, FcSearch, FcSettings } from 'react-icons/fc';
import profileImage from './assets/img-profile.png'


function App() {

  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Anuncios',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '2',
      label: 'Automatizacion',
      icon: FcAutomatic,
      url: '/'
    },
    {
      id: '3',
      label: 'Energia',
      icon: FcChargeBattery,
      url: '/'
    },
    {
      id: '4',
      label: 'Metricas',
      icon: FcBullish,
      url: '/'
    },
    {
      id: '5',
      label: 'Calendario',
      icon: FcPlanner,
      url: '/'
    },
    {
      id: '6',
      label: 'Comentarios',
      icon: FcComments,
      url: '/'
    },
    {
      id: '7',
      label: 'Soporte',
      icon: FcCustomerSupport,
      url: '/'
    },
    {
      id: '8',
      label: 'Organizacion',
      icon: FcFlowChart,
      url: '/'
    },
    {
      id: '9',
      label: 'Busqueda',
      icon: FcSearch,
      url: '/'
    },
    {
      id: '10',
      label: 'Configuraciones',
      icon: FcSettings,
      url: '/'
    },
  ];

  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: "Jose Luis",
    title: 'Studient',
    photoUrl: profileImage,
    url: '/'
  }


  return (
    <div>
      <SideBarMenu items={items} card = {card}/>
    </div>
  );
}

export default App;
