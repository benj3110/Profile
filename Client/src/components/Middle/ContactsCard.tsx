import { ReactNode } from "react";
import styles from '../../css/Middle/ContactsCard.module.scss';

const ContactsCard: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (<div className={styles.Card}>
        <div className={styles.Content}>
            {children}
        </div>
        <div className={styles.Background}></div>
    </div>);
}
export default ContactsCard;