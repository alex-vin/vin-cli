export const filesToCheck = [
  "package.json",
  "public",
  "src",
  "tsconfig.json",
  "yarn.lock",
  ".gitignore",
  "README.md"
]

export interface IType {
  PEUI: string,
  INIT: string,
  EIAE: string,
  DWSM: string,
  EAMS: string,
  WEQM: string,
  BASC: string,
  IDCS: string
}

export const projectInfo = [
  { key: "DWSM", UI: false, info: "DWSM: 饮用水源管理系统", descrition: "饮用水源管理系统", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "EIAE", UI: false, info: "EIAE: 滁州环保专家库系统", descrition: "滁州环保专家库系统", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "EAMS", UI: false, info: "EAMS: 水环境自动监测系统", descrition: "水环境自动监测系统", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "WEQM", UI: false, info: "WEQM: 水环境综合管理系统", descrition: "水环境综合管理系统", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "IDCS", UI: false, info: "IDCS: 生态环境综合指挥平台", descrition: "生态环境综合指挥平台", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "PEUI", UI: false, info: "PEUI: 智慧环保WEB应用统一开发UI框架", descrition: "智慧环保WEB应用统一开发UI框架", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "INIT", UI: true, info: "INIT: 智慧环保WEB应用统一开发模板框架", descrition: "智慧环保WEB应用统一开发模板框架", url: "direct:https://github.com/alex-vin/react-ts.git" },
  { key: "BASC", UI: true, info: "BASC: 智慧环保WEB应用统一开发基础框架", descrition: "智慧环保WEB应用统一开发基础框架", url: "direct:https://github.com/alex-vin/react-ts.git" },
]
