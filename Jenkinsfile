pipeline {

    agent any

//    agent {
//         docker {
//             image 'node'
//             args '-u root'
//         }
//     }

//    environment {
//          HOME = '.'
//         //  NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
//     }

    tools {
        nodejs "node"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                // sh 'npm test'
            }
        }
        
        stage('Deploy to Heroku') {
            steps {
                echo 'Deploying'
            }
        }
         
       
    }
 }