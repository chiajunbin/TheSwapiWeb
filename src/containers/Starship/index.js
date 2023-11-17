import { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Container, Table } from 'reactstrap';
import withDataFetch from './action';
import { Spinner } from 'reactstrap'; 
import Header from '../../components/Header';

const DataTable = ({ data, getStarshipList, loading, totalPage }) => {

    const [page, setPage] = useState(1);

    useEffect(()=>{
      getStarshipList(page);
    },[page])
    
    console.log(totalPage);

    return(
    <>
    <div>
      <Header/>
    </div>

    <Container style={{ paddingTop: '30px' }}>
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
        {data.map(starship => (
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
        <PaginationLink
          first
        />

        </PaginationItem>
        <PaginationItem>
        <PaginationLink
          href="#"
          previous
        />
        </PaginationItem>

        {[...Array(totalPage)].map((x,i) =>
          <PaginationItem active={page === (i + 1)}>
            <PaginationLink onClick={() => {setPage(i + 1)}}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        
        <PaginationItem>
        <PaginationLink
          href="#"
          next
        />
        </PaginationItem>
        <PaginationItem>
        <PaginationLink
          href="#"
          last
        />
        </PaginationItem>
      </Pagination>
    </Container>
    
    {console.log(loading)}
    {loading && (
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'fixed',minWidth: '100%', minHeight: '100vh', backgroundColor: 'blue', zIndex:999, top:0, left:0}}>
            <Spinner color="primary" />
        </div>
        )}
    </>)
};

  export default withDataFetch(DataTable)