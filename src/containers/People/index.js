import { useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import withDataFetch from './action';
import { Spinner } from 'reactstrap'; 
import Header from '../../components/Header';

const DataTable = ({ data, getPeopleList, loading }) => {

    useEffect(()=>{
        getPeopleList();
    },[getPeopleList])

    
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
          <th>Height</th>
          <th>Mass</th>
          <th>Eye Color</th>
          <th>Skin Color</th>
        </tr>
      </thead>
      <tbody>
        {data.map(person => (
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
    </Container>
    
    
    {loading && (
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'fixed',minWidth: '100%', minHeight: '100vh' }}>
            <Spinner color="primary" />
        </div>
        )}
    </>)
};

  export default withDataFetch(DataTable)