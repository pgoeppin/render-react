import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Collabs} from './data/CollabDB'
import Header from './components/Header'
import Forms from './components/Forms'

function App() {
  const [inputSearch, setInputSearch] = React.useState("");
  const [nameCollab, setNameCollab] = React.useState("")
  const [emailCollab, setEmailCollab] = React.useState("")
  const [collabList, setCollabList] = React.useState(Collabs)
  const [error, setError] = React.useState(null)
  return (
    <>
    <Header
    inputSearch={inputSearch}
    setInputSearch={setInputSearch}
    collabList={collabList}
    setCollabList={setCollabList}
    />
    <Forms
    nameCollab={nameCollab}
    emailCollab={emailCollab}
    setNameCollab={setNameCollab}
    setEmailCollab={setEmailCollab}
    collabList={collabList}
    setCollabList={setCollabList}
    error={error}
    setError={setError}
    />
    </>
  );
}

export default App;
