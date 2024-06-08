FROM python:3.10 as setup
EXPOSE 8000
WORKDIR /app
RUN ["apt", "update"]
RUN ["apt", "install", "-y", "pipx"]

RUN ["pip", "install", "poetry"]

COPY poetry.lock pyproject.toml ./

RUN ["poetry", "install", "--no-root"]

####################################################
FROM setup AS dev-mount
# Assumes that the app directory is bound to the host

ENTRYPOINT [ "poetry", "run", "python", "-m", "debugpy", "--listen", "0.0.0.0:8009", "manage.py", "runserver", "0.0.0.0:8000" ]


####################################################
FROM setup AS deploy

COPY ./ ./

ENTRYPOINT [ "poetry", "run", "uwsgi", "--ini", "uwsgi.ini" ]