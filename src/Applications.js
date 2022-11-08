import './index.scss';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import Navigation from './components/Navigation';
import Create from './components/Create';

const arr = [
    { name1: '1', name2: '2', name3: '3', name4: '4', name5: '5', name6: '6', name7: '7'},
    { name1: '11', name2: '22', name3: '33', name4: '44', name5: '55', name6: '66', name7: '77'},
    { name1: '111', name2: '222', name3: '333', name4: '444', name5: '555', name6: '666', name7: '777'},
    { name1: '1111', name2: '2222', name3: '3333', name4: '4444', name5: '5555', name6: '6666', name7: '7777'},
];

function Applications() {
    const [createOpened, setCreateOpened] = React.useState(false);
  return (
    <div className="wrapper clear">
        {createOpened ? <Create onClose={() => setCreateOpened(false)}/> : null}
        <Header />
        <div className="content p-30">
            <div className='container'>
                <Navigation />
                <div className="item-grid2">
                    <div className="sort">
                        <div className="inputDate">
                            <h5>Сортировать по дате:</h5>
                            <input type="date"/>
                        </div>
                        <div onClick={() => setCreateOpened(true)} className="inputButton search-block2 ">
                            <img height={20} width={20} src='img/plus.png' alt='+'/>
                            <input type="button" value='Создать'/>
                        </div>
                    </div>
                    <div className="contentBLock">
                        <div className="content__top">
                            <div className="categories">
                                <ul>
                                    <li className="active">Все</li>
                                    <li>С ошибкой</li>
                                    <li>В работе</li>
                                    <li>Исправленные</li>
                                </ul>
                            </div>
                        </div>
                        <div  className="search-block">
                            <img height={30} width={30} src='img/magnifying-glass.png' alt='Поиск'/>
                            <input placeholder='Поиск'></input>
                        </div>
                    </div>
                </div>
                <div className="item-grid1 contentBLock mb-40">
                </div>
                <section className="item-grid2">
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                        <th>№ заявки</th>
                        <th>НГДУ</th>
                        <th>Цех</th>
                        <th>№ скважины</th>
                        <th>Дата-Время</th>
                        <th>Площадь</th>
                        <th>Задача</th>
                        </tr>
                    </thead>
                    </table>
                </div>
                        {arr.map((obj) => (
                            <Table 
                            name1={obj.name1}
                            name2={obj.name2}
                            name3={obj.name3}
                            name4={obj.name4}
                            name5={obj.name5}
                            name6={obj.name6}
                            name7="7"
                            />
                        ))}
                
                </section>
            </div>
        </div>
      <Footer />
    </div>
  );
}


export default Applications;
