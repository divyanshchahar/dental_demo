import {Avatar} from "radix-ui";
import styles from "./AvatarPrimitive.module.css"

export type AvatarPrimitivePropTypes = {
    avatarUrl: string;
    colorScheme: string;

};

export const AvatarPrimitive = ({avatarUrl, colorScheme}: AvatarPrimitivePropTypes) => {
    return (
        <Avatar.Root className={`${styles.avatarRoot} ${colorScheme}`}>
            <Avatar.Image className={styles.avatarImage} src={avatarUrl}/>
            <Avatar.Fallback className={`${styles.avatarFallback} boldL ${colorScheme}`}> AF </Avatar.Fallback>
        </Avatar.Root>
    );
};

export default AvatarPrimitive;