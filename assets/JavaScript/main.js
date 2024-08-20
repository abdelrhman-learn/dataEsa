function toggleMenu() {
    var menu = document.querySelector('.dropdown-menu');
    var content = document.querySelector('.main-content');
    var body = document.querySelector('body');

    menu.classList.toggle('show');
    content.classList.toggle('blur-background');
    closeAllSubMenus();

    // تحقق إذا كانت القائمة مفتوحة، قم بتفعيل أو إلغاء خاصية التمرير
    if (menu.classList.contains('show')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}
function openSubMenu(subMenuId) {
    // إخفاء القائمة الرئيسية
    document.getElementById('main-menu').style.display = 'none';

    // إظهار القائمة الفرعية
    document.getElementById(subMenuId).style.display = 'block';

    // تغيير العنوان وإظهار السهم
    document.getElementById('menu-title').innerHTML = '<i id="back-arrow" class="fas fa-chevron-right" onclick="closeSubMenu()"></i> الرجوع';
}

function closeSubMenu() {
    // إخفاء جميع القوائم الفرعية
    closeAllSubMenus();

    // إظهار القائمة الرئيسية
    document.getElementById('main-menu').style.display = 'block';

    // إعادة العنوان إلى النص الأصلي وإخفاء السهم
    document.getElementById('menu-title').innerHTML = 'القائمة الرئيسية';
}

function closeAllSubMenus() {
    // إخفاء جميع القوائم الفرعية
    var subMenus = document.querySelectorAll('.dropdown-menu ul');
    subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';
    });

    // عرض القائمة الرئيسية
    document.getElementById('main-menu').style.display = 'block';

    // إعادة العنوان إلى "القائمة الرئيسية" وإخفاء السهم
    var menuTitle = document.getElementById('menu-title');
    menuTitle.textContent = 'القائمة الرئيسية';

    var backArrow = document.getElementById('back-arrow');
    if (backArrow) {
        backArrow.style.display = 'none';
    }
}

// add to favortion button toggle
let toggleBtn = document.querySelectorAll("[data-toggle-btn]");

// Toggle button state and save to localStorage
toggleBtn.forEach((btn, index) => {
    // Check localStorage to set initial state
    let savedState = localStorage.getItem(`btnState-${index}`);
    if (savedState === 'fa-solid') {
        btn.classList.remove('fa-regular');
        btn.classList.add('fa-solid');
    } else {
        btn.classList.remove('fa-solid');
        btn.classList.add('fa-regular');
    }
    // Toggle and save state on click
    btn.addEventListener("click", () => {
        if (btn.classList.contains('fa-regular')) {
            btn.classList.replace('fa-regular', 'fa-solid');
            localStorage.setItem(`btnState-${index}`, 'fa-solid');
        } else {
            btn.classList.replace('fa-solid', 'fa-regular');
            localStorage.setItem(`btnState-${index}`, 'fa-regular');
        }
        
        let notificationSoundTwo = document.getElementById('notification-sound-two');
        notificationSoundTwo.play();
    });
});

/*==== */
document.addEventListener('DOMContentLoaded', function() {
    // استرجاع القيمة من localStorage وتحديث عدد السلة عند تحميل الصفحة
    let cartCountElement = document.getElementById('cart-count');
    let savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        cartCountElement.textContent = savedCount;
    } else {
        cartCountElement.textContent = '0'; // تأكيد أن العدد يبدأ من الصفر إذا لم يكن هناك قيمة محفوظة
    }

    // إضافة حدث عند الضغط على زر الإضافة للسلة
    document.querySelectorAll('.add-to-cart').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // تحديث عدد السلة
            let currentCount = parseInt(cartCountElement.textContent);
            let newCount = currentCount + 1;
            cartCountElement.textContent = newCount;

            // حفظ العدد في localStorage
            localStorage.setItem('cartCount', newCount);

            // تشغيل صوت الإشعار
            let notificationSound = document.getElementById('notification-sound');
            notificationSound.play();
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling while the spinner is visible
    document.body.classList.add('no-scroll');
});

window.addEventListener("load", function() {
    let loader = document.querySelector(".spinner-contuner");
    let body = document.querySelector("body");
    
    // Hide the spinner and re-enable scrolling after the page has loaded
    loader.classList.add('hidden');
    body.classList.remove('no-scroll');
});