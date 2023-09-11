docker build -t justin8888/multi-client:latest -t justin8888/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t justin8888/multi-server:latest -t justin8888/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t justin8888/multi-worker:latest -t justin8888/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push justin8888/multi-client:latest
docker push justin8888/multi-server:latest
docker push justin8888/multi-worker:latest

docker push justin8888/multi-client:$SHA
docker push justin8888/multi-server:$SHA
docker push justin8888/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=justin8888/multi-server:$SHA
kubectl set image deployments/client-deployment client=justin8888/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=justin8888/multi-worker:$SHA