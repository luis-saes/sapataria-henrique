import React from "react";
import SectionButton from "./SectionButton";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Worker } from "../../assets/icons/worker.svg";
import { ReactComponent as Client } from "../../assets/icons/client.svg";
import { ReactComponent as Shoes } from "../../assets/icons/shoes.svg";
import { ReactComponent as Sales } from "../../assets/icons/sales.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

const Sidebar = () => {
  const currentPathName = window.location.pathname;
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <SectionButton
            logo={<Home />}
            text="Início"
            active={currentPathName === "/dashboard"}
          />
        </Link>
      </div>
      <Link to="/funcionarios" style={{ textDecoration: "none" }}>
        <SectionButton
          logo={<Worker />}
          text="Funcionários"
          active={currentPathName === "/funcionarios"}
        />
      </Link>
      <Link to="/clientes" style={{ textDecoration: "none" }}>
        <SectionButton
          logo={<Client />}
          text="Clientes"
          active={currentPathName === "/clientes"}
        />
      </Link>
      <Link to="/sapatos" style={{ textDecoration: "none" }}>
        <SectionButton
          logo={<Shoes />}
          text="Sapatos"
          active={currentPathName === "/sapatos"}
        />
      </Link>
      <Link to="/vendas" style={{ textDecoration: "none" }}>
        <SectionButton
          logo={<Sales />}
          text="Vendas"
          active={currentPathName === "/vendas"}
        />
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <SectionButton logo={<Logout />} text="Sair" />
      </Link>
    </div>
  );
};

export default Sidebar;
