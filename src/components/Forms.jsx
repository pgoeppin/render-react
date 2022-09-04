import React from 'react'
import Table from 'react-bootstrap/Table'

const Forms = (props) => {
    const sendForm = (e) => {
        e.preventDefault()
        const validateMail = (email) => {
            return /\S+@+plantanuclear.com/.test(email)
        }
        console.log('Enviando formulario')
        if (props.nameCollab === "" || props.emailCollab === "") {
            props.setError("Todos los campos son obligatorios!")
            console.log('hay error')
            return;
        } else if (!validateMail(props.emailCollab)) {
            props.setError("E-mail no válido. Recuerda que debe ser un e-mail corporativo. Por ejemplo: ejemplo@plantanuclear.com")
            console.log('falta mail')
            return;
        } else {
            props.setCollabList([...props.collabList, {id: props.collabList.length + 1, name: props.nameCollab, email: props.emailCollab}])
        }
        props.setError(null)
        props.setEmailCollab("")
        props.setNameCollab("")
    }

    const inputNameCatcher = (e) => {
        console.log(e.target.value)
        props.setNameCollab(e.target.value)
    }
    const inputEmailCatcher = (e) => {
        console.log(e.target.value)
        props.setEmailCollab(e.target.value)
    }
    const deleteCollab = id => {
        const collabFilter = props.collabList.filter(collab => collab.id !== id)
        console.log(collabFilter)
        props.setCollabList(collabFilter)
    }
return (
    <div className='main container my-5 py-5 bg-dark text-white'>
        <form  className='collab-form' onSubmit={sendForm}>
            {/* con el value se resetea el formulario */}
            
            <p className='form-label'>Ingrese un nombre: </p>
            <input type='text' placeholder='Ingrese un nombre' className='form-control mb-3' name='nameCollab' value={props.nameCollab} onChange={inputNameCatcher} />
            <p className='form-label'>Ingrese un e-mail:</p>
            <input type="text" placeholder='ejemplo@plantanuclear.com' className='form-control mb-1' name='emailCollab' value={props.emailCollab} onChange={inputEmailCatcher} />
            <br />
            {props.error ? <p className='form-text text-danger'>{props.error}</p> : null}
            <button className='btn btn-success mb-3' type='submit'>Agregar colaborador</button>
        </form>
        <a className='btn btn-primary mb-3' href='/' role='button'>Volver a inicio</a>
        <Table striped bordered hover responsive variant='dark' className='text-center'>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>E-mail</th>
                <th>¿Eliminar?</th>
                </tr>
            </thead>
            <tbody>
                {props.collabList.map(collab => 
                    <tr key={collab.id}>
                    <td>{collab.name}</td>
                    <td>{collab.email}</td>
                    <td><button className='btn btn-danger' onClick={() => deleteCollab(collab.id)}>Borrar</button></td>
                </tr>)}
            </tbody>
        </Table>
    </div>
)
}
export default Forms