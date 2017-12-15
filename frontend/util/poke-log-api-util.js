import $ from 'jquery';

export const getPokes = date => (
  $.ajax({
    method: 'GET',
    url: 'api/pokes',
    data: { date },
  })
)