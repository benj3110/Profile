import { ReactNode } from "react";
import styles from '../../css/Middle/Contacts.module.scss';

const ContactsCard: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (<div className={styles.Card}>
        {children}
    </div>);
}
export default ContactsCard;