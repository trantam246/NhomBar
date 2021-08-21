// import { findStudentByName } from './modules/findStudentByName.js'
import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

const listPointStudent = moduleFn.generatorPointClass(data);
const findStudentByName = moduleFn.findStudentByName
const handleSearch = () => {
    const search = document.querySelector('.searchbar')//class input
    const btnSearch = document.querySelector('.btn-search')//btn tra cuu diem
    const results = document.querySelector('.results')
    btnSearch.addEventListener('click', () => {
        const valueName = search.value
        if (valueName) {
            const html = findStudentByName(valueName, listPointStudent).map(item => {
                console.log(item)
                let dayPoint = item.points.map(s => s[0] + ": " + s[1] + " | ").join('')
                return `<ul>
                            <li>STT:${item.stt}</li>
                            <li>Tên đầy đủ:${item.name}</li>
                            <li>Nhóm:${item.group}</li>
                            <li>Vị trí:${item.position}</li>
                            <li>Tổng điểm:${item.totalPoint}</li>
                            <li>${dayPoint}</li>
                            <li>Xếp hạng nhóm:${item.groupRank}</li>
                            <li>Xếp hạng lớp:${item.classRank}</li>
                        </ul>`
            }
            ).join('')
            if (results)
                results.innerHTML = html
        }
        else
            results.innerHTML = ""
    })
}
const randomPoints = () => {
    const btnRandom = document.querySelector('.btn-random')
    console.log(btnRandom)
    btnRandom.addEventListener('click', () => {
        listPointStudent
        alert("Giả lập thành công")
    })
}
handleSearch()
randomPoints()