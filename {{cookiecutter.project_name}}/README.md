# {{cookiecutter.project_name}}

## Requirements
* [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli)

## Build
You should use npm's build command: `npm run build` and you can test the function by running: `sam local invoke HelloWorldFunction --no-event`

## Step through debugging

### VSCode Steps

1. Run `npm run watch` in a separate terminal
2. Add a breakpoint within `src/index.ts`
2. Run `sam local invoke HelloWorldFunc --event src/hello-world/event.json -d 5858`
3. Switch to index.ts within VS Code and hit the debugger - Profit!
