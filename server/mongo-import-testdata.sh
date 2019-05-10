#!/bin/sh


# mongoimport <collection-name>
# searches automatically into test_data/<collection_name>.json
mongoimportjson() {
    mongoimport --jsonArray \
                --db Sagandunga \
                --collection $1 \
                --file test_data/$1.json  \
                --batchSize 1
}

mongoimportjson users
mongoimportjson locations
mongoimportjson items