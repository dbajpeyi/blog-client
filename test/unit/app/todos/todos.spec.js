describe('', function() {

  beforeEach(function(){
    module('app')
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected)
      }
    })
  })

  describe("TodoCtrl", function() {
    var scope, ctrl, $httpBackend
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_
      $httpBackend
        .when("GET", '/app/api/v1/todos')
        .respond(mockTodoListResponse())
                              
      scope = $rootScope.$new()
      ctrl = $controller("TodoCtrl", {$scope: scope})
    }))

    function mockTodoList() {
      return [
        { activity: "Test task 1", completed: false, id: "f00" },
        { activity: "Test task 2", completed: true, id: "b00" }
      ]
    }

    function mockTodoListResponse() {
      return { todos: mockTodoList() }
    }

    it("attaches the list of todos to the scope", function() {
      $httpBackend.flush()
      expect(scope.todos).toEqualData(mockTodoList())
    })

    it("sets the status as true (200 response from server)", function() {
      $httpBackend.flush()
      expect(scope.status).toBe(true)
    })

    it("calculates remaining properly", function() {
      $httpBackend.flush()
      expect(scope.remaining()).toBe(1)
    })

    describe("completeall", function() {
      beforeEach(function() {
        $httpBackend
            .when("GET", '/app/api/v1/todos/completeall')
            .respond({status: 'ok'})
      })

      it("should mark everything completed", function() {
        scope.completeAll()
        $httpBackend.flush()

        expect(scope.todos[0].completed).toBe(true)
        expect(scope.todos[1].completed).toBe(true)
      })

      it("should have 0 remaining", function() {
        scope.completeAll()
        $httpBackend.flush()

        expect(scope.remaining()).toBe(0)
      })
    })

    describe("toggle state", function() {
      var todo

      beforeEach(function() {
        $httpBackend.flush()
        todo = scope.todos[0]

        $httpBackend
            .when("GET", "/app/api/v1/todos/"+todo.id+"/toggle")
            .respond({id: todo.id, completed: true})
      })

      it("should mark status completed", function() {
        scope.toggleState(todo.id)
        $httpBackend.flush()

        expect(scope.todos[0].completed).toBe(true)
      })

      it("should have 0 remaining", function() {
        scope.toggleState(todo.id)
        $httpBackend.flush()

        expect(scope.remaining()).toBe(0)
      })
    })
  })

  describe("TodoCtrl 500 response code:", function() {
    var scope, ctrl, $httpBackend
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_
      $httpBackend
        .when("GET", '/app/api/v1/todos')
        .respond(500, "Timeout")
                              
      scope = $rootScope.$new()
      ctrl = $controller("TodoCtrl", {$scope: scope})
    }))

    it("should set status as false", function() {
      $httpBackend.flush()
      expect(scope.status).toBe(false)
    })

    it("should not set todos", function() {
      $httpBackend.flush()
      expect(scope.todos).toBe(undefined)
    })
  })
})
