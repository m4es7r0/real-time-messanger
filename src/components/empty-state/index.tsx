import { FC } from "react";

import styles from "./EmptyState.module.scss";

interface EmptyStateProps {}

const EmptyState: FC<EmptyStateProps> = ({}) => {
  return (
    <div className={styles["empty-state"]}>
      <div>
        <h3>Select new chat or start a new conversation</h3>
      </div>
    </div>
  );
};

export default EmptyState;
