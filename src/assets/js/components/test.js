export const test2 = function() {
  const $navLink = $('.nav-link');
  
  $navLink.on('click', function(e) {
    const $target = $(e.currentTarget);
    const id = $target.attr('href');
    const $targetBlock = $(id);

    $targetBlock.append('<span>About us block</span');
  })
}

export const test3 = 'aaaa'; 

export default function () {
  console.log('test');
}