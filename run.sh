docker run \
    --rm \
    --name nomad_nestjs \
    --volume $(pwd):/node/app \
    --workdir /node/app \
    -p 3000:3000 \
    -it node:lts /bin/bash