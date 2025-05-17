import './inputSection.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
}

export const InputSection: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="form-section">
      <h2>{title}</h2>
      <div className="input-wrapper">
        {children}
      </div>
    </section>
  );
};