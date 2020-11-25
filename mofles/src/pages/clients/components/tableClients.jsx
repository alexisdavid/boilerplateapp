import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";


import Request from "../../../utils/http";
import Modalclients from "./ModalClients";
const request = new Request();

const TableClients = () => {
  
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [edit,setEdit]=useState(false)
  const [dataEdit,setDataEdit]=useState({})
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
 

  useEffect(() => {
    getClients();
  }, []);
  const columns = [
    {
      name: "business_name",

      label: "Razón Social",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "rfc",
      label: "RFC",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "telephone",
      label: "Telefono",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
function handleClick(posicion){
  onOpenModal()
  setEdit(posicion===-1?false:true)
  setDataEdit(data[posicion])
  
}
  const options = {
    selectableRows: "none",
    fixedHeader: false,
    print: false,
    // search: false,
    onRowClick: (row, index) => handleClick(index.dataIndex),
    download: true,
    elevation: 1,
    rowsPerPage: 10,
    responsive: "vertical",
    filter: false,
    viewColumns: false,
    customToolbar: () => (
      <button
        type="button"
        onClick={(e) => handleClick(-1)}
        className="btn btn-outline-primary"
      >
        <i className="fas fa-plus"></i>&nbsp; nuevo
      </button>
    ),
  };
  async function getClients() {
    const response = await request.get("/client");
    
    if (response && response.statusCode === 200) {
     
      if (response.result.success ) {
        setData(response.result.client)
      }
    }
  }
 
 

  return (
    <>
      <div className="white-space-32"></div>
      <MUIDataTable
        title={"Clientes"}
        data={data}
        columns={columns}
        options={options}
      />
     
         <Modalclients open={open} closeModal={onCloseModal} reload={getClients} edit={edit} dataEdit={dataEdit} clear={setEdit}/>
       
    </>
  );
};

export default TableClients;
