import USStateFullName from "../../enums/USStateFullName";

type Props = {
  placeholder: string;
}

export const Select: React.FC<Props> = ({ placeholder }) => {
  return (
    <select>
        <option className="placeholder" value="" disabled selected>{placeholder}</option>
        {Object.values(USStateFullName).map((stateName) => (
          <option key={stateName} value={stateName}>
            {stateName}
          </option>
    ))}
      </select>
  )
}