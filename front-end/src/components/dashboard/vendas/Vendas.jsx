import React from "react";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";
import axios from "axios";

const componentDidMount = () => {
  axios.get("/vendas").then(function (response) {
    console.log(response.data);
  });
};

const Vendas = () => {
  componentDidMount();
  const mRows = [
    {
      id: randomId(),
      ID: 0,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1454.82",
      CPFFuncionario: "02608823726",
      CPFCliente: "01222105497",
    },
    {
      id: randomId(),
      ID: 1,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "433.60",
      CPFFuncionario: "05435805201",
      CPFCliente: "01905386869",
    },
    {
      id: randomId(),
      ID: 2,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "734.12",
      CPFFuncionario: "07876923100",
      CPFCliente: "03301567568",
    },
    {
      id: randomId(),
      ID: 3,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1399.84",
      CPFFuncionario: "11328834158",
      CPFCliente: "03954142023",
    },
    {
      id: randomId(),
      ID: 4,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "798.76",
      CPFFuncionario: "11750683903",
      CPFCliente: "07665810632",
    },
    {
      id: randomId(),
      ID: 5,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "793.52",
      CPFFuncionario: "13018509773",
      CPFCliente: "08359028036",
    },
    {
      id: randomId(),
      ID: 6,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "194.40",
      CPFFuncionario: "17011266569",
      CPFCliente: "10091381622",
    },
    {
      id: randomId(),
      ID: 7,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "469.47",
      CPFFuncionario: "19709126180",
      CPFCliente: "12090782366",
    },
    {
      id: randomId(),
      ID: 8,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "478.32",
      CPFFuncionario: "22866007590",
      CPFCliente: "12917328371",
    },
    {
      id: randomId(),
      ID: 9,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1492.91",
      CPFFuncionario: "25230481838",
      CPFCliente: "14115995785",
    },
    {
      id: randomId(),
      ID: 10,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "823.10",
      CPFFuncionario: "25675909273",
      CPFCliente: "14729417720",
    },
    {
      id: randomId(),
      ID: 11,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1000.00",
      CPFFuncionario: "26354486808",
      CPFCliente: "16722487954",
    },
    {
      id: randomId(),
      ID: 12,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "861.93",
      CPFFuncionario: "27253670698",
      CPFCliente: "18870271730",
    },
    {
      id: randomId(),
      ID: 13,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "904.96",
      CPFFuncionario: "28027884934",
      CPFCliente: "20939602652",
    },
    {
      id: randomId(),
      ID: 14,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "178.75",
      CPFFuncionario: "30371515106",
      CPFCliente: "22611223491",
    },
    {
      id: randomId(),
      ID: 15,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "279.53",
      CPFFuncionario: "37189272844",
      CPFCliente: "23122509504",
    },
    {
      id: randomId(),
      ID: 16,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1034.44",
      CPFFuncionario: "37609737100",
      CPFCliente: "26005445774",
    },
    {
      id: randomId(),
      ID: 17,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "432.39",
      CPFFuncionario: "38564389983",
      CPFCliente: "28931440804",
    },
    {
      id: randomId(),
      ID: 18,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "591.32",
      CPFFuncionario: "38578103602",
      CPFCliente: "34198589224",
    },
    {
      id: randomId(),
      ID: 19,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "489.06",
      CPFFuncionario: "42777599394",
      CPFCliente: "38807647354",
    },
    {
      id: randomId(),
      ID: 20,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "661.71",
      CPFFuncionario: "44166538837",
      CPFCliente: "43042201287",
    },
    {
      id: randomId(),
      ID: 21,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "908.30",
      CPFFuncionario: "45167067332",
      CPFCliente: "43239781891",
    },
    {
      id: randomId(),
      ID: 22,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1301.06",
      CPFFuncionario: "48152663794",
      CPFCliente: "43940945854",
    },
    {
      id: randomId(),
      ID: 23,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "276.85",
      CPFFuncionario: "49031258903",
      CPFCliente: "44442472319",
    },
    {
      id: randomId(),
      ID: 24,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1080.39",
      CPFFuncionario: "52388315018",
      CPFCliente: "50130739871",
    },
    {
      id: randomId(),
      ID: 25,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "748.95",
      CPFFuncionario: "52565519818",
      CPFCliente: "51843109913",
    },
    {
      id: randomId(),
      ID: 26,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "246.96",
      CPFFuncionario: "53407443374",
      CPFCliente: "52567473203",
    },
    {
      id: randomId(),
      ID: 27,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "651.59",
      CPFFuncionario: "55034045214",
      CPFCliente: "55302191440",
    },
    {
      id: randomId(),
      ID: 28,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "362.01",
      CPFFuncionario: "63930140918",
      CPFCliente: "59225720408",
    },
    {
      id: randomId(),
      ID: 29,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "874.31",
      CPFFuncionario: "64716176312",
      CPFCliente: "62874743003",
    },
    {
      id: randomId(),
      ID: 30,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "805.85",
      CPFFuncionario: "64791171233",
      CPFCliente: "62987410700",
    },
    {
      id: randomId(),
      ID: 31,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1150.75",
      CPFFuncionario: "65850501347",
      CPFCliente: "63940810517",
    },
    {
      id: randomId(),
      ID: 32,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "865.52",
      CPFFuncionario: "65950230590",
      CPFCliente: "64129545469",
    },
    {
      id: randomId(),
      ID: 33,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1460.23",
      CPFFuncionario: "66257921287",
      CPFCliente: "64180958201",
    },
    {
      id: randomId(),
      ID: 34,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "986.07",
      CPFFuncionario: "66894096511",
      CPFCliente: "66722789667",
    },
    {
      id: randomId(),
      ID: 35,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1494.06",
      CPFFuncionario: "67180895164",
      CPFCliente: "69795257358",
    },
    {
      id: randomId(),
      ID: 36,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1404.03",
      CPFFuncionario: "67850832140",
      CPFCliente: "70959912860",
    },
    {
      id: randomId(),
      ID: 37,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1453.97",
      CPFFuncionario: "72364763665",
      CPFCliente: "72531222405",
    },
    {
      id: randomId(),
      ID: 38,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1037.13",
      CPFFuncionario: "74739650266",
      CPFCliente: "72861944102",
    },
    {
      id: randomId(),
      ID: 39,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "763.94",
      CPFFuncionario: "77338310831",
      CPFCliente: "73717346539",
    },
    {
      id: randomId(),
      ID: 40,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1497.58",
      CPFFuncionario: "77979746759",
      CPFCliente: "73971249760",
    },
    {
      id: randomId(),
      ID: 41,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "620.70",
      CPFFuncionario: "81201815495",
      CPFCliente: "77534439760",
    },
    {
      id: randomId(),
      ID: 42,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "328.14",
      CPFFuncionario: "81226698913",
      CPFCliente: "77779319032",
    },
    {
      id: randomId(),
      ID: 43,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1210.22",
      CPFFuncionario: "82403558893",
      CPFCliente: "81115600877",
    },
    {
      id: randomId(),
      ID: 44,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "261.11",
      CPFFuncionario: "85931488081",
      CPFCliente: "82207131270",
    },
    {
      id: randomId(),
      ID: 45,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "829.17",
      CPFFuncionario: "89206272900",
      CPFCliente: "83866072546",
    },
    {
      id: randomId(),
      ID: 46,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "836.65",
      CPFFuncionario: "90215136500",
      CPFCliente: "84845113244",
    },
    {
      id: randomId(),
      ID: 47,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1353.72",
      CPFFuncionario: "92445373034",
      CPFCliente: "88031380724",
    },
    {
      id: randomId(),
      ID: 48,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "406.84",
      CPFFuncionario: "92887003747",
      CPFCliente: "95043551704",
    },
    {
      id: randomId(),
      ID: 49,
      Situacao: "p",
      Data: "2021-11-22T03:00:00.000Z",
      FormaPagamento: "ca",
      PrecoTotal: "1132.38",
      CPFFuncionario: "98596519653",
      CPFCliente: "96206734250",
    },
  ];

  const mColumns = [
    {
      field: "ID",
      headerName: "ID",
      width: 90,
      editable: true,
    },
    {
      field: "Situacao",
      headerName: "Situação",
      type: "number",
      width: 180,
      editable: true,
    },
    {
      field: "Data",
      headerName: "Data",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "FormaPagamento",
      headerName: "Forma de Pagamento",
      type: "date",
      width: 300,
      editable: true,
    },
    {
      field: "PrecoTotal",
      headerName: "Preço Total",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "CPFFuncionario",
      headerName: "CPF Funcionário",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "CPFCliente",
      headerName: "CPF Cliente",
      type: "string",
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

export default Vendas;
