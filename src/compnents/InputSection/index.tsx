type Props = {
  title: string;
  children?: React.ReactNode;
}

export const InputSection: React.FC<Props> = ({ title, children  }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};