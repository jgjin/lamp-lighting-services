#!zsh

createdb lamps

poetry run flask --app=lamps --debug run
