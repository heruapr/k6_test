/*
 * This Jenkinsfile controls qa-backend-mocha docker image
 * Version 0.0.1
 * Maintained by: Investree QA
 */

def slave = 'automation-test-slave'
podTemplate(
  label: slave,
  containers:[
    containerTemplate(
      name: 'qa-docker', image: 'node:14.16.0-alpine', command: 'cat', ttyEnabled: 'true')],
  volumes:[
    hostPathVolume(
      hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    persistentVolumeClaim(
      mountPath: '/root', claimName: 'slave-root-home', readOnly: 'false')]
) {
  node(slave) {
  container('qa-docker') {
        stage('Performance Testing') {
                echo 'Running K6 performance tests...'
                sh label: 'installing', script: 'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69'
                sh label: 'installing', script: 'echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list'
                sh label: 'installing', script: 'apt-get update'
                sh label: 'installing', script: 'apt-get install k6'
                sh label: 'run k6', script: 'k6 run test.js'
        }
    }
  }
}