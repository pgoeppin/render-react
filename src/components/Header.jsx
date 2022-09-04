import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    const inputSearchCatcher = (e) => {
        console.log(e.target.value)
        const lowerCase = e.target.value.toLowerCase();
        props.setInputSearch(lowerCase)
    }
    const searchForm = (e) => {
        e.preventDefault()
/*         falta revisar bien este filtro  */
        const collabSearch = props.collabList.filter(collab => collab.name.toLowerCase().includes(props.inputSearch))
        console.log(collabSearch)
        props.setCollabList(collabSearch)
        props.setInputSearch("")
    }
  return (
    <Navbar bg='dark' variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Planta nuclear de Springfield</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" onSubmit={searchForm}>
            <Form.Control
              type="search"
              placeholder="Buscar nombre"
              className="me-2"
              aria-label="Search"
              onChange={inputSearchCatcher}
              value={props.inputSearch}
              />
            <Button type="submit" variant="success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;