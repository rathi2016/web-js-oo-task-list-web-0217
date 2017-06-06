'use strict';
class TasksController {
  constructor () {
    this.$addTaskForm = $('#add_task');
    this.$selectListMenu = $('#select_list');
    this.$taskDescriptionInput = $('#task_description');
    this.$taskPriorityInput = $('#task_priority');
    this.$wrapper = $('#wrapper');
  };

  addTaskFormListener () {
    this.$addTaskForm.submit((event) => {
      event.preventDefault()
      var listId = parseInt(this.$selectListMenu.val())
      var taskDescription = this.$taskDescriptionInput.val()
      var taskPriority = self.$taskPriorityInput.val()
      var task = new Task(taskDescription, taskPriority, List.all[listId]);
      task.build();
      this.$taskDescriptionInput.val('');
      this.$taskPriorityInput.val('');
    });
  };

  destroyListLiveEventListener () {
    this.$wrapper.on('click', '.destroy-task', function(){
      var listId = parseInt($(this).parents('ul').data('id')),
      taskId = parseInt($(this).parent('li').data('id')),
      list = List.all[listId];
      list.tasks.splice(taskId, 1, null);
      $(this).parent('li').remove();
    });
  };
  
  init () {
    this.addTaskFormListener();
    this.destroyListLiveEventListener();
  };
}
