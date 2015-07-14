class TasksController < ApplicationController

  def index
    @todos = [
        {
            id: '2',
            text: 'Learn React',
            complete: true
        },
        {
            id: '3',
            text: 'Learn Flux',
            complete: true
        },
        {
            id: '4',
            text: 'Enjoy JS!',
            complete: false
        }
    ]
  end

end
