FROM mysql:8.2.0
LABEL "Project"="Vprofile"
LABEL "Author"="sohail"

ENV MYSQL_ROOT_PASSWORD="vprodbpass"
ENV MYSQL_DATABASE="accounts"
EXPOSE 3306
ADD db_backup.sql docker-entrypoint-initdb.d/.
CMD ["mysqld"]
