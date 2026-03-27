import { Button, Card, Col, Row, Skeleton } from "antd";
import { useSelector } from "react-redux";
import CardPackage from "../components/UI/CardPackage";
import { getPackages } from "../features/packages/packageService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getTransactions } from "../features/transactions/transactionService";
import ListTransaction from "../features/transactions/ListTransaction";

export const Dashboard = () => {
  const userlogin = useSelector((state) => state.auth.user);
  const {
    data: packages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: () =>
      getPackages({
        _per_page: 4,
        _page: 1,
      }),
  });

  console.log(packages);

  const {
    data: transactions,
    isLoading: isLoadingTransactions,
    error: errorTransactions,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return (
    <div className="flex flex-col gap-10">
      <section id="greeting" className="">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, <span className="capitalize">{userlogin}</span>!
        </h1>
        <p>Buy package that you want with best value price and easy to get</p>
      </section>
      <section id="best-deal">
        <Card className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Best Deals</h3>
          <p className="mb-3">Check out our best deals on packages!</p>

          <div>
            {isLoading ? (
              <Skeleton active />
            ) : error ? (
              <p>Error loading packages: {error.message}</p>
            ) : (
              <div>
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
                <div className="mt-4 flex justify-center">
                  <Link to={"/packages"}>See More</Link>
                </div>
              </div>
            )}
          </div>
        </Card>
      </section>
      <section id="recommendation">
        <Card className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Recommendation</h3>
          <p className="mb-3">Check out our recommendation on packages!</p>

          <div>
            {isLoading ? (
              <Skeleton active />
            ) : error ? (
              <p>Error loading packages: {error.message}</p>
            ) : (
              <div>
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
                <div className="mt-4 flex justify-center">
                  <Link to={"/packages"}>See More</Link>
                </div>
              </div>
            )}
          </div>
        </Card>
      </section>
      <section id="history-purchase">
        <Card className="border rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">History Purchase</h3>
          <p className="mb-3">Check out your history purchase!</p>

          <div>
            {isLoadingTransactions ? (
              <Skeleton active />
            ) : error ? (
              <p>Error loading transaction: {error.message}</p>
            ) : (
              <ListTransaction transactions={transactions} />
            )}
          </div>
        </Card>
      </section>
    </div>
  );
};
