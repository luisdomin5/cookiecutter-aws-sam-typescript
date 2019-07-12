# {{cookiecutter.project_name}}

## Requirements
* [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli)

## Build
You should use npm's build command: `npm run build` and you can test the function by running: `sam local invoke HelloWorldFunction --no-event`

## Step through debugging

### Config
Copy this to the local disk as launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "SAM TS Webpack",
            "type": "node",
            "request": "attach",
            "address": "localhost",
            "port": 5858,
            // Location to where the transpiled JS file is: follows CodeUri
            "localRoot": "${workspaceRoot}/build",
            "remoteRoot": "/var/task",
            "protocol": "inspector",
            "stopOnEntry": false,
            // Same as LocalRoot given we run on a docker container
            // outFiles allows VSCode debugger to know where the source code is after finding its sourceMap
            "outFiles": [
                "${workspaceRoot}/build/index.js"
            ],
            // instructs debugger to use sourceMap to identify correct breakpoint line
            // and more importantly expand line/column numbers correctly as code is minified
            "sourceMaps": true
        }
    ]
}
```

### Steps

1. That should ensure `${workspaceRoot}` is correctly set. If SAM TS Webpack isn't shown in the Debugger drop down menu, create a new one by copying/pasting launch.json contents.
2. Add a breakpoint within `src/index.ts`
3. Run `sam local invoke HelloWorldFunc --no-event -d 5858`
4. Switch to index.ts within VS Code and hit the debugger - Profit!

### Troubleshooting
Reasons why Step through debugging wasn't working:

#### Missing libraryTarget: commonjs2 instruction for Webpack
Default bundle output wasn't compatible with what Lambda NodeJS Runtime expects, and therefore the error: `{"errorMessage":"Handler 'handler' missing on module 'index'"}`

#### Missing outFiles VSCode Debug option
`outFiles` instructs VSCode that code being debugged has been transpilled to a separate location. That alongside with `sourceMaps: true` makes it possible for VSCode to know where to circle back for the correct line in the breakpoint, and what file to find the source code now transpiled.