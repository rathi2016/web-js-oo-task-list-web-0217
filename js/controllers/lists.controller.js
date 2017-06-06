'use strict';
class ListsController {
  constructor () {
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  };

  hideTaskForm(){
    this.$addTaskForm.hide();
  };

  addListFormListener (){
    this.$addListForm.submit((event) => {
      event.preventDefault()
      var list = new List(this.$listTitleInput.val());
      list.build();
      this.$addTaskForm.one().show();
      this.$listTitleInput.val('');
    });
  };

  destroyListLiveEventListener () {
    this.$wrapper.on('click', '.destroy-list', function () {
      var listId = parseInt($(this).parents('h2').next('ul').data('id'));
      List.all.splice(listId, 1, null);
      this.$selectListMenu.find('option[value="'+listId+'"]').remove();
      $(this).parents('.list').remove();
    });
  };

  init() {
    this.hideTaskForm();
    this.addListFormListener();
    this.destroyListLiveEventListener();learn
  };

}
