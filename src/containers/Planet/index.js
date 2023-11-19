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
import Header from "../../components/Header";

const DataTable = ({ data, getPlanetsList, loading, totalPage }) => {
  const [page, setPage] = useState(1); // Trace current page

  useEffect(() => {
    getPlanetsList(page);
  }, [page]);

  return (
    <>
      <div>
        <Header />
      </div>

      <Container style={{ paddingTop: "30px" }}>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Diameter</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Gravity</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.diameter}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.gravity}</td>
                <td>{planet.population}</td>
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
      </Container>

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
          <Spinner color="primary" />
        </div>
      )}
    </>
  );
};

export default withDataFetch(DataTable);
