import { useQuery } from "@tanstack/react-query";
import FilterPackage from "../components/UI/FilterPackage";
import { getPackages } from "../features/packages/packageService";
import CardPackage from "../components/UI/CardPackage";
import { Card, Col, Pagination, Row } from "antd";
import { useState } from "react";

export const Packages = () => {
  const [params, setParams] = useState({
    _per_page: 10,
    _page: 1,
  });

  const {
    data: packages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["packages", params],
    queryFn: () => getPackages(params),
  });

  const { data: allPackages } = useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackages(),
  });

  console.log(packages);

  const totalPackages = allPackages ? allPackages.length : 0;

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);

    setParams((prev) => ({
      ...prev,
      _page: current,
      _per_page: pageSize,
    }));
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="w-1/2">
        <FilterPackage
          onSearchPackage={(value) =>
            setParams({
              ...params,
              name: value ? value : undefined,
            })
          }
          onChangeFilter={(value, key) =>
            setParams((prev) => ({
              ...prev,
              [key]: value,
            }))
          }
          onSorting={(value) =>
            setParams((prev) => ({
              ...prev,
              _sort: value === "Low to High" ? "price" : "-price",
            }))
          }
        />
      </div>

      <section id="package-list">
        <h2 className="text-2xl font-semibold mb-4">Available Packages</h2>
        <p>Explore our wide range of packages tailored to your needs!</p>
        <div className="flex justify-start gap-4 mt-5">
          <Card className="border rounded-lg p-6 shadow-md w-full">
            {isLoading ? (
              <p>Loading packages...</p>
            ) : error ? (
              <p>Error loading packages: {error.message}</p>
            ) : (
              <div className="space-y-4">
                <Row gutter={[16, 16]}>
                  {packages.map((pkg) => (
                    <Col span={6}>
                      <CardPackage
                        key={pkg.id}
                        id={pkg.id}
                        name={pkg.name}
                        quota={pkg.quota}
                        price={pkg.price}
                        provider={pkg.provider}
                      />
                    </Col>
                  ))}
                </Row>
                <div className="flex justify-end">
                  <Pagination
                    current={params._page}
                    total={totalPackages}
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    onChange={(page) =>
                      setParams((prev) => ({
                        ...prev,
                        _page: page,
                      }))
                    }
                  />
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};
