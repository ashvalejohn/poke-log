import $ from 'jquery';

export const getBleeds = () => (
  $.ajax({
  method: 'GET',
  url: 'api/bleeds'
      })
);

