import random

namesClientes = [
    "Musa Valenzuela",
    "Fergus Hulme",
    "Lily-Mai Mckinney",
    "Kellie Mckee",
    "Andrei Hartman",
    "Hal Mccoy",
    "Randall Romero",
    "Ailsa Cannon",
    "Felix Collins",
    "Faye Novak",
    "Khadija Naylor",
    "Sabina Herring",
    "Enid Cline",
    "Mia O Connor",
    "Halima Mcgill",
    "Kelly Roche",
    "Rhyley Ramsay",
    "Kirsten Schmitt",
    "Jez Chang",
    "Samuel Villa",
    "Demi-Leigh Mccormack",
    "Alessio Wong",
    "Daisy-Mae Wynn",
    "Steve Shepherd",
    "Maximillian Gilmour",
    "Viaan Wooten",
    "Koa Sykes",
    "Amanpreet O Neill",
    "Hayden Lowery",
    "Tiffany Flower",
    "Bobby Bull",
    "Kaylie Dyer",
    "Samad Johnson",
    "Liana Humphrey",
    "Romany Wilkes",
    "Patricia Gray",
    "Elisa Hill",
    "Romilly Haynes",
    "Britney Hilton",
    "Ruby-May Amos",
    "Alma Acosta",
    "Fearne Mcpherson",
    "Finley Barron",
    "Suleman Croft",
    "Lillie-Mai Montgomery",
    "Mercedes Burt",
    "Menaal Knapp",
    "Justin Young",
    "Emer Castro",
    "Jordan Proctor"
]

cpfClientes = [
    "01222105497",
    "01905386869",
    "03301567568",
    "03954142023",
    "07665810632",
    "08359028036",
    "10091381622",
    "12090782366",
    "12917328371",
    "14115995785",
    "14729417720",
    "16722487954",
    "18870271730",
    "20939602652",
    "22611223491",
    "23122509504",
    "26005445774",
    "28931440804",
    "34198589224",
    "38807647354",
    "43042201287",
    "43239781891",
    "43940945854",
    "44442472319",
    "50130739871",
    "51843109913",
    "52567473203",
    "55302191440",
    "59225720408",
    "62874743003",
    "62987410700",
    "63940810517",
    "64129545469",
    "64180958201",
    "66722789667",
    "69795257358",
    "70959912860",
    "72531222405",
    "72861944102",
    "73717346539",
    "73971249760",
    "77534439760",
    "77779319032",
    "81115600877",
    "82207131270",
    "83866072546",
    "84845113244",
    "88031380724",
    "95043551704",
    "96206734250"
]

namesFuncionarios = [
    "Connah Stephens",
    "Areeba Bevan",
    "Keane Andrew",
    "Jakob Blackburn",
    "Cillian Green",
    "Ayra Forrest",
    "Dione Wharton",
    "Ashraf Rosas",
    "Erin Mcghee",
    "Abul Roche",
    "Emily-Rose Whitworth",
    "Eira Davis",
    "Hanifa Madden",
    "Denzel Preston",
    "Szymon Morin",
    "Samina Robertson",
    "Juliet Butt",
    "Bronwen Rios",
    "Juan Rogers",
    "Omer Lutz",
    "Said Jackson",
    "Antoinette Bishop",
    "Suranne Hahn",
    "Jai Church",
    "Veronica Russo",
    "Chay Gardiner",
    "Amanah Fenton",
    "Hajra Cooley",
    "Caspar Fernandez",
    "Christiana Foreman",
    "Connie Griffiths",
    "Buster Mcleod",
    "Annabell Huff",
    "Tanya Frost",
    "Iga Redfern",
    "Ellice Beck",
    "Saira Lin",
    "Aniyah Beach",
    "Colby Crosby",
    "Dominykas Winter",
    "Zander Johnston",
    "Ben Carney",
    "Adele Torres",
    "Alia Fleming",
    "Eshaal Sinclair",
    "Luc Bryant",
    "Amirah Weir",
    "Iqrah Gaines",
    "Jermaine Quintero",
    "Rhonda Gutierrez"
]

complementos = [
    "mile",
    "attachment",
    "costume",
    "parade",
    "act",
    "correction",
    "wash",
    "lose",
    "mosquito",
    "seed",
    "perceive",
    "deficiency",
    "hypnothize",
    "biography",
    "morsel",
    "conflict",
    "legislation",
    "retired",
    "superintendent",
    "west",
    "circulate",
    "steep",
    "vegetarian",
    "shiver",
    "release",
    "average",
    "ignite",
    "cultivate",
    "delicate",
    "revise",
    "surprise",
    "ceremony",
    "infinite",
    "cousin",
    "broken",
    "guerrilla",
    "sulphur",
    "federation",
    "AIDS",
    "contrast",
    "valid",
    "ticket",
    "survey",
    "peasant",
    "spite",
    "sock",
    "match",
    "irony",
    "conclusion",
    "lid"
]

logradouro = [
    "hypothesize",
    "distributor",
    "precede",
    "tune",
    "misplace",
    "union",
    "minority",
    "likely",
    "stomach",
    "belt",
    "threaten",
    "jest",
    "block",
    "definition",
    "helmet",
    "chapter",
    "requirement",
    "acid",
    "uncertainty",
    "live",
    "underline",
    "wording",
    "omission",
    "overwhelm",
    "round",
    "prey",
    "glimpse",
    "battlefield",
    "air",
    "purpose",
    "knit",
    "equinox",
    "miss",
    "pour",
    "blonde",
    "carry",
    "fear",
    "variable",
    "flag",
    "traction",
    "prescription",
    "river",
    "spokesperson",
    "cap",
    "stand",
    "unique",
    "camera",
    "leadership",
    "achieve",
    "trolley"
]

cidades = [
    "wrarora",
    "zhever",
    "slacnard",
    "zumond",
    "seset",
    "atreim",
    "qok",
    "khando",
    "ensby",
    "iamont",
    "morset",
    "heuridge",
    "vlading",
    "drosas",
    "zhohsas",
    "jarc",
    "blido",
    "voni",
    "ensgas",
    "ockham",
    "eyrihport",
    "yribus",
    "zlougow",
    "phefast",
    "wrafast",
    "wria",
    "wester",
    "prurg",
    "eypus",
    "ordmery",
    "kroland",
    "drecburgh",
    "yheridge",
    "dolas",
    "zhaaver",
    "dedo",
    "crury",
    "ustrane",
    "olntin",
    "ardmouth",
    "xeymouth",
    "wiham",
    "wuginia",
    "klusall",
    "drunbury",
    "yurgh",
    "graso",
    "clerton",
    "arcridge",
    "anceson"
]

estados = [
    "SP",
    "MG",
    "MS",
    "PR",
    "AM"
]

bairro = [
    "miccopriuos",
    "procody",
    "adliarvertiang",
    "posical",
    "ixcent",
    "wheablist",
    "boopular",
    "befolking",
    "wireve",
    "opcong",
    "impenelly",
    "aquaked",
    "franchans",
    "arkets",
    "arinterpord",
    "furnicallment",
    "taindust",
    "putocrypes",
    "fouralier",
    "supernstic",
    "eefullanizess",
    "surogou",
    "chershoee",
    "propericitess",
    "prologisang",
    "eaterfully",
    "faminoces",
    "proationizes",
    "modecarlialing",
    "sepezz",
    "nianglors",
    "refurn",
    "shizzo",
    "oppred",
    "boycher",
    "hureaddiss",
    "diffetruction",
    "advoter",
    "soniting",
    "bryanklets",
    "oppoosedgetal",
    "mothodchront",
    "hevephiny",
    "iniquin",
    "recepteds",
    "thresyncess",
    "coopicals",
    "mediviction",
    "catterful",
    "frorealm"
]

produtos = [
    "bertimings",
    "nookayergs",
    "hygienevangelist",
    "caticlasurghts",
    "untrimattacks",
    "huzlip",
    "strizzes",
    "jobfusticate",
    "pulate",
    "accurry",
    "oleald",
    "blassuing",
    "forciner",
    "rosion",
    "wortunde",
    "gingthy",
    "iniquin",
    "auspectress",
    "baxtoy",
    "vituenize",
    "dorizating",
    "madeliatize",
    "dominitoxing",
    "evolissuppoint",
    "slation",
    "ception",
    "alogiced",
    "resochocodmaid",
    "ausceigh",
    "cherlormur",
    "ravicted",
    "noxu",
    "anitisrammist",
    "unreasto",
    "thrubbish",
    "heavinted",
    "puffalope",
    "tation",
    "requirtion",
    "supernstic",
    "litifactrones",
    "gerrickle",
    "imsomed",
    "laritione",
    "pricenano",
    "collerescapts",
    "knealineuring",
    "suffergod",
    "duzafizz",
    "tweirshing"
]

cpfFuncionarios = [
    "02608823726",
    "05435805201",
    "07876923100",
    "11328834158",
    "11750683903",
    "13018509773",
    "17011266569",
    "19709126180",
    "22866007590",
    "25230481838",
    "25675909273",
    "26354486808",
    "27253670698",
    "28027884934",
    "30371515106",
    "37189272844",
    "37609737100",
    "38564389983",
    "38578103602",
    "42777599394",
    "44166538837",
    "45167067332",
    "48152663794",
    "49031258903",
    "52388315018",
    "52565519818",
    "53407443374",
    "55034045214",
    "63930140918",
    "64716176312",
    "64791171233",
    "65850501347",
    "65950230590",
    "66257921287",
    "66894096511",
    "67180895164",
    "67850832140",
    "72364763665",
    "74739650266",
    "77338310831",
    "77979746759",
    "81201815495",
    "81226698913",
    "82403558893",
    "85931488081",
    "89206272900",
    "90215136500",
    "92445373034",
    "92887003747",
    "98596519653"
]

def generate_cpf():                                                        
    cpf = [random.randint(0, 9) for x in range(9)]                              
                                                                                
    for _ in range(2):                                                          
        val = sum([(len(cpf) + 1 - i) * v for i, v in enumerate(cpf)]) % 11      
                                                                                
        cpf.append(11 - val if val > 1 else 0)                                  
                                                                                
    return '%s%s%s%s%s%s%s%s%s%s%s' % tuple(cpf)

def generate_celphone_number():                                                        
    tel = [random.randint(0, 9) for x in range(14)]                              
    
    telString = ""
    for number in tel:
        telString += str(number)

    return telString

def generate_salary():
    value = random.uniform(1000, 15000)
    return float("{:.2f}".format(value))

def generate_cost():
    value = random.uniform(100, 1500)
    return float("{:.2f}".format(value))

def randomState():
    return estados[random.randint(0, 4)]                                                                      

for i in range(50):
    # print("INSERT INTO CLIENTE (CPF, Nome, Telefone) VALUES ('{0}', '{1}', '{2}');".format(generate_cpf(), namesClients[i], generate_celphone_number()))
    # print("INSERT INTO FUNCIONARIO (CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro) VALUES ('{0}', '{1}', {2}, '{3}', '{4}', '{5}', '{6}', {7}, '{8}');".format(generate_cpf(), namesFuncionarios[i], generate_salary(), complementos[i], logradouro[i], cidades[i], randomState(), i, bairro[i]))
    # print("INSERT INTO PRODUTO (Referencia, PrecoVenda, Nome, Descricao, Marca, Tamanho, QuantidadeEstoque) VALUES ({0}, {1}, '{2}', '{3}', '{4}', {5}, '{6}');".format(i, generate_cost(), produtos[i], bairro[i], cidades[i], random.randint(1, 1000), random.randint(1, 999)))
    print("INSERT INTO VENDA (ID, Situacao, Data, FormaPagamento, PrecoTotal, CPFFuncionario, CPFCliente) VALUES ({0}, '{1}', CURDATE(), 'ca', {2}, '{3}', '{4}');".format(i, 'p', generate_cost(), cpfFuncionarios[i], cpfClientes[i]))
