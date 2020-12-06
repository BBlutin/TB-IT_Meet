/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

import { Modal } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import logo from '../assets/logo-dark2x.png';
import logo2 from '../assets/logo2x.png';
import { GlobalContext } from '../context/globalContext';

const Home = ({ history }) => {
  const [userPassword] = useState('');
  const { setRoomName, setRoomPassword } = useContext(GlobalContext);

  const [modalShow, setModalShow] = React.useState(false);

  const onCreateHandler = ev => {
    ev.preventDefault();
    const roomName = document.getElementById('nameRoom').value;
    setRoomName(roomName);
    setRoomPassword(userPassword);
    history.push(`/${roomName}`);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Démarrer ou rejoindre une réunion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Démarrez une nouvelle réunion ou saisissez le code d'une réunion
            existante :
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                id="nameRoom"
                type="text"
                placeholder="Nom de la salle"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCreateHandler}>Continuer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo2}
            width="150"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Retour au site</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-col justify-center items-center h-screen">
        <img src={logo} alt="Logo GrowMeeting" />

        <Button onClick={() => setModalShow(true)}>
          Démarrer ou rejoindre une réunion
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Home;
