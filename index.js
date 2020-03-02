$(function () {
  $("#js-shopping-list-form").on("submit", function (event) {
    // Prevent default behavior of submit
    event.preventDefault();
    // Enter item and add the item to the ul with proper classes applied
    const shoppingItem = $('input[name="shopping-list-entry"]').val();
    const newClone = $(".container ul li").last().clone();
    const addedItem = $(".container ul ").last().append(newClone);
    const addName = $('.container ul li').last().find('.shopping-item').text(shoppingItem);

    //Clear: Add an item field area
    $('input[name="shopping-list-entry"]').val('');

    // Toggle checked and remove for created items 
    $('.container ul li').last().find('.shopping-item-toggle').on('click', function (event) {
      $(this).closest('div').prev().toggleClass('shopping-item__checked');
    })

    $('.container ul li').last().find('.shopping-item-delete').on('click', function (event) {
      $(this).closest('div').parent().remove();
    })
  });
  // Toggle checked and remove for items already there
  $('.shopping-item-toggle').on('click', function (event) {
    $(this).closest('div').prev().toggleClass('shopping-item__checked');
  });
  $('.shopping-item-delete').on('click', function (event) {
    $(this).closest('div').parent().remove();
  });

});
