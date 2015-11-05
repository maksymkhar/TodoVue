/**
 * Created by max on 5/11/15.
 */

new Vue({

    el: '#tasks',

    data: {

        tasks: [

            { body: 'Go to the store', completed: false}
        ],

        newTask: ''

    },

    filters: {

        inProcess: function(tasks)
        {
            return tasks.filter(function(task)
            {
                return ! task.completed;
            });
        }
    },

    methods: {

        addTask : function (e)
        {
            e.preventDefault();

            this.tasks.push({

                body: this.newTask,
                completed: false
            });

            this.newTask = '';
        },
        removeTask: function(task)
        {
            this.tasks.$remove(task);
        },
        editTask: function(task)
        {
            //remove task

            this.removeTask(task);

            //update new task

            this.newTask = task.body;

            //focus new task inoput

            this.$$.newTask.focus();
        },
        completeTask: function(task)
        {
            task.completed = true;
        }

    }

})