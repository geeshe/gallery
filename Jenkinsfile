pipeline {

    agent any

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
                sh 'npm test'
            }
        }
        
        
        stage('Deploy to Heroku') {
            steps {
                sh 'git push https://git.heroku.com/salty-ocean-58545.git master'
                // withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                // sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/salty-ocean-58545.git master'
                // }
            }
        }
        
         
       
    }
 }