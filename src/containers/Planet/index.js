import { useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import withDataFetch from './action';
import { Spinner } from 'reactstrap'; 
import Header from '../../components/Header';

const DataTable = ({ data, getPlanetsList, loading }) => {

    useEffect(()=>{
      getPlanetsList();
    },[getPlanetsList])

    
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
          <th>Diameter</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Gravity</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {data.map(planet => (
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
    </Container>
    
    
    {loading && (
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'fixed',minWidth: '100%', minHeight: '100vh' }}>
            <Spinner color="primary" />
        </div>
        )}
    </>)
};

  export default withDataFetch(DataTable)