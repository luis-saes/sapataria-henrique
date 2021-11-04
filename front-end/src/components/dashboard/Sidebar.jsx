import React from "react";
import SectionButton from "./SectionButton";
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
        <SectionButton
          logo={<Home />}
          text="Início"
          active={currentPathName === "/dashboard"}
        />
      </div>
      <SectionButton
        logo={<Worker />}
        text="Funcionários"
        active={currentPathName === "/funcionarios"}
      />
      <SectionButton
        logo={<Client />}
        text="Clientes"
        active={currentPathName === "/clientes"}
      />
      <SectionButton
        logo={<Shoes />}
        text="Sapatos"
        active={currentPathName === "/sapatos"}
      />
      <SectionButton
        logo={<Sales />}
        text="Vendas"
        active={currentPathName === "/vendas"}
      />
      <SectionButton logo={<Logout />} text="Sair" />
    </div>
  );
};

export default Sidebar;
