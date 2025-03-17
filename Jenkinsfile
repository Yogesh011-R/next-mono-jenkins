pipeline {
    agent any
    
    triggers {
        githubPush()
    }
    
    stages {
        stage('Checkout') {
            when {
                expression { 
                    return env.GIT_BRANCH == 'origin/main' 
                }
            }
            steps {
                checkout scm
            }
        }
        
        stage('Deploy to Stage') {
            when {
                expression { 
                    return env.GIT_BRANCH == 'origin/main' 
                }
            }
            steps {
                sshagent(['mono_next_stage_server']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no yogesh@34.93.164.73 "cd next-mono-jenkins/ && \
                        export PATH=/home/yogesh/.nvm/versions/node/v22.14.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/home/yogesh/.local/share/pnpm && \
                        git pull && \
                        ~/.local/share/pnpm/pnpm install && \
                        ~/.local/share/pnpm/pnpm build && \
                        pm2 restart all"
                    '''
                }
            }
        }
    }
}