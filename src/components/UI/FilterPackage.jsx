import { Button, Input, Select } from "antd";
import { useState } from "react";

const FilterPackage = ({ onSearchPackage, onChangeFilter, onSorting }) => {
  const [queryPackage, setQueryPackage] = useState("");

  const handleSearchPackage = () => {
    // Implement search functionality here
    console.log("Search package...");

    onSearchPackage(queryPackage);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <Input
          size="large"
          placeholder="Search package..."
          value={queryPackage}
          allowClear
          onChange={(e) => setQueryPackage(e.target.value)}
        />
        <Button type="primary" size="large" onClick={handleSearchPackage}>
          Search
        </Button>
      </div>
      <div className="flex gap-4">
        <Select
          className="border rounded-lg p-2 w-full"
          allowClear
          defaultValue={"Sort by Provider"}
          options={[
            {
              label: "Sort by Provider",
              value: "Sort by Provider",
            },
            {
              label: "Telkomsel",
              value: "Telkomsel",
            },
            {
              label: "XL",
              value: "XL",
            },
            {
              label: "Indosat",
              value: "Indosat",
            },
          ]}
          placeholder="Filter by Provider"
          onChange={(value) => onChangeFilter(value, "provider")}
        />
        <Select
          className="border rounded-lg p-2 w-full"
          allowClear
          options={[
            {
              label: "Sort by Price",
              value: "Sort by Price",
            },
            {
              label: "Low to High",
              value: "Low to High",
            },
            {
              label: "High to Low",
              value: "High to Low",
            },
          ]}
          placeholder="Filter by Price"
          onChange={(value) => onSorting(value)}
        />
      </div>
    </div>
  );
};

export default FilterPackage;
