# shared

### Генерация прото
protoc \
  -I ./src/contracts/proto \
  ./src/contracts/proto/*.proto \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/contracts/gen \
  --ts_proto_opt=nestJs=true,package=omit
