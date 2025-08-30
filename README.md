### Launch Two EC2 Instances on AWS Console
1. Jenkins Server
2. Kubernetes Server

### In Kubernetes Server
1. Install AWS CLI
   curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
   sudo apt install unzip
   unzip awscliv2.zip
   sudo ./aws/install
   // Before configure you must have the access key and secret access key. If you dont have go to IAM-> Users -> Create Access and Secret key and download in your local system
   aws configure
3. Install Kubectl
   curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
   chmod +x ./kubectl
   sudo mv ./kubectl /usr/local/bin
   kubectl version --short --client
4. Install EKSCTL
   curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
   sudo mv /tmp/eksctl /usr/local/bin
   eksctl version
5. Create EKS Cluster on K8's Server
   eksctl create cluster --name=my-eks22 \
                      --region=us-east-1 \
                      --zones=us-east-1a,us-east-1b \
                      --version=1.31 \
                      --without-nodegroup

6. Create IAM OIDC Provider
   eksctl utils associate-iam-oidc-provider \
    --region us-east-1 \
    --cluster my-eks22 \
    --approve
7. Create NodeGroup
   eksctl create nodegroup --cluster=my-eks22 \
                       --region=us-east-1 \
                       --name=node2 \
                       --node-type=t3.medium \
                       --nodes=3 \
                       --nodes-min=2 \
                       --nodes-max=4 \
                       --node-volume-size=20 \
                       --ssh-access \
                       --ssh-public-key=ansible \     // Whatever You created while launching instance
                       --managed \
                       --asg-access \
                       --external-dns-access \
                       --full-ecr-access \
                       --appmesh-access \
                       --alb-ingress-access
8. Create Service Account (Please Verify in this Repository named as "sa.yml"
9. Create Role (Please Verify in this Repository named as "role.yaml"
10. Create Rolebinding (Please Verify in this Repository named as "rolebind.yml"
11. Create Secret (Please Verify in this Repository named as "secret.yml"

### In Jenkins Server
1. Install Jenkins
   
   sudo apt-get update
   
   sudo apt-get install default-jdk -y
   
   curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

   sudo apt-get update
   
   sudo apt-get install jenkins -y

2. Install Kubectl
   1. Install AWS CLI
     curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
     sudo apt install unzip
     unzip awscliv2.zip
     sudo ./aws/install
     // Before configure you must have the access key and secret access key. If you dont have go to IAM-> Users -> Create Access and Secret key and download in your local system
     aws configure
  2. Install Kubectl
     curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
     chmod +x ./kubectl
     sudo mv ./kubectl /usr/local/bin
     kubectl version --short --client
  3. Install Docker from Docker official Website
     # Add Docker's official GPG key:
      sudo apt-get update
      sudo apt-get install ca-certificates curl
      sudo install -m 0755 -d /etc/apt/keyrings
      sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
      sudo chmod a+r /etc/apt/keyrings/docker.asc
     # Add the repository to Apt sources:
      echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
      sudo apt-get update
  4. In k8's server
     sudo su -
    vi /etc/sudoers
    jenkins ALL=(ALL) NOPASSWD: ALL

### After Installation Successfull
1. Copy your jenkins server Public IP and paste it into browser EX: http://13.141.29.1:8080 (Go to security Groups -> Edit Inbound Rules -> Custom TCP -> 8080 -> Anywhere -> 0.0.0.0
2. Connect your jenkins server into browser it will ask the password for authentication /var/lib/jenkins/secrets/intialAdminPassword/
3. In your jenkins console type command as "cat /var/lib/jenkins/secrets/intialAdminPassword/"
4. It will provide some token copy and paste it into jenkins server in browser
5. select install plugins
6. Give your details

### In Jenkins Dashboard
1. Go to settings/Manage Jenkins -> Credentials -> click on global -> select secret text -> give your dockerhub password and give some id

### In K8's Console
1. Check the token for kubectl
2. Command as " kubectl get secret"
3. kubectl describe secret mysecretname
4. It will give token copy that token and paste it into jenkins dashboard -> settings/Manage Jenkins -> Credentials -> click on global -> select secret text -> give some name

### Create pipeline

### Install some plugins
1. Kubectl CLI
2. kubernetes
3. blue ocean

After that you will be getting load balancer url you can copy it in browser or local
In Local: curl http://ad77c03461d3f45beb51e26fb3057769-2086412298.us-east-1.elb.amazonaws.com:80
In browser: http://ad77c03461d3f45beb51e26fb3057769-2086412298.us-east-1.elb.amazonaws.com:80


