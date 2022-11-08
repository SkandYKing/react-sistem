import styles from './Create.module.scss';

function Create(props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.create}>
                <div className={styles.createBlock}>
                    <h3>Новая заявка</h3>
                    <div className={styles.createLab}>
                        <label>НГДУ</label>
                        <select>
                            <option value="">Выберите из списка</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                        <label>Цех</label>
                        <select>
                            <option value="">Выберите из списка</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                        <label>Скважина</label>
                        <select>
                            <option value="">Выберите из списка</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                        <label>Задача</label>
                        <select>
                            <option value="">Выберите из списка</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                    <div className={styles.createButton}>
                        <div className={styles.inputButton3}>
                            <input onClick={props.onClose} type="button" value='Отменить'/>
                        </div>
                        <div className={styles.inputButton4}>
                            <input type="button" value='Создать заявку'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Create;