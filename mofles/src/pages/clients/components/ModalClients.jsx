import React,{useEffect,useState} from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modalcss.css";
import Notifications from '../../../components/notification/Notifications'

import Request from "../../../utils/http";
const request = new Request();
function Modalclients(props) {

  const { edit,dataEdit } = props;
  const [type,setType]=useState('')
  const [message,setMessage]=useState('')
  const [client, setClient] = useState({
    id: 0,
    businessName: "",
    rfc: "",
    address: "",
    cp: "",
    email: "",
    telephone: "",
  });
  useEffect(()=>{
if (props.edit===true) {
  setClient({
    id: dataEdit.client_id,
    businessName: dataEdit.business_name,
    rfc:dataEdit.rfc ,
    address: dataEdit.direccion,
    cp: dataEdit.cp,
    email:dataEdit.email,
    telephone: dataEdit.telephone
  })
}

  },[edit])
  
  async function handleSubmit() {
    let response;
    let data = client;
    if(edit){
      response = await request.put(`/updateClient/${data.id}`, data);
    }else{

       response = await request.post("/saveClient", data);
    }
    
    if (response && response.statusCode < 300) {
      setMessage(`${edit?'Cliente actualizado con exito':'Cliente registrado con exito'}`)
      setType('success')
      setClient({
        id: 0,
        businessName: "",
        rfc: "",
        address: "",
        cp: "",
        email: "",
        telephone: "",
      })
      
    }else{
      setMessage('error en el registro')
      setType('error')
    }
 
    props.reload()
  }
function closeModal(){
  setMessage('')
  setType('')
props.clear(false)
setClient({
  id: 0,
  businessName: "",
  rfc: "",
  address: "",
  cp: "",
  email: "",
  telephone: "",
})
  props.closeModal()
}

  return (
    <Modal
      open={props.open}
      onClose={closeModal}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      center
    >
    < Notifications type={type} message={message}/>
   
      <div className="white-space-32"></div>
      <div className="form-group row">
        <label htmlFor="inputEmail1" className="col-sm-2 col-form-label">
          Razón social
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail1"
            placeholder="Razón social"
            value={client.businessName}
            onChange={(e) =>
              setClient({ ...client, businessName: e.target.value })
            }
            // onChange={e=>formatString(e)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail2" className="col-sm-2 col-form-label">
          RFC
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail2"
            placeholder="RFC"
            value={client.rfc}
            onChange={(e) => setClient({ ...client, rfc: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Dirección
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="Dirección"
            value={client.address}
            onChange={(e) => setClient({ ...client, address: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">
          CP.
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="inputEmail4"
            placeholder="CP"
            value={client.cp}
            onChange={(e) => setClient({ ...client, cp: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail2" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail2"
            placeholder="Email"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail5" className="col-sm-2 col-form-label">
          Telefono
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="inputEmail5"
            placeholder="Telefono"
            value={client.telephone}
            onChange={(e) =>
              setClient({ ...client, telephone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-12 justify-end">
          <button onClick={handleSubmit} className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default Modalclients;
