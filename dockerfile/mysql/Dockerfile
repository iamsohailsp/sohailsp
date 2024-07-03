# Use the official MySQL image as the base image
FROM mysql:5.7

# Set environment variables for MySQL
ENV MYSQL_DATABASE instagram_clone
ENV MYSQL_ROOT_PASSWORD rootpassword
ENV MYSQL_USER user
ENV MYSQL_PASSWORD userpassword

# Copy the setup SQL file to the Docker image
COPY ./db/setup.sql /docker-entrypoint-initdb.d/
