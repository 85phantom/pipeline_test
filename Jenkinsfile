node {
  stage('clone') {
    git 'https://github.com/85phantom/pipeline_test.git'
  }

  stage('test'){
    sh 'ls -ahl'
    sh './run_test.sh'
  }
}
