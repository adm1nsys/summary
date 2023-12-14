document.getElementById('menu-toggle').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
    } else {
        sidebar.style.left = '0px';
    }
});

document.getElementById('menu-toggle1').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        console.log("-300px");
    } else {
        sidebar.style.left = '0px';
        console.log("0px");
    }
});


let profilePhoto = document.getElementById('profile-photo');
let isStandard = true;

setInterval(function() {
    if (isStandard) {
        profilePhoto.src = 'img/lcustom.JPG'; // Переключаем на второе фото
    } else {
        profilePhoto.src = 'img/lstandart.JPG'; // Переключаем обратно на стандартное фото
    }
    isStandard = !isStandard;
}, 1000); // Переключение каждую секунду
