import fs from 'fs/promises'
const PATH = './mock/prod.txt'

const ENUM_MAP_SCORE = {
	'A X': 4, // 1 + 3
	'A Y': 8, // 2 + 6
	'A Z': 3, // 3 + 0
	'B X': 1, // 1 + 0
	'B Y': 5, // 2 + 3
	'B Z': 9, // 3 + 6
	'C X': 7, // 1 + 6
	'C Y': 2, // 2 + 0
	'C Z': 6, // 3 + 3
}

const getLineScore = (line) => {
	return ENUM_MAP_SCORE[line]
}

const handleDataCollection = (dataArr) => {
	let finalScore = 0
	dataArr.forEach((line) => {
		finalScore += getLineScore(line)
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
