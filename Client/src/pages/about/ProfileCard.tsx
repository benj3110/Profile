import { ReactNode } from "react";
import styles from './ProfileCard.module.scss';

const ProfileCard: React.FC<{ children: ReactNode }> = ({ children }) => {
    //todo make some kinda bubble effect
    return (
        <div className={styles.Card}>
            {children}
        </div>);
}
export default ProfileCard;