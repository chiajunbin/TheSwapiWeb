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
//import Header from "../../components/Header";

const DataTable = ({ data, getPeopleList, loading, totalPage }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPeopleList(page);
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
        People
      </h3>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Eye Color</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.height}</td>
                <td>{person.mass}</td>
                <td>{person.eye_color}</td>
                <td>{person.skin_color}</td>
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
          {/* <Spinner color="primary" /> */}
          <Spin size="large" />
        </div>
      )}
    </Container>
  );
};

export default withDataFetch(DataTable);
