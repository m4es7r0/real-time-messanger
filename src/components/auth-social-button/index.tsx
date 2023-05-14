import { FC } from "react";
import { IconType } from "react-icons";

import styles from "./AuthSocialButton.module.scss";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
