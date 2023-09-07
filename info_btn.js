function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var modal = document.getElementById("myModal");
    if (sidebar.style.width === "300px") {
        sidebar.style.width = "0";
        modal.style.display = "none"; // 메뉴가 닫힐 때 모달을 숨김
        document.body.style.overflow = "auto"; // 스크롤 활성화
    } else {
        sidebar.style.width = "300px";
        modal.style.display = "block"; // 메뉴가 열릴 때 모달을 보임
        document.body.style.overflow = "hidden"; // 스크롤 비활성화
    }
}

const toggleNav = document.getElementById('toggleNav');
const navbar = document.querySelector('.navbar');

// 스팬을 클릭하면 네비게이션 바 토글
toggleNav.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});


