import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Table,
} from "reactstrap";
import withDataFetch from "./action";
import { Spinner } from "reactstrap";
import { Spin } from "antd";

const DataTable = ({ data, getStarshipList, loading, totalPage }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getStarshipList(page);
  }, [page]);

  return (
    <Container>
      <h3
        style={{
          paddingLeft: 5,
          paddingTop: 5,
          paddingBottom: 5,
          fontWeight: "bold",
        }}
      >
        Starship
      </h3>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Class</th>
              <th>Manufacturer</th>
              <th>Length</th>
              <th>Crew</th>
              <th>Passenger</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((starship) => (
              <tr key={starship.name}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.starship_class}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.length}</td>
                <td>{starship.crew}</td>
                <td>{starship.passengers}</td>
                <td>{starship.cargo_capacity}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <PaginationItem>
            <PaginationLink first onClick={() => setPage(1)} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href="#"
              previous
              onClick={() => setPage(page - 1)}
            />
          </PaginationItem>

          {[...Array(totalPage)].map((x, i) => (
            <PaginationItem active={page === i + 1}>
              <PaginationLink
                onClick={() => {
                  setPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationLink href="#" next onClick={() => setPage(page + 1)} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" last onClick={() => setPage(totalPage)} />
          </PaginationItem>
        </Pagination>
      </div>

      {loading && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            minWidth: "100%",
            minHeight: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 999,
            top: 0,
            left: 0,
          }}
        >
          <Spin size="large" />
        </div>
      )}
    </Container>
  );
};

export default withDataFetch(DataTable);
