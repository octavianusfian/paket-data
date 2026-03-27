import { Link, useParams } from "react-router-dom";
import { getSinglePackage } from "../features/packages/packageService";
import { Button, Col, Result, Row, Skeleton, Tabs } from "antd";
import { useQuery } from "@tanstack/react-query";
import { formatRupiah } from "../utils/function";

const PackageDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["packages", id],
    queryFn: () => getSinglePackage(id),
  });

  const items = [
    {
      key: "detail",
      label: "Detail",
      children: (
        <div>
          <p className="text-lg font-medium">Active Period 30 days</p>
          <p className="text-lg font-medium">Internet Kuota {data?.quota} GB</p>
        </div>
      ),
    },
    {
      key: "description",
      label: "Description",
      children: "Content of Tab Pane 2",
    },
    {
      key: "t&c",
      label: "T&C",
      children: "Content of Tab Pane 3",
    },
  ];

  const onChangeTabs = (key) => {
    console.log(key);
  };

  if (isLoading) {
    return <Skeleton active />;
  }

  if (error) {
    return (
      <Result
        status={error.status ?? "500"}
        title={error.message ?? "An error occurred"}
        subTitle="Sorry, something went wrong."
        extra={
          <Link type="primary" to={"/dashboard"}>
            Back Home
          </Link>
        }
      />
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Package Detail</h1>
      <Row gutter={10} className="mt-10">
        <Col span={10}>
          <div className="flex gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold">{data.name}</h2>
              <p className="text-3xl font-semibold mb-4">{data.quota} GB</p>
            </div>
            <p className="text-3xl font-medium text-red-800">
              {formatRupiah(data.price)}
            </p>
          </div>
        </Col>
        <Col span={14}>
          <Tabs
            className="text-2xl!"
            type="card"
            defaultActiveKey="1"
            items={items}
            onChange={onChangeTabs}
          />

          <div className="flex flex-col items-end mt-45">
            <div>
              <span className="text-2xl">Total Price: </span>
              <span className="text-3xl font-bold text-red-800">
                {formatRupiah(data.price)}
              </span>
            </div>
            <Button type="primary" className="mt-4" danger size="large">
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PackageDetail;
