build:
	docker build -t my-todo-list-image .
run: build
	docker run -it -p 8080:8080 --rm --name my-todo-list-app my-todo-list-image
