FROM mysql:8.2.0
LABEL "Project"="Vprofile"
LABEL "Author"="sohail"

ENV MYSQL_ROOT_PASSWORD="vprodbpass"
ENV MYSQL_DATABASE="accounts"
ENV MYSQL_USER="admin_vp"
ENV MYSQL_PASSWORD="admin_vp"
WORKDIR /docker-entrypoint-initdb.d
COPY db_backup.sql docker-entrypoint-initdb.d/db_backup.sql

