import './index.scss';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import Navigation from './components/Navigation';
import Create from './components/Create';

const arr = [
    { name1: '1', name2: 'АН', name3: '3', name4: '49', name5: '04/03/2022', name6: '14:00', name7: 'Исслед.герметичности э/ж', name8: 'Исслед.до КРС'},
    { name1: '2', name2: 'АН', name3: '3', name4: '49', name5: '11/10/2022', name6: '10:30', name7: 'Освоение после ПРС', name8: 'Освоение'},
    { name1: '3', name2: 'АН', name3: '5', name4: '83Н', name5: '06/05/2022', name6: '09:30', name7: 'Ожидание ГТМ при КРС', name8: 'Геолог. ограничен.'},
    { name1: '4', name2: 'АН', name3: '5', name4: '85', name5: '05/04/2022', name6: '08:00', name7: 'Ожидание исследованний при ТРС', name8: 'Геолог. ограничен'},
    { name1: '5', name2: 'АН', name3: '4', name4: '100', name5: '06/10/2022', name6: '12:45', name7: 'Освоение после ПРС', name8: 'Освоение'},
    { name1: '6', name2: 'АН', name3: '4', name4: '101', name5: '19/10/2022', name6: '05:30', name7: 'Освоение после ПРС', name8: 'Освоение'},
    { name1: '7', name2: 'АН', name3: '3', name4: '49', name5: '04/03/2022', name6: '14:00', name7: 'Исслед.герметичности э/ж', name8: 'Исслед.до КРС'},
    { name1: '8', name2: 'АН', name3: '3', name4: '49', name5: '11/10/2022', name6: '10:30', name7: 'Освоение после ПРС', name8: 'Освоение'},
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
                        <th>Дата</th>
                        <th>Время</th>
                        <th>Причина простоя</th>
                        <th>Группа простоев</th>
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
                            name7={obj.name7}
                            name8={obj.name8}
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
