import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectTimeSpan = () => {
  return (
    <Select
      defaultValue="daily"
      onChange={handleChange}
      style={{width: '100px'}}
      options={[
        {
          value: "daily",
          label: "Daily",
        },
      ]}
    />
  );
};

export default SelectTimeSpan;
