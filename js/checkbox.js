$(".btn-checkbox").on("click", function () {
    $(this).parent().toggleClass("isSelected");
});

function check() {
    var checked = 0;
    $("input:checkbox").each(function () {
        if ($(this).is(':checked')) {
            checked++;
        }
    });
    if (checked > 2) {
        alert('Selesai');
    }
    else {
        alert('Setidaknya Anda Memilih 3');
    }
}