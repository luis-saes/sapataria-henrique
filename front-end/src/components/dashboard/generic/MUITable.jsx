import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  useGridApiRef,
  DataGridPro,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styles from "./MUITable.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MUITable = (props) => {
  const rows = props.rows;
  const columns = props.columns;

  const [modalUp, setModalUp] = useState(false);

  const [currentId, setCurrentId] = useState(-1);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editColumn = {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    getActions: ({ id }) => {
      const isInEditMode = apiRef.current.getRowMode(id) === "edit";

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
            color="primary"
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  };

  columns.push(editColumn);

  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "edit");
  };

  const handleSaveClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.commitRowChange(id);
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    apiRef.current.updateRows([{ ...row, isNew: false }]);
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    setModalUp(true);
    handleOpen();

    setCurrentId(id);
    console.log(id);
  };

  const handleConfirmDeleteClick = (id) => (event) => {
    event.stopPropagation();
    const valueToDelete = {};
    valueToDelete.cpf = apiRef.current.getRow(id)[props.keyToDelete];
    apiRef.current.updateRows([{ id, _action: "delete" }]);

    console.log(props.link, valueToDelete);
    (async () => {
      const rawResponse = await fetch(props.link, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valueToDelete),
      });
      const content = await rawResponse.json();
      console.log(content);
    })();

    handleClose();
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      {modalUp && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Deseja confirmar a exclusão?
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmDeleteClick(currentId)}
            >
              Confirmar
            </Button>
            <Button
              variant="outlined"
              className={styles.cancelButton}
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </Box>
        </Modal>
      )}
      <DataGridPro
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        componentsProps={{
          toolbar: { apiRef },
        }}
      />
    </div>
  );
};

export default MUITable;
