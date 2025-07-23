const DEBUG = false;

$(document).ready(() => {
    setTimeout(() => {
        $('#init').css('display', 'none');
        $('#after').css('display', 'inline');

        setTimeout(() => {
            $('#content-container').css('display', 'flex');
        }, 1000);
    }, DEBUG?0:2900);

    $('#gll').on('click', () => {
        $('#splash').text('Good Luck!');
        $('#init').css('display', 'flex');
        $('#after').css('display', 'none');
        setTimeout(() => {
            window.location = '/goodluckle';
        }, 1500);
    });

    $('#midori').on('click', () => {
        $('#splash').text('Kuyashii!');
        $('#init').css('display', 'flex');
        $('#after').css('display', 'none');
        setTimeout(() => {
            window.location = '/blue-archival';
        }, 1500);
    });
});