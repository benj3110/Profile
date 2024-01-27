import { ReactNode } from "react";
import styles from '../../css/Middle/ProfileCard.module.scss';

const ProfileCard: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (<div className={styles.Card}>
        {children}
    </div>);
}
export default ProfileCard;