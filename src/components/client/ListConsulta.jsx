import styles from "./List.module.css"


function ListConsulta({ title, data}) {
    function ListItem({name, info}) {
    return (
        <div className={styles.listaBG}>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    )
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            {data.map((item, i) => (<ListItem key={i} name={item.name} info={item.info}></ListItem>))}
        </div>
    )
}

export default ListConsulta;