const express = require('express');
const router = express.Router();

//挂载路由
router.get('/user/list', (req, res) => {
    res.send('show user list')
})

router.get('/clicked', (req, res) => {
    res.send(`
    <h1> send by express</h1>
    <div style="color:blue;">express</div>
    `);
})

const todoList = [];

const listItemNode = (item) => {
    return (
        ` <li class="px-4 py-2 bg-gray-200 rounded-md mb-2 flex items-center justify-between">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-red-500" onchange="toggleCheckbox(this)">
                <span class="ml-2">${item}</span>
            </label>
            <button class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                onclick="deleteItem(this.parentElement)">
                Delete
            </button>
         </li>`
    )
}

router.post('/user/add', (req, res) => {
    // 获取请求体中的数据
    const addData = req.body;
    const { oneList } = addData;
    if (!oneList) return;
    todoList.push(oneList);
    console.log('todoList:', todoList);

    const listItems = todoList.map(item => listItemNode(item)).join('');
    console.log('listItems', listItems)
    res.send(listItems);
});



module.exports = router;