import { ReactNode } from "react";
import styles from '../../css/Middle/ProfileCard.module.scss';

const ProfileCard: React.FC<{ children: ReactNode }> = ({ children }) => {
    //todo make some kinda bubble effect
    return (
        <div className={styles.Card}>
            <div className={styles.Bubble}></div>
            {children}
        </div>);
}
export default ProfileCard;