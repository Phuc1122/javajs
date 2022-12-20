var corses = ['HTML & CSS', 'javascript', 'PHP', 'Java']
var ulElent = document.querySelector('.courses-list')
var liCourses = corses.map(function(item){
    return `<li>${item}/<li>`;
})
var html = liCourses.join('')
ulElent.innerHTML = html;
//console.log(liconsres)