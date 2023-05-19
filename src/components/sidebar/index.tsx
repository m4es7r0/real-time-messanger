import styles from "./Sidebar.module.scss";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.sidebar}>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
