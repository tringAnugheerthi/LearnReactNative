pipeline {
    agent any
        stages {
            stage ('One') {
                steps {
                    echo 'Stage One Executed...'
                    sh 'npm install'
                }
            }
            stage ('Two') {
                steps {
                    echo 'Stage Two Executed'
                     sh 'npm run test'
                  //  input('Do you want to continue?')
                }
            }
            stage ('Three') {
                when {
                        not {
                            branch "master"
                        }
                    }
                steps {
                    echo 'Stage Three Executed...'
                }
            }
            stage ('Four') {
                parallel {
                    stage ('Unit Test') {
                        steps {
                            echo 'Running unit test...'
                        }
                    }
                    stage ('Integration Test') {
                        steps {
                            echo 'Running Integration testing...'
                        }
                    }
                }
                
            }
        }
}