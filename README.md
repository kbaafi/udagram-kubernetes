# Kubernetes Microservices Deployment

This project show cases the deployment of a microservice on AWS using Kubernetes as the container orchestration platform

## About the Application

## Dependencies

* kubectl
* eksctl
* AWS RDS Database
* AWS S3 static web hosting(for frontend)
* AWS S3 bucket for hosting uploaded images

## Deployment files

The deployment files for this project can be found in `deployment/kubernetes-aws`

## Starting the AWS Cluster

To create a cluster, run

```sh
    cd kubernetes-aws
    eksctl create cluster --config-file=eks-cluster-config/cluster-config.yaml
```

This create a Kubernetes cluster in a public subnet in the region specified in the config file

## Deploying the application

### 1. Volumes, Secrets and Configmaps

The configurations for these can be found in the folder `kubernetes-aws\appconfig`. It contains secrets for connecting to the database and S3 file store. To deploy these run

```sh
kubectl apply -f ./appconfig
```

### 2. Feed Service, User Service and Reverse Proxy

A reverse proxy is an Nginx webserver that  routes incoming requests between the User microservice and the Feed Microservice

First apply the pod deployments for the microservices

```sh
kubectl apply -f ./deployments
```

To ensure that your deployments run, make sure that the RDS database is up and running in AWS

Then apply the services

```
kubectl apply -f ./services
```

Run `kubectl get services` to reveal the deployed services. Since the reverse proxy is exposed with type=**LoadBalancer**, AWS will provision a load balancer and expose its address. 



In this case, you can reach the reverse proxy at **:8080**

### 3. Frontend

The Frontend is developed in ionic and to build it, you can run the below command. However, before you do the frontend has to be modified to point to the reverse proxy of the backend. You can edit the file `fronten/src/environment/environment.prod.ts`

```sh
ng build
```

Running the command will create a `www` output folder in the `frontend` folder. Create a hosted static website using AWS S3 to serve the frontend. Copy the contents of the `www` folder to the created bucket

For purposes of restricting access to the backend from only allowed websites, you have to modify the file `kubernetes-aws/appconfig/configmaps.yaml` to the address of the created website and apply that file.

You may need to repeat Step 2 for your changes to take effect.

## Rolling Updates


## A/B Deployment
