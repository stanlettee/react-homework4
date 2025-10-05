import styles from './Statistics.module.css'

export const Statistics = () => {
    return <div className={styles.box}>
        <div className={styles.div}>
            <h1 className={styles.title}>UPLOAD STATS</h1>
        </div>
        <ul className={styles.list}>
            <li id={styles.first} className={styles.item}>
                <p className={styles.text}>.docx</p>
                <p className={styles.percentage}> 32%</p>
            </li>
            <li id={styles.second} className={styles.item}>
                <p className={styles.text}>.pdf</p>
                <p className={styles.percentage}> 4%</p>                
            </li>
            <li id={styles.third} className={styles.item}>
                <p className={styles.text}>.mp3</p>
                <p className={styles.percentage}> 17%</p>                
            </li>
            <li id={styles.fourth} className={styles.item}>
                <p className={styles.text}>.psd</p>
                <p className={styles.percentage}> 47%</p>                
            </li>
        </ul>
    </div>
}