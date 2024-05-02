import styles from '../../Style';

const Layout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
