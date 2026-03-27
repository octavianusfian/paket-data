import { Button, Card, Tag } from "antd";
import { formatRupiah } from "../../utils/function";
import { useNavigate } from "react-router-dom";

const CardPackage = ({ id, name, quota, price, provider }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Implement the logic to handle the purchase of the package
    navigate(`/package/${id}`); // Navigate to the package details page
  };

  return (
    <Card className="border rounded-lg p-4 shadow-md">
      <Tag
        color={
          provider === "Telkomsel" ? "red" : provider === "XL" ? "blue" : "gray"
        }
        className="text-lg! mb-3!"
      >
        {provider}
      </Tag>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg font-semibold mb-4">{quota} GB</p>
      <p className="text-lg font-bold text-red-800">{formatRupiah(price)}</p>
      <Button type="primary" className="mt-4 w-full" onClick={handleClick}>
        Buy Now
      </Button>
    </Card>
  );
};

export default CardPackage;
