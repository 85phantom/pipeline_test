node {
  stage('clone') {
    git 'https://github.com/85phantom/pipeline_test.git'
  }

  stage('test'){
    nodejs('Node-8.11.2') {
      sh './run_test.sh'
    }
  }
}
