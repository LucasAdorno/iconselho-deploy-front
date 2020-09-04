import React, { useEffect, useState } from 'react';
import { Container, ChartBar } from './styles';

function ProfileCard({dados}) {

  const [newNat, setNewNat] = useState([]);
  let att = [];

  useEffect(() => {
    dados.relativeNat.map(cod => {
      if (cod === 'OG') att.push('Grande área (OG)');
      if (cod === 'OY') att.push('Cientificas (OY)');
      if (cod === 'OZ') att.push('Artisticas (OZ)');
      if (cod === 'OH') att.push('Humanisticas (OH)');
      return setNewNat(att);
    })
  }, [att, dados.relativeNat])

  return (
    <Container>
      <header id="profile-card-header">
        <h1 id="profile-card-header-text">Resumo</h1>
      </header>
      <div id="profile-card-content">
        <div id="types-components">
          <h1 className="types-components-percent">
            Obrigatórias (OB): {dados.percentObg}%</h1>
          <h1 className="types-components-percent">
            {newNat[0] + ': ' + dados.percentArts}%</h1>
          <h1 className="types-components-percent">
            {newNat[2] + ': ' + dados.percentCientific}%</h1>
          <h1 className="types-components-percent">
            {newNat[1] + ': ' + dados.percentHumanity}%</h1>
          <h1 className="types-components-percent">
            Livres (LV): {dados.percentFree}%</h1>
        </div>
        <div id="chart">
          <ChartBar size={dados.percentObg} bgcolor='#E38627'>
            <h4>OB</h4>
          </ChartBar>
          <ChartBar size={dados.percentArts} bgcolor='#C13C37'>
            <h4>{dados.relativeNat[0]}</h4>
          </ChartBar>
          <ChartBar size={dados.percentCientific} bgcolor='#33e3ee'>
            <h4>{dados.relativeNat[2]}</h4>
          </ChartBar>
          <ChartBar size={dados.percentHumanity} bgcolor='#6A2135'>
            <h4>{dados.relativeNat[1]}</h4>
          </ChartBar>
          <ChartBar size={dados.percentFree} bgcolor='#33ee66'>
            <h4>LV</h4>
          </ChartBar>
        </div>
      </div>
      <div id="footer-profile-card">
        <h1 id="footer-profile-card-text">Você possui {dados.totalCh}h de 2040h</h1>
        <h1 id="footer-profile-card-text">Você precisa de {dados.disciplinesRemain} disciplinas de 68h para formar</h1>
      </div>
    </Container>
  );
}

export default ProfileCard;