import $ from 'jquery';

export const logPoke = poke => (
    $.ajax({
        method: 'POST',
        url: '/api/pokes',
        data: { poke }
    })
);



