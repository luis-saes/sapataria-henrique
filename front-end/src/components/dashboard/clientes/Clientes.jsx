import React from "react";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";
import axios from "axios";

const componentDidMount = () => {
  axios.get("/clientes").then(function (response) {
    console.log(response.data);
  });
};

const Clientes = () => {
  componentDidMount();
  const mRows = [
    {
      id: randomId(),
      CPF: "01222105497",
      Nome: "Randall Romero",
      Telefone: "81103660726148",
    },

    {
      id: randomId(),
      CPF: "01905386869",
      Nome: "Steve Shepherd",
      Telefone: "70567867895377",
    },

    {
      id: randomId(),
      CPF: "03301567568",
      Nome: "Kaylie Dyer",
      Telefone: "61023331837079",
    },

    {
      id: randomId(),
      CPF: "03954142023",
      Nome: "Mia O Connor",
      Telefone: "32833738714718",
    },

    {
      id: randomId(),
      CPF: "07665810632",
      Nome: "Britney Hilton",
      Telefone: "86873837490653",
    },

    {
      id: randomId(),
      CPF: "08359028036",
      Nome: "Amanpreet O Neill",
      Telefone: "85374699940724",
    },

    {
      id: randomId(),
      CPF: "10091381622",
      Nome: "Kirsten Schmitt",
      Telefone: "32446784131049",
    },

    {
      id: randomId(),
      CPF: "12090782366",
      Nome: "Tiffany Flower",
      Telefone: "26407189176918",
    },

    {
      id: randomId(),
      CPF: "12917328371",
      Nome: "Bobby Bull",
      Telefone: "62424681808029",
    },

    {
      id: randomId(),
      CPF: "14115995785",
      Nome: "Ruby-May Amos",
      Telefone: "04358082567729",
    },

    {
      id: randomId(),
      CPF: "14729417720",
      Nome: "Mercedes Burt",
      Telefone: "78399660609252",
    },

    {
      id: randomId(),
      CPF: "16722487954",
      Nome: "Daisy-Mae Wynn",
      Telefone: "93396199260039",
    },

    {
      id: randomId(),
      CPF: "18870271730",
      Nome: "Rhyley Ramsay",
      Telefone: "31197169379891",
    },

    {
      id: randomId(),
      CPF: "20939602652",
      Nome: "Kellie Mckee",
      Telefone: "74786148656511",
    },

    {
      id: randomId(),
      CPF: "22611223491",
      Nome: "Koa Sykes",
      Telefone: "27746289870532",
    },

    {
      id: randomId(),
      CPF: "23122509504",
      Nome: "Enid Cline",
      Telefone: "88561250335787",
    },

    {
      id: randomId(),
      CPF: "26005445774",
      Nome: "Emer Castro",
      Telefone: "55845334220423",
    },

    {
      id: randomId(),
      CPF: "28931440804",
      Nome: "Jordan Proctor",
      Telefone: "86891299451818",
    },

    {
      id: randomId(),
      CPF: "34198589224",
      Nome: "Fearne Mcpherson",
      Telefone: "51634559922482",
    },

    {
      id: randomId(),
      CPF: "38807647354",
      Nome: "Justin Young",
      Telefone: "87275843255295",
    },

    {
      id: randomId(),
      CPF: "43042201287",
      Nome: "Jez Chang",
      Telefone: "06723276861999",
    },

    {
      id: randomId(),
      CPF: "43239781891",
      Nome: "Hal Mccoy",
      Telefone: "45613646714709",
    },

    {
      id: randomId(),
      CPF: "43940945854",
      Nome: "Alma Acosta",
      Telefone: "57018999981297",
    },

    {
      id: randomId(),
      CPF: "44442472319",
      Nome: "Kelly Roche",
      Telefone: "00919121292971",
    },

    {
      id: randomId(),
      CPF: "50130739871",
      Nome: "Lily-Mai Mckinney",
      Telefone: "29765074557380",
    },

    {
      id: randomId(),
      CPF: "51843109913",

      Nome: "Maximillian Gilmour",

      Telefone: "10324523842931",
    },

    {
      id: randomId(),
      CPF: "52567473203",
      Nome: "Fergus Hulme",
      Telefone: "97617030397154",
    },

    {
      id: randomId(),
      CPF: "55302191440",
      Nome: "Romany Wilkes",
      Telefone: "66013169836160",
    },

    {
      id: randomId(),
      CPF: "59225720408",
      Nome: "Liana Humphrey",
      Telefone: "45624426696711",
    },

    {
      id: randomId(),
      CPF: "62874743003",
      Nome: "Samad Johnson",
      Telefone: "07281377866957",
    },

    {
      id: randomId(),
      CPF: "62987410700",
      Nome: "Patricia Gray",
      Telefone: "83253188043658",
    },

    {
      id: randomId(),
      CPF: "63940810517",
      Nome: "Menaal Knapp",
      Telefone: "66590413804242",
    },

    {
      id: randomId(),
      CPF: "64129545469",
      Nome: "Romilly Haynes",
      Telefone: "00078336541719",
    },

    {
      id: randomId(),
      CPF: "64180958201",
      Nome: "Suleman Croft",
      Telefone: "50997713327318",
    },

    {
      id: randomId(),
      CPF: "66722789667",
      Nome: "Andrei Hartman",
      Telefone: "43530647662910",
    },

    {
      id: randomId(),
      CPF: "69795257358",
      Nome: "Ailsa Cannon",
      Telefone: "38687306250979",
    },

    {
      id: randomId(),
      CPF: "70959912860",
      Nome: "Viaan Wooten",
      Telefone: "28872836080629",
    },

    {
      id: randomId(),
      CPF: "72531222405",
      Nome: "Hayden Lowery",
      Telefone: "69371498087644",
    },

    {
      id: randomId(),
      CPF: "72861944102",
      Nome: "Felix Collins",
      Telefone: "73215535627573",
    },

    {
      id: randomId(),
      CPF: "73717346539",
      Nome: "Samuel Villa",
      Telefone: "17966489365377",
    },

    {
      id: randomId(),
      CPF: "73971249760",
      Nome: "Finley Barron",
      Telefone: "06114765724918",
    },

    {
      id: randomId(),
      CPF: "77534439760",
      Nome: "Alessio Wong",
      Telefone: "96795156599421",
    },

    {
      id: randomId(),
      CPF: "77779319032",
      Nome: "Halima Mcgill",
      Telefone: "99427353289915",
    },

    {
      id: randomId(),
      CPF: "81115600877",
      Nome: "Sabina Herring",
      Telefone: "13397707293746",
    },

    {
      id: randomId(),
      CPF: "82207131270",

      Nome: "Lillie-Mai Montgomery",

      Telefone: "04408808081526",
    },

    {
      id: randomId(),
      CPF: "83866072546",

      Nome: "Demi-Leigh Mccormack",

      Telefone: "19871136577513",
    },

    {
      id: randomId(),
      CPF: "84845113244",
      Nome: "Musa Valenzuela",
      Telefone: "13169851969308",
    },

    {
      id: randomId(),
      CPF: "88031380724",
      Nome: "Faye Novak",
      Telefone: "86621059992796",
    },

    {
      id: randomId(),
      CPF: "95043551704",
      Nome: "Khadija Naylor",
      Telefone: "32897311208788",
    },

    {
      id: randomId(),
      CPF: "96206734250",
      Nome: "Elisa Hill",
      Telefone: "26152237343697",
    },
  ];

  const mColumns = [
    {
      field: "CPF",
      headerName: "CPF",
      width: 180,
      editable: true,
    },
    {
      field: "Nome",
      headerName: "Nome",
      width: 180,
      editable: true,
    },
    {
      field: "Telefone",
      headerName: "Telefone",
      width: 180,
      editable: true,
    },
  ];

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <MUITable rows={mRows} columns={mColumns} />
    </div>
  );
};

export default Clientes;
