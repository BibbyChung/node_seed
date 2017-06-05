
mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
project_folder_path := $(patsubst %/,%,$(dir $(mkfile_path)))

list:
	@echo "docker-init: init the docker image"
	@echo "docker-build: build the project"

docker-init:
	docker build -t node:node_seed $(project_folder_path)/.
docker-build:
	docker run --rm -v $(project_folder_path):/node_seed node:node_seed npm run build
