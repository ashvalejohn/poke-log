import $ from 'jquery';

export const updateUser = payload => (
    $.ajax({
        method: 'PATCH',
        url: '/api/users',
        data: { user: payload }
    })
);

