function Header() {
  return (
    <header className="p-30">
      <div className="headerLeft">
        <div className="headerLogo">
          <img src='/img/logo2.png' alt='логотип'/>
        </div>
        <div className="headerInfo">
          <h3>Система мониторинга</h3>
          <p>Автоматическое диагностирование оборудования </p>
        </div>
      </div>
      <ul className="headerRight pt-15">
        <li>Войдите в аккаунт</li>
      </ul>
     </header>
  );
}

export default Header;