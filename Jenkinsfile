pipeline {
    agent any
    stages {
        stage('git clone') {
            steps {
               git branch: 'main', url: 'https://github.com/Devivaraprasadreddy/portfolioreactwithjenkins.git'
            }
        }
    
        stage('create the docker image') {
            steps {
            sh 'sudo docker build -t dsp9391/reddyreactportfolioshiwansh:latest .'
            }
        }
         stage('docker push ') {
            steps {
                withCredentials([string(credentialsId: 'Docker_hub', variable: 'Docker_passwd')]) {
    
        sh "sudo docker login -u dsp9391 -p $Docker_passwd"
        }
        sh "sudo docker push dsp9391/reddyreactportfolioshiwansh:latest"
        }
         }
        
      stage('Deploy to Kube Env') {
    steps {
  withKubeConfig(caCertificate: '', clusterName: 'my-eks22.us-east-1.eksctl.io', contextName: '', credentialsId: 'k8s-cred', namespace: 'default', restrictKubeConfigAccess: false, serverUrl: 'https://B95F8928FB9E5307A5F3A5BDA6E89975.gr7.us-east-1.eks.amazonaws.com') {
     sh " kubectl delete deploy portfolio-react-shiwansh"
     sh "kubectl apply -f k8-dep-svc.yml"   
}
}
}
}
}


