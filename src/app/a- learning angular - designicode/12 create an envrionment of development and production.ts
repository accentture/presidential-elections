/* 
    --in the folder environmentes angular offer a configurations for environment and production

    --now I go to simulate an environment of development named : 
        environment.dev.ts



    --doing configurations in angular.json to use development mode
            "dev": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.dev.ts"
                }
              ]
            }



    --configurion server
            "dev": {
                "production": {
                "browserTarget": "presidentialElection:build:dev"
                }
            }



    --creating script in package.json
            after 
                    start": "ng serve",
            before:
                   "start:dev": "ng serve --c-dev",  -> this script run development
                    "start:prod": "ng serve --c-prod",   -> this script run production


    --executing script for development envrionment
            npm run start:dev



    --configurating script for built



*/