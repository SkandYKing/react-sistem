import './index.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function Authorization() {
  return (
    <div className="wrapper clear">
     <Header />
      <div className="content p-30">
        <div className="contentBLockAuto mb-40">
            <div className='wrapperAuto'>
                <div className='autoBlock'>
                    <h1 className='autoH'>Авторизация</h1>
                    <input type="text" placeholder='Логин'/><br/>
                    <input type="text" placeholder='Пароль'/><br/>
                    <button>Войти</button>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Authorization;
