import mockData from "./mockData"
import Mock from "mockjs"

Mock.mock("/goods", {code: 0, data: mockData.goods})
Mock.mock("/ratings", {code: 0, data: mockData.ratings})
Mock.mock("/info", {code: 0, data: mockData.info})
