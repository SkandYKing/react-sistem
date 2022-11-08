import styles from './Table.module.scss';

function Table(props) {
    return (
    <div className={styles.table}>
      <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
        <td>{props.name1}</td>
        <td>{props.name2}</td>
        <td>{props.name3}</td>
        <td>{props.name4}</td>
        <td>{props.name5}</td>
        <td>{props.name6}</td>
        <td>{props.name7}</td>
        </tr>
      </tbody>
      </table>
    </div>
    );
  }
  
export default Table;