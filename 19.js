headingNode =document.querySelector('.heading')
// lấy nội dung của h1
console.log(headingNode.innerText)//trả về nội dung tìm thấy trên trình duyệt
console.log(headingNode.textContent);//trả về toàn bộ nội dung, chỉ bỏ qua thẻ
// gán nội dung cho h1
headingNode.innerText = 'new heading 1'
headingNode.textContent ='new heading 2'