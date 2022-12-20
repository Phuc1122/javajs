//Lấy ra các đối tượng h1
headingNode = document.querySelector('.heading')
//Lấy nội dung của h1
console.log(headingNode.innerText)
console.log(headingNode.textContent);
// Gán nội dung cho h1
headingNode.innerText='new heading';
headingNode.textContent = 'new heading 2';