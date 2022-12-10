build-CodeLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	npm install
	npm install typescript
	npx tsc index.ts --esModuleInterop
	cp *.js "$(ARTIFACTS_DIR)/nodejs"