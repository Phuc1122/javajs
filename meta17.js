var headingElement = document.querySelector('h2');
//thêm các thuộc tính hợp lệ
headingElement.title = 'heading 2';
headingElement.id = 'head2';
headingElement.className = 'head2'
// thêm các thuộc tính bất kỳ
headingElement.setAttribute('class','head2')
headingElement.setAttribute('href','head2')
headingElement.setAttribute('data-1','head2')

// Lấy giá trị thuộc tính
console.log(headingElement.getAttribute('class'))
console.log(headingElement.title);
console.log(headingElement);