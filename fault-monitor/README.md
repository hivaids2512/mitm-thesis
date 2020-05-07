# Node Server Template

A very simple nodejs server for starting your project quickly

## Getting Started

Before going futher, lets setup the project evironment variables in:

```
./app/config/env
```

## App Structure
    .
    ├── ...
    ├── app                     # Application source code
    │   ├── config              # Application config
    |   │   ├── env
    |   |   ├── constant.js     # Application constants
    |   |   └── passport.js     
    │   ├── lib                 # Shared code that can be re-used by modules
    │   └── modules             # Application modules
    |       ├── module 1
    |       |   ├── sub_module1     
    |       |   ├── sub_module2     # sub-modules
    |       |   └── sub_module3      
    |       ├── module 2    
    |       └── module 3     
    ├── test                    # Test files (alternatively `spec` or `tests`)
    |   ├── module 1
    |   |   ├── sub_module1     
    |   |   ├── sub_module2     # sub-modules test files
    |   |   └── sub_module3      
    |   ├── module 2    
    |   └── module 3    
    └── ...

## Start dev server

```
npm run dev
```

Dev server will restart automatically when code changes detected

## Running your tests

```
npm run test
```

Test your application with Mocha + Chai + Istanbul

## Running in production

```
npm run prod
```
Run your application with foreverJs
