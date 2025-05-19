import styles from './InputSection.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
}

export const InputSection: React.FC<Props> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  );
};