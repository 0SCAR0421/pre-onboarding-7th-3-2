import React from "react";
import accountStatusData from "../../utils/accountStatus.json";

interface DetailSelectStatusProps {
  defaultValue: number;
  setModifyData?(value: string | number): void;
}

const DetailSelectStatus = ({ defaultValue, setModifyData }: DetailSelectStatusProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setModifyData) setModifyData(Number(e.target.value));
  };

  const status = Object.entries(accountStatusData).reduce((acc, cur) => {
    acc.push({ id: cur[1], name: cur[0] });
    return acc;
  }, [] as { [index: string]: number | string }[]);

  return (
    <select className="ml-5" onChange={handleChange} defaultValue={defaultValue}>
      {status.map((option) => (
        <option key={option.id} value={option.id} defaultValue={defaultValue}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DetailSelectStatus;
