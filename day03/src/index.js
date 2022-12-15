import fs from 'fs/promises'
const PATH = './mock/prod.txt'

const handleDataCollection = (dataArr) => {
  let finalScore = 0
  dataArr.forEach((line) => {
    console.log(line)
  })
  console.log(finalScore)
}

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' })
    const dataArr = data.split(/\r?\n/)
    handleDataCollection(dataArr)
  } catch (err) {
    console.log(err)
  }
}

const start = (pathFile) => {
  readFile(pathFile)
}

start(PATH)
