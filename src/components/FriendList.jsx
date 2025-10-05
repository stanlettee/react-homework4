import styles from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return <ul className={styles.list}>
        {
          friends.map((friend) => {
            console.log(friend)
            return <li className={styles.item}>
                <span className={`${styles.status} ${friend.isOnline ? styles.online : styles.offline}`}></span>
                <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{friend.name}</p>
        </li>
          })
        }

    </ul>
}