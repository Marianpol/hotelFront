import React from 'react';
import './App.css';
import Room from './components/Room/Room.js'

function App() {
  return (<div className = "rooms">
      <Room
      id='1'
      img="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBlf9Zf.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1427&y=1122">
        <h1>1 - Osobowy</h1>
        <p>Pokoje mają nowoczesną i ciepłą aranżację wnętrza, pozostają one w pamięci naszych Gości jako namiastka domu poza domem.
        Hotel zapewnia bezpłatny dostęp do internetu WI-FI.</p>
        <h2>Wyposażenie pokoju</h2>
        <ul>
          <li>Lodówka</li>
          <li>Suszarka do włosów</li>
          <li>Klimatyzacja</li>
          <li>Telefon</li>
          <li>TV</li>
          <li>Biurko</li>
          <li>Łazienka z prysznicem</li>
          <li>Ręczniki</li>
          <li>Internet w pokoju</li>
        </ul>
      </Room>

      <Room
      id='2'
      img="https://fthmb.tqn.com/R5CjZrWUBXBTVj48-MBx3PFIh5U=/3000x2000/filters:fill(auto,1)/hotel_room-627892060-5a7a30d1642dca00370179e6.jpg">
        <h1>2 - Osobowy</h1>
        <p>Pokój 2 osobowy mniejszy z łóżkiem małżeńskim o szerokości 140 cm.
            Nowoczesna i ciepła aranżacja wnętrza pokoi sprawia, że pozostają one w pamięci naszych Gości jako namiastka domu poza domem.
            Hotel zapewnia bezpłatny dostęp do internetu WI-FI.</p>
        <h2>Wyposażenie pokoju</h2>
        <ul>
          <li>Lodówka</li>
          <li>Suszarka do włosów</li>
          <li>Klimatyzacja</li>
          <li>Telefon</li>
          <li>TV</li>
          <li>Sejf</li>
          <li>Biurko</li>
          <li>Minibar</li>
          <li>Łazienka z prysznicem</li>
          <li>Pokój do pracy i sypialnia</li>
          <li>Internet w pokoju</li>
        </ul>
        </Room>
      <Room
      id='3'
      img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/31c58c37227475.57399844be087.jpg">
        <h1>3 - Osobowy</h1>
        <p>Pokoje mają przyjazną aranżację wnętrz oraz ciepłą i stonowaną kolorystykę.
          Wyposażone są w dwa pojedyncze łóżka lub łoże małżeńskie oraz rozkładaną sofę.
          Wszystkie mają balkon i są usytuowane od strony jeziora.
          Odpowiedni dobór elementów wystroju stwarza w nich kameralny i sprzyjający relaksowi nastrój.</p>
        <h2>Wyposażenie pokoju</h2>
        <ul>
          <li>Lodówka</li>
          <li>Suszarka do włosów</li>
          <li>Klimatyzacja</li>
          <li>Telefon</li>
          <li>TV</li>
          <li>Sejf</li>
          <li>Biurko</li>
          <li>Minibar</li>
          <li>Łazienka z prysznicem</li>
          <li>Pokój do pracy i sypialnia</li>
          <li>Internet w pokoju</li>
        </ul>
        </Room>
      <Room
      id='4'
      img="https://i.insider.com/5db76378045a313748376347?width=1100&format=jpeg">
        <h1>4 - Osobowy</h1>
        <p>Z okien narożnych apartamentów Signature roztacza się wspaniały widok. Ich wykwintny styl to esencja luksusu. 
          Zarówno w głównej sypialni, jak w i oddzielnym salonie najnowocześniejsze wyposażenie płynnie łączy się ze współczesnym wystrojem, dzięki czemu pobyt w apartamencie staje się niezapomnianym doznaniem.
          Biblioteczka i duże biurko zapewniają gościom doskonałe warunki do swobodnej lektury, pracy czy po prostu relaksu. Dodatkowym walorem jest przestronna i elegancka łazienka, której ściany ozdabia marmurowa panorama Warszawy.</p>
        <h2>Wyposażenie pokoju</h2>
        <ul>
          <li>Lodówka</li>
          <li>Przestronny salon</li>
          <li>Klimatyzacja</li>
          <li>Telefon</li>
          <li>TV</li>
          <li>Sejf</li>
          <li>Biurko</li>
          <li>Minibar</li>
          <li>Marmurowa łazienka z osobną wanną i kabiną prysznicową</li>
          <li>Pokój do pracy i sypialnia</li>
          <li>Internet w pokoju</li>
          <li>Nielimitowany dostęp do Raffles Spa z siłownią, sauną, basemen rekreacyjnym i łaźnią parową</li>
          <li>Nieodpłatny transfer limuzyną z hotelu na lotnisko Chopina w Warszawie (WAW)</li>
        </ul>
      </Room>
    </div>
    );
}

export default App;
