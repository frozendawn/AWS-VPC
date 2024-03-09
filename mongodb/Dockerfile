# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password
ENV MONGO_INITDB_DATABASE=mydatabase

# Copy custom configuration file if needed
# COPY mongod.conf /etc/mongod.conf

# Expose MongoDB port
EXPOSE 27017

# Start MongoDB service
CMD ["mongod"]